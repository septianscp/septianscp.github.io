import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "septianscp - Frontend Developer",
  description: "Frontend Developer. I craft clean, fast, and scalable web applications.",
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
