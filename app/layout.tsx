import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Igéragozás Gyakorló",
  description: "German verb conjugation practice app",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
