import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Pulse",
  description: "Anonymous team mood and feedback tracker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
