"use client";

import { useRef, useState } from "react";
import {
  MILESTONES,
  PROGRAM_START,
  PROGRAM_END,
  BENCH_TOTAL,
} from "@/content/grad-school";

// ————————————————————————————————————————————————————————————————
// Deterministic schedule math — the fallback brain when the Claude
// route is unreachable (offline, no gateway credits, adblock).
// Dates and gear should never be hallucinatable anyway.
// ————————————————————————————————————————————————————————————————

const DAY = 86_400_000;
const START = new Date(PROGRAM_START + "T12:00:00");
const END = new Date(PROGRAM_END + "T12:00:00");

const dueDate = (m: (typeof MILESTONES)[number]) => new Date(m.due + "T12:00:00");
const fmt = (d: Date) =>
  d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const bullets = (a: string[]) => a.map((g) => `• ${g}`).join("\n");

function parseToday(q: string): Date {
  const m = q.match(/today\s+is\s+([a-z0-9 ,/-]+?)(?:[.?,;!—]|$| what| when| and )/i);
  if (m) {
    const d = new Date(m[1].trim() + (/\d{4}/.test(m[1]) ? "" : " 2026"));
    if (!isNaN(d.getTime())) return d;
  }
  return new Date();
}

const currentIndex = (today: Date) =>
  MILESTONES.findIndex((m) => dueDate(m) >= today);

function statusAnswer(today: Date): string {
  if (today < START) {
    const d0 = Math.round((START.getTime() - today.getTime()) / DAY);
    return `Semester hasn't started — ${d0} day${d0 === 1 ? "" : "s"} until Aug 1, 2026. Pre-order the M0 gear now so bring-up starts on day one:\n${bullets(MILESTONES[0].gear)}`;
  }
  const i = currentIndex(today);
  if (i === -1) {
    return today <= END
      ? "Year 1 is complete — the rover defended its thesis with M6. You're in Year 2 (farm UAV, Oct 2027 → Aug 2028)."
      : "Commencement was August 2028. Class dismissed — go build the next thing.";
  }
  const m = MILESTONES[i];
  const dl = Math.round((dueDate(m).getTime() - today.getTime()) / DAY);
  const next = MILESTONES[i + 1];
  return (
    `You're in ${m.code} · ${m.name}, due ${fmt(dueDate(m))} (${dl} days left).\n\nShip: ${m.ship}\nBe learning: ${m.learn}.` +
    (next ? `\n\nNext up: ${next.code} · ${next.name}, due ${fmt(dueDate(next))}.` : "")
  );
}

function buyAnswer(today: Date): string {
  if (today < START)
    return `Order before the semester starts (Aug 2026):\n${bullets(MILESTONES[0].gear)}\n\nHold off on everything else — the bench is acquired milestone by milestone.`;
  const i = currentIndex(today);
  if (i === -1)
    return "Rover bench is complete. Year 2 procurement (airframe, PX4 flight controller, multispectral camera) gets specced after M6.";
  const cur = MILESTONES[i];
  const nxt = MILESTONES[i + 1];
  let out = "";
  if (cur.gear.length) out += `For ${cur.code} (in hand by now, ideally):\n${bullets(cur.gear)}`;
  if (nxt?.gear.length)
    out += `${out ? "\n\n" : ""}Order ahead for ${nxt.code} · ${nxt.name} (shipping time is real):\n${bullets(nxt.gear)}`;
  return (
    out ||
    `Nothing to buy right now — this stretch runs on gear you already own. Spend the budget on field time instead.`
  );
}

function fallbackAnswer(q: string): string {
  const today = parseToday(q);
  const lower = q.toLowerCase();
  const byName = MILESTONES.find(
    (m) => lower.includes(m.code.toLowerCase()) || lower.includes(m.name.toLowerCase()),
  );
  if (byName)
    return `${byName.code} · ${byName.name} — due ${fmt(dueDate(byName))}.\n\nShip: ${byName.ship}\nForces: ${byName.learn}.${byName.gear.length ? `\nGear: ${byName.gear.join("; ")}.` : ""}\nReading: ${byName.book}`;
  if (/(buy|order|purchas|gear|hardware|shop|parts)/.test(lower)) return buyAnswer(today);
  if (/(read|book|canon)/.test(lower)) {
    const i = today < START ? 0 : currentIndex(today);
    return i === -1
      ? "The canon is done when the robots are. Re-read Thinking in Systems before Year 2 — it reads differently once you've fought a real feedback loop."
      : `Pair with ${MILESTONES[i].code}: ${MILESTONES[i].book}`;
  }
  if (/(budget|cost|price|total|\$)/.test(lower))
    return `New spend this year: ${BENCH_TOTAL} — the aircraft, radios, and Rover Zero parts are already owned. The old rover bench (Jetson, RTK, LiDAR, ~$2.4K) is deferred behind Year 2's purchase gate.`;
  return statusAnswer(today);
}

