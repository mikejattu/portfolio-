"use client";

import { DATA } from "@/data/resume";
import { useEffect, useRef, useState } from "react";

interface TerminalLine {
  type: "input" | "output" | "error" | "success";
  content: string;
}

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    "Available commands:",
    "",
    "  whoami      - Learn about me",
    "  skills      - View my technical skills",
    "  research    - Research interests & experience",
    "  publications- Academic publications",
    "  projects    - See my projects",
    "  experience  - View work experience",
    "  education   - My academic background",
    "  contact     - Get in touch",
    "  socials     - My social links",
    "  cv          - Download my CV",
    "  clear       - Clear terminal",
    "",
    "Tip: Try 'sudo hire mike' 😉",
  ],
  whoami: () => [
    `╭─────────────────────────────────────────╮`,
    `│  ${DATA.name}                          │`,
    `╰─────────────────────────────────────────╯`,
    "",
    `📍 ${DATA.location}`,
    `💼 ${DATA.description}`,
    "",
    `Type 'skills' to see what I work with.`,
  ],
  skills: () => [
    "🛠️  Technical Skills",
    "─".repeat(40),
    "",
    ...DATA.skills.reduce((acc: string[], skill, i) => {
      if (i % 4 === 0) acc.push("");
      acc[acc.length - 1] = (acc[acc.length - 1] || "") + `  [${skill}]`;
      return acc;
    }, []),
    "",
    `Total: ${DATA.skills.length} technologies`,
  ],
  projects: () => [
    "🚀 Featured Projects",
    "─".repeat(40),
    "",
    ...DATA.projects.flatMap((p) => [
      `▸ ${p.title}`,
      `  ${p.description.slice(0, 70)}...`,
      `  Tech: ${p.technologies.slice(0, 4).join(", ")}`,
      "",
    ]),
    "Visit the Projects section below for more details!",
  ],
  experience: () => [
    "💼 Work Experience",
    "─".repeat(40),
    "",
    ...DATA.work.flatMap((w) => [
      `▸ ${w.title} @ ${w.company}`,
      `  📅 ${w.start} - ${w.end ?? "Present"}`,
      "",
    ]),
  ],
  education: () => [
    "🎓 Education",
    "─".repeat(40),
    "",
    ...DATA.education.flatMap((e) => [
      `▸ ${e.school}`,
      `  ${e.degree}`,
      `  📅 ${e.start} - ${e.end}`,
      "",
    ]),
  ],
  contact: () => [
    "📬 Contact Information",
    "─".repeat(40),
    "",
    `  📧 Email: ${DATA.contact.email}`,
    `  📱 Phone: ${DATA.contact.tel}`,
    "",
    "Type 'socials' to see my social links!",
  ],
  socials: () => [
    "🌐 Social Links",
    "─".repeat(40),
    "",
    ...Object.entries(DATA.contact.social).map(
      ([name, social]) => `  ${name}: ${social.url}`
    ),
  ],
  research: () => [
    "🔬 Research Interests",
    "─".repeat(40),
    "",
    ...DATA.researchInterests.areas.map((area) => [
      `▸ ${area.title}`,
      `  ${area.description}`,
      "",
    ]).flat(),
    "─".repeat(40),
    "Research Experience:",
    "",
    ...DATA.research.map((r) => [
      `▸ ${r.title}`,
      `  ${r.institution} (${r.start} - ${r.end})`,
      "",
    ]).flat(),
  ],
  publications: () => [
    "📚 Publications",
    "─".repeat(40),
    "",
    ...DATA.publications.map((p) => [
      `▸ ${p.title}`,
      `  ${p.authors.join(", ")}`,
      `  ${p.venue} (${p.year}) - ${p.status}`,
      "",
    ]).flat(),
    "Type 'research' to see current research work.",
  ],
  cv: () => [
    "📄 Curriculum Vitae",
    "─".repeat(40),
    "",
    `Download my CV at: ${DATA.url}${DATA.cvUrl}`,
    "",
    "Or scroll up and click the 'Download CV' button!",
  ],
  clear: () => [],
  "sudo hire mike": () => [
    "",
    "🎉 EXCELLENT CHOICE!",
    "",
    "Initializing hiring process...",
    "████████████████████████████ 100%",
    "",
    "✅ Decision: APPROVED",
    "✅ Reason: Mike is awesome",
    "✅ Action: Send him a message!",
    "",
    `📧 ${DATA.contact.email}`,
    `🔗 ${DATA.contact.social.LinkedIn.url}`,
    "",
  ],
  ls: () => ["about.txt  skills.md  projects/  contact.txt", "", "Try 'help' for available commands."],
  pwd: () => ["/home/mike/portfolio"],
  date: () => [new Date().toString()],
  echo: () => ["Usage: echo <message>"],
};

const INITIAL_LINES: TerminalLine[] = [
  { type: "output", content: "Welcome to Mike's Portfolio Terminal v1.0.0" },
  { type: "output", content: "Type 'help' for available commands." },
  { type: "output", content: "" },
];

export function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    setCommandHistory((prev) => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: `$ ${cmd}` },
    ];

    if (trimmedCmd === "clear") {
      setLines(INITIAL_LINES);
      return;
    }

    // Handle echo command with arguments
    if (trimmedCmd.startsWith("echo ")) {
      const message = cmd.slice(5);
      setLines([...newLines, { type: "output", content: message }]);
      return;
    }

    const commandFn = COMMANDS[trimmedCmd];
    if (commandFn) {
      const output = commandFn();
      setLines([
        ...newLines,
        ...output.map((line) => ({ type: "output" as const, content: line })),
      ]);
    } else {
      setLines([
        ...newLines,
        {
          type: "error",
          content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.`,
        },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex < commandHistory.length - 1
            ? historyIndex + 1
            : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple autocomplete
      const matches = Object.keys(COMMANDS).filter((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-neutral-700/50"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="bg-neutral-800 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
        </div>
        <div className="flex-1 text-center text-sm text-neutral-400 font-mono">
          mike@portfolio ~ 
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="bg-neutral-900 p-4 h-[300px] overflow-y-auto font-mono text-sm cursor-text"
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap break-all ${
              line.type === "input"
                ? "text-green-400"
                : line.type === "error"
                ? "text-red-400"
                : line.type === "success"
                ? "text-green-400"
                : "text-neutral-300"
            }`}
          >
            {line.content}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center text-green-400">
          <span className="mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-neutral-100 caret-green-400"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
          <span className="animate-pulse text-green-400">▊</span>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="bg-neutral-800 px-4 py-2 text-xs text-neutral-500 font-mono flex justify-between">
        <span>Press Tab for autocomplete</span>
        <span>↑↓ for history</span>
      </div>
    </div>
  );
}

