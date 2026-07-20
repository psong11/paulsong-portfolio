import { streamText } from "ai";
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
    model: "anthropic/claude-haiku-4.5",
    system: buildProfessorSystem(new Date()),
    // Bound the context we pay for — office hours, not a thesis committee.
    messages: messages.slice(-12),
    maxOutputTokens: 600,
  });

  return result.toTextStreamResponse();
}
