export const REGISTER_URL = "https://forms.gle/pEX3Gu4g1K9kR4896";

export const stats = [
  { value: "2 months", label: "Wave 1 runtime", note: "July – September 2026" },
  { value: "47%", label: "Named speaking as the goal", note: "Participant survey" },
  { value: "IT context", label: "Practice that transfers to work", note: "Interviews, standups, teams" },
  { value: "5 Oct", label: "Wave 2 starts", note: "Through late December" },
] as const;

export const timeline = [
  {
    when: "July",
    title: "Club launched",
    body: "Eng Lab started as a speaking space for TUMO Labs and 42 Yerevan — not a grammar class. The brief was simple: people already know English; they freeze when they have to use it.",
  },
  {
    when: "August",
    title: "Format found",
    body: "Sessions settled around warm-up, one structured game, free speaking, and short feedback. Tech topics entered through games so people could practise without performing.",
  },
  {
    when: "September",
    title: "Pause, then restart",
    body: "A two-week hiatus hit during a packed university window (13:00–21:00, Mon–Sat). Wave 1 closes with this report. Wave 2 opens on 5 October for both returning members and new students.",
  },
] as const;

export const method = [
  {
    title: "Speak first",
    body: "Most of the hour is talking. Grammar, vocabulary, and pronunciation support that goal — they do not replace it.",
  },
  {
    title: "Games that look like work",
    body: "Present Yourself Like a Pro, IT Alias, and a light anti-corporate quiz train paraphrasing, introductions, and real meeting English.",
  },
  {
    title: "Feedback without freeze",
    body: "Mistakes that do not block meaning wait. Recurring issues are reviewed with the group, not called out on a person mid-sentence. Accent is not a problem to erase.",
  },
  {
    title: "No homework trap",
    body: "Optional 10–20 minute prep only. Heavy writing assignments would drop attendance. Materials live in a shared Classroom later — as extras, not school.",
  },
] as const;

export const wave2 = [
  {
    month: "October",
    title: "Get comfortable",
    items: ["Present yourself in a professional context", "Simple tech topics through games", "Low-pressure speaking, no presentations required"],
  },
  {
    month: "November",
    title: "Say it clearly",
    items: ["Interview-style answers", "Explain a tech idea in plain English", "Optional 3–5 min talks + live Q&A"],
  },
  {
    month: "December",
    title: "Hold the room",
    items: ["Freer conversation with structure still in place", "Light end-of-year gathering", "Close before the holidays (~25 Dec)"],
  },
] as const;

export const staffNotes = [
  "Attendance moved with university load. People said they wanted to come; calendars did not always allow it. A fixed weekly slot will matter more than extra events.",
  "New students are arriving. Wave 2 is open to them and to Wave 1 members. One registration form, two paths.",
  "The ask: keep Eng Lab as a Community Leaders programme through December. The next 11–12 weeks are enough to run a complete, structured wave.",
] as const;