// ————————————————————————————————————————————————————————————————
// The widget
// ————————————————————————————————————————————————————————————————

type Msg = { role: "user" | "assistant"; content: string };

const CHIPS = [
  "What's due right now?",
  "What should I buy next?",
  "Am I on schedule?",
  "ELRS vs SiK — why do I need both?",
];

const GREETING =
  "Office hours are open. Ask about deadlines, gear, the reading — or anything the syllabus should be able to answer, like \"explain SLAM at intuition tier.\" You can set the clock, too: \"today is July 19 2026 — what do I buy?\"";

export default function OfficeHours() {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  const scrollLog = () =>
    requestAnimationFrame(() => {
      logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
    });

  async function ask(q: string) {
    q = q.trim();
    if (!q || busy) return;
    setBusy(true);
    setInput("");
    const history: Msg[] = [...msgs, { role: "user", content: q }];
    // Optimistic user message + empty assistant slot to stream into.
    setMsgs([...history, { role: "assistant", content: "" }]);
    scrollLog();

    const setLast = (content: string) =>
      setMsgs([...history, { role: "assistant", content }]);

    try {
      const res = await fetch("/api/professor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (!res.ok || !res.body) throw new Error(String(res.status));
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setLast(acc);
        scrollLog();
      }
      if (!acc.trim()) throw new Error("empty");
    } catch {
      setLast(fallbackAnswer(q) + "\n\n(The live professor is off duty — this answer is schedule math computed on the page.)");
    } finally {
      setBusy(false);
      scrollLog();
    }
  }

  return (
    <div className="mt-10 rounded-md border border-line bg-card">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line-soft px-5 py-3">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-clay)]">
          Office Hours — ask the professor
        </span>
        <span className="font-mono text-[0.65rem] text-ink-faint">
          Claude Haiku · knows the whole syllabus
        </span>
      </div>

      <div
        ref={logRef}
        className="flex max-h-80 flex-col gap-3 overflow-y-auto px-5 pt-4"
        aria-live="polite"
      >
        <p className="max-w-[92%] self-start whitespace-pre-line border-l-[3px] border-[var(--color-leaf)] bg-mat/60 py-2 pl-4 pr-3 font-serif text-[0.95rem] leading-relaxed text-ink-soft">
          {GREETING}
        </p>
        {msgs.map((m, i) =>
          m.role === "user" ? (
            <p
              key={i}
              className="max-w-[92%] self-end rounded bg-mat px-3 py-2 font-mono text-[0.8rem] text-ink-soft"
            >
              {m.content}
            </p>
          ) : (
            <p
              key={i}
              className="max-w-[92%] self-start whitespace-pre-line border-l-[3px] border-[var(--color-leaf)] bg-mat/60 py-2 pl-4 pr-3 font-serif text-[0.95rem] leading-relaxed text-ink-soft"
            >
              {m.content || "…"}
            </p>
          ),
        )}
      </div>

      <div className="flex flex-wrap gap-2 px-5 pt-3">
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => ask(c)}
            disabled={busy}
            className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] text-ink-muted transition-colors hover:border-[var(--color-clay)] hover:text-[var(--color-clay)] disabled:opacity-50"
          >
            {c}
          </button>
        ))}
      </div>

      <form
        className="flex gap-2 px-5 pb-5 pt-3"
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ask anything about the program…"
          aria-label="Ask the professor"
          className="min-w-0 flex-1 rounded border border-line bg-paper px-3 py-2 font-mono text-[0.8rem] text-ink outline-none focus-visible:border-[var(--color-clay)]"
        />
        <button
          type="submit"
          disabled={busy}
          className="rounded bg-[var(--color-clay)] px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-card)] disabled:opacity-60"
        >
          {busy ? "…" : "Ask"}
        </button>
      </form>
    </div>
  );
}
