import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { buildProfessorSystem } from "@/content/grad-school";

export const maxDuration = 30;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  let messages: ChatMessage[];
  try {
    const body = await req.json();
    messages = (body.messages as ChatMessage[]).filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length > 0 &&
        m.content.length <= 2000,
    );
    if (messages.length === 0) throw new Error("no messages");
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const result = streamText({
    // Direct Anthropic when a key is configured; otherwise the AI Gateway
    // (whose free tier no longer includes Claude — the widget's client-side
    // fallback covers that case).
    model: process.env.ANTHROPIC_API_KEY
      ? anthropic("claude-haiku-4-5")
      : "anthropic/claude-haiku-4.5",
    system: buildProfessorSystem(new Date()),
    // Bound the context we pay for — office hours, not a thesis committee.
    messages: messages.slice(-12),
    maxOutputTokens: 600,
    // Model failures surface only inside the stream (the 200 is already
    // sent); log them so `vercel logs` shows the cause, not an empty body.
    onError: ({ error }) => console.error("professor:", error),
  });

  return result.toTextStreamResponse();
}
