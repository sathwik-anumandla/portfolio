"use client";
import Link from "next/link";
import { useState } from "react";
import NpxCard from "@/components/ui/npx-card";
export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "hi@example.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="space-y-3 border-b border-white/20 pb-7">
      <div className="pb-2">
        <h1 className="font-melodrama text-4xl text-(--color-primary) font-bold pb-1">
          Sathwik Anumandla
        </h1>
        <div className="text-(--color-tertiary)">
          <div className="relative">
            <button
              onClick={handleCopy}
              className="cursor-pointer transition-all duration-400 hover:text-(--color-primary) flex items-center gap-0.5"
            >
              sathwikanumandla@hotmail.com
              <i className="fa-regular fa-copy text-xs"></i>
            </button>

            {copied && <span className="tooltip">Copied!</span>}
          </div>
        </div>
      </div>

      <div className="text-(--color-secondary) leading-relaxed">
        <p>
          I'm a <span className="text-(--color-primary)">backend developer</span> and a second-year IT student. I like the{" "}
          <span className="text-(--color-primary)">logical side of engineering</span> — how systems are put together, why they break, how to make them better. Frontend's not really my thing. I keep things{" "}
          <span className="text-(--color-primary)">minimal</span> and leave the creative stuff to people who are actually good at it. When I'm not coding I'm usually deep in something —{" "}
          <span className="text-(--color-primary)">evolution, neuroscience, philosophy</span>. The topic changes, but the{" "}
          <span className="text-(--color-primary)">curiosity</span> doesn't.
        </p>
      </div>
      <NpxCard />
    </section>
  );
}
