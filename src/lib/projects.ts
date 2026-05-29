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
    slug: "kagami",
    title: "kagami",
    date: "March 2026",
    description: "A minimalist tech news aggregator that delivers concise summaries.",
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
