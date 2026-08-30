import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GlanceModeProvider } from "@/app/context/GlanceModeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frank Adeleye | Full Stack Developer",
  description:
    "Portfolio of Frank Adeleye - Full Stack Developer specializing in React, TypeScript, Next.js, Node.js and MongoDB.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlanceModeProvider>{children}</GlanceModeProvider>
      </body>
    </html>
  );
}
