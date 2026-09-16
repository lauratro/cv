"use client";

import type { ResumeLocale } from "@/data/resume-data";
import Link from "next/link";
import { useEffect } from "react";

export function LanguageSwitcher({ locale }: { locale: ResumeLocale }) {
  return (
    <nav
      className="language-switcher"
      aria-label={locale === "de" ? "Sprachauswahl" : "Language selection"}
    >
      <Link href="/" aria-current={locale === "en" ? "page" : undefined}>
        EN
      </Link>
      <Link href="/de" aria-current={locale === "de" ? "page" : undefined}>
        DE
      </Link>
    </nav>
  );
}
