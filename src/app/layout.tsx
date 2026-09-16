import { headers } from "next/headers";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Laura Tronchin" }],
  creator: "Laura Tronchin",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = headers().get("x-resume-locale") === "de" ? "de" : "en";

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
