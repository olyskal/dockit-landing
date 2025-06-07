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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-dockit-dark-950 text-white`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
