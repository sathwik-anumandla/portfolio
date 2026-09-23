export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tech: string[];
  github: string;
  live: string;
  reflections: string;
};

export const projects: Project[] = [
  {
    slug: "velocity",
    title: "velocity",
    date: "September 2026",
    description:
      "A sovereign personal AI assistant and cognitive partner with persistent memory layers and self-hosted infrastructure.",
    content:
      "Velocity is a self-hosted personal AI assistant and technical thought partner engineered for deep context retention and long-term memory. It features deterministic memory tiers (active session context, cognitive focus loops, and long-term mental models), hybrid storage (PostgreSQL with pgvector for semantic retrieval, SQLite FTS5 for full-text search), and secure remote access via Cloudflare Zero Trust tunnels without exposing public inbound ports.",
    tech: ["fastapi", "python", "postgresql", "pgvector", "sqlite", "docker", "react", "cloudflare"],
    github: "https://github.com/sathwik-anumandla/velocity",
    live: "#",
    reflections:
      "Building a system centered around sovereign personal data and persistent cognitive context showed me the gap between generic chat interfaces and a true technical thinking partner.",
  },
  {
    slug: "sovereign-agent",
    title: "sovereign-agent",
    date: "August 2026",
    description:
      "An air-gapped, on-premise agentic AI workbench built for Smart India Hackathon (SIH 2026).",
    content:
      "Developed for Smart India Hackathon (SIH 2026), Sovereign Agent is a 100% air-gapped on-premise AI workbench engineered for high-security environments like refineries, PSUs, and defence infrastructure. It features local Ollama model management, ReAct agent state loops via LangGraph, hardware-adaptive waterfall routing, local OCR processing, and zero-connectivity TOTP authentication with offline single-use emergency recovery.",
    tech: ["python", "langgraph", "ollama", "pgvector", "fastapi", "react", "scikit-learn"],
    github: "https://github.com/sathwik-anumandla/sovereign-agent",
    live: "#",
    reflections:
      "Engineering an agentic system that operates entirely offline under strict hardware constraints forced us to rethink state recovery, fallback execution, and localized verification.",
  },
  {
    slug: "kagami",
    title: "kagami",
    date: "March 2026",
    description: "A minimalist tech news aggregator that delivers concise summaries from trusted engineering blogs.",
    content:
      "Kagami is a lightweight news platform designed to cut through information overload by presenting only the most relevant tech updates in a clean, distraction-free interface. Instead of long articles or cluttered feeds, it provides short, digestible summaries from trusted sources like engineering blogs, helping developers stay informed quickly and efficiently. The focus of the project is simplicity, speed, and clarity—both in content delivery and user experience.",
    tech: ["next.js", "react", "js", "tailwindcss", "vercel"],
    github: "#",
    live: "https://kagami-signals.vercel.app",
    reflections:
      "This project reinforced the importance of simplicity in product design—removing unnecessary complexity often creates more value than adding features.",
  },
  {
    slug: "tui-portfolio",
    title: "tui-portfolio",
    date: "May 2026",
    description:
      "An interactive portfolio that runs in your terminal. Try it with npx sathwik.",
    content:
      "An interactive TUI portfolio built with Ink and React — the same component model as the web, but rendered entirely in the terminal. It runs with a single npx command, no installation needed. The experience includes a splash screen, navigable sections (about, skills, projects, contact), and keyboard-driven controls. It's a portfolio that lives where developers spend most of their time.",
    tech: ["ink", "react", "node.js", "chalk", "npm"],
    github: "https://github.com/sathwik-anumandla/tui-portfolio",
    live: "#",
    reflections:
      "Building something for the terminal felt natural. It's where I spend most of my time anyway.",
  },
];
