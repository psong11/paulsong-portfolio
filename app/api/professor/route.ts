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
    // Sonnet, not Haiku — the professor's voice is the product, and small
    // models regurgitate. ~1.5¢ per answer on this prompt size.
    model: process.env.ANTHROPIC_API_KEY
      ? anthropic("claude-sonnet-5")
      : "anthropic/claude-sonnet-5",
    system: buildProfessorSystem(new Date()),
    // Bound the context we pay for — office hours, not a thesis committee.
    messages: messages.slice(-12),
    // Thinking tokens count against maxOutputTokens on Sonnet 5 — low
    // effort keeps the budget for prose (office hours, not proofs) and
    // cuts latency; the cap has headroom so answers never clip mid-word.
    maxOutputTokens: 1400,
    providerOptions: {
      anthropic: { effort: "low" },
    },
    // Model failures surface only inside the stream (the 200 is already
    // sent); log them so `vercel logs` shows the cause, not an empty body.
    onError: ({ error }) => console.error("professor:", error),
  });

  return result.toTextStreamResponse();
}
