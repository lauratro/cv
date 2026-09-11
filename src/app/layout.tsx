import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laura T. / Product designer & frontend developer",
  description: "A selected portfolio and curriculum vitae.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
