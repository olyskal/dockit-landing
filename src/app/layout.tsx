import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DockIt - your dock, your way",
  description: "Create custom dock profiles for different workflows and boost your productivity. DockIt helps you organize your Mac experience with seamless profile switching and smart automatic Dock sorting based on your usage.",
  keywords: ["dockit", "mac", "macos", "dock", "productivity", "app", "profiles", "organization", "workflow"],
  authors: [{ name: "Afonso Oliveira" }],
  creator: "DockIt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${inter.variable} antialiased bg-dockit-dark-950 text-white`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
