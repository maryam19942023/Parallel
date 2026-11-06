import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PARALLEL — Vesper 2089",
  description: "A city. Multiple identities. No one knows everything.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
