import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Navbar } from "@/components/sections/navbar"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Personal Portfolio",
  description: "A minimalistic personal portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="w-full flex items-center justify-center bg-background sticky top-0 z-50">
            <Navbar />
          </div>
          {children}
          <Toaster  richColors/>
        </ThemeProvider>
      </body>
    </html>
  )
}

