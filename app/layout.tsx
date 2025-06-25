import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nithin Portfolio - Software Development Engineer",
  description:
    "Nithin Gandrathi - Software Development Engineer (Web) with expertise in full-stack development, React.js, Next.js, and cloud technologies. Available for remote work.",
  keywords: ["Nithin Gandrathi", "Software Developer", "Web Developer", "React", "Next.js", "Full Stack", "Portfolio"],
  authors: [{ name: "Nithin Gandrathi" }],
  creator: "Nithin Gandrathi",
  openGraph: {
    title: "Nithin Portfolio - Software Development Engineer",
    description: "Software Development Engineer (Web) with expertise in full-stack development and cloud technologies",
    url: "https://nithin-gandrathi.vercel.app",
    siteName: "Nithin Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithin Portfolio - Software Development Engineer",
    description: "Software Development Engineer (Web) with expertise in full-stack development and cloud technologies",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
