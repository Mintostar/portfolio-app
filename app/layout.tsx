"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { DarkModeProvider } from "@/lib/DarkModeContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
