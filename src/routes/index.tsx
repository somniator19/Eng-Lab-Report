import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mic, MessageSquare, Target, Users } from "lucide-react";
import {
  REGISTER_URL,
  method,
  staffNotes,
  stats,
  timeline,
  wave2,
} from "@/lib/report";

export const Route = createFileRoute("/")({ component: Home });

const nav = [
  { href: "#report", label: "Report" },
  { href: "#method", label: "Method" },
  { href: "#wave-2", label: "Wave 2" },
];

function Home() {
  return (
    <div className="min-h-dvh bg-bg">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-[radial-gradient(80%_60%_at_50%_-10%,rgb(184_92_56_/_0.12),transparent)]"
      />

      <header className="sticky top-0 z-20 border-b border-line/70 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <a href="#top" className="font-display text-xl tracking-tight text-ink">
            Eng Lab
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted sm:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-semibold text-bg transition-colors hover:bg-accent"
          >
            Register
            <ArrowUpRight className="size-4" strokeWidth={1.75} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            Community Leaders · 30 September 2026
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] tracking-[-0.03em] text-ink sm:text-7xl">
            Speaking practice that people will actually use.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Wave 1 report for Eng Lab at TUMO Labs / 42 Yerevan. Two months of
            English conversation, IT-context games, and a plan to continue
            through December.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#report"
              className="inline-flex min-h-12 items-center rounded-full bg-accent px-6 text-sm font-semibold text-surface transition-colors hover:bg-accent-deep"
            >
              Read the report
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
            >
              Wave 2 form
            </a>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-[22px] bg-line shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="bg-surface px-6 py-7">
              <p className="font-display text-3xl tracking-tight text-ink sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-ink">{stat.label}</p>
              <p className="mt-1 text-sm text-muted">{stat.note}</p>
            </article>
          ))}
        </section>

        <section id="report" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">Wave 1</p>
              <h2 className="font-display mt-3 text-4xl tracking-tight text-ink">What happened</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Eng Lab is a speaking club, not a second school. People in this
                building already study, ship projects, and sit in English-heavy
                rooms. The gap is confidence under pressure — interviews,
                standups, introducing yourself to a new team.
              </p>
            </div>
            <ol className="space-y-0">
              {timeline.map((item, i) => (
                <li key={item.when} className="grid grid-cols-[88px_1fr] gap-4 border-t border-line py-6 first:border-t-0 first:pt-0">
                  <p className="pt-1 text-sm font-semibold text-accent">{item.when}</p>
                  <div>
                    <p className="font-medium text-ink">
                      {i + 1}. {item.title}
                    </p>
                    <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="method" className="bg-bg-deep">
          <div className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-8">
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">How it runs</p>
            <h2 className="font-display mt-3 max-w-lg text-4xl tracking-tight text-ink">
              A session is structured so people leave having spoken, not having sat.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {method.map((item, i) => {
                const Icon = [Mic, MessageSquare, Users, Target][i] ?? Mic;
                return (
                  <article
                    key={item.title}
                    className="rounded-[22px] bg-surface p-6 shadow-card"
                  >
                    <div className="flex size-10 items-center justify-center rounded-[10px] bg-accent-soft text-accent">
                      <Icon className="size-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 rounded-[22px] border border-line bg-surface p-6 sm:p-8">
              <p className="text-sm font-semibold text-ink">Typical 70-minute shape</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-4">
                {[
                  ["10–15 min", "Warm-up / present yourself"],
                  ["25–30 min", "One game or structured task"],
                  ["15–20 min", "Free speaking or Q&A"],
                  ["5 min", "Group feedback, then close"],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-[14px] bg-bg px-4 py-4">
                    <p className="text-xs font-semibold tracking-wide text-accent uppercase">{t}</p>
                    <p className="mt-2 text-sm leading-snug text-ink">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="wave-2" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-20 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">5 October – ~25 December</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-ink">Wave 2 programme</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            About twelve weeks. One consistent weekly slot. Optional materials
            later — never required homework. KPI for the wave: people can
            explain themselves and their work in English without freezing.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {wave2.map((block) => (
              <article key={block.month} className="flex flex-col rounded-[22px] bg-ink px-6 py-7 text-bg">
                <p className="text-xs font-semibold tracking-[0.16em] text-accent-soft uppercase">
                  {block.month}
                </p>
                <h3 className="font-display mt-3 text-3xl tracking-tight">{block.title}</h3>
                <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-bg/75">
                  {block.items.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
          <div className="rounded-[32px] bg-bg-deep px-6 py-10 sm:px-10">
            <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">For staff</p>
            <h2 className="font-display mt-3 text-3xl tracking-tight text-ink sm:text-4xl">
              Why this should continue
            </h2>
            <ul className="mt-8 space-y-5">
              {staffNotes.map((note) => (
                <li key={note} className="border-t border-line pt-5 leading-relaxed text-muted first:border-t-0 first:pt-0">
                  {note}
                </li>
              ))}
            </ul>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noreferrer"
              className="no-print mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-surface transition-colors hover:bg-accent-deep"
            >
              Open Wave 2 registration
              <ArrowUpRight className="size-4" strokeWidth={1.75} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Eng Lab · TUMO Labs / 42 Yerevan</p>
          <p>Wave 1 close · Community Leaders · 30 Sep 2026</p>
        </div>
      </footer>
    </div>
  );
}
