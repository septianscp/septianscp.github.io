import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Septian Setia — Senior Frontend Developer & Team Lead",
  description: "Senior Frontend Developer & Team Lead with 6+ years of experience building scalable, production-ready web applications. Specializing in React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
