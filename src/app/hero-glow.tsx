"use client";

import type { MouseEvent, ReactNode } from "react";

export default function HeroGlow({ children }: { children: ReactNode }) {
  function moveGlow(event: MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--glow-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--glow-y", `${event.clientY - bounds.top}px`);
  }

  return (
    <section id="top" className="hero-section reveal" onMouseMove={moveGlow}>
      {children}
    </section>
  );
}
