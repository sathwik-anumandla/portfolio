"use client";

import { useState } from "react";

export default function NpxCard() {
  const [copied, setCopied] = useState(false);
  const command = "npx sathwik";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
    <p className="text-(--color-secondary) text-sm mb-0.5">Try my TUI portfolio</p>
    <div className="flex items-center justify-between px-4 py-2 rounded-lg border border-white/10 bg-white/4 text-(--color-secondary)">
      <span className="font-mono text-sm">{command}</span>
      <div className="relative">
        <button
          onClick={handleCopy}
          className="cursor-pointer hover:text-(--color-primary) transition-all duration-200 flex items-center gap-1.5 text-sm"
        >
          <i className={`fa-regular ${copied ? "fa-check" : "fa-copy"} text-xs`}></i>
          <span>{copied ? "copied!" : "copy"}</span>
        </button>
      </div>
    </div>
    </>
  );
}
