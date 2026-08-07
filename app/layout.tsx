import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChocoChip Biscuit | Custom Chocolates & Cookies",
  description: "Made fresh for every occasion. Custom chocolate and cookie orders for events, gifts and collaborations.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
