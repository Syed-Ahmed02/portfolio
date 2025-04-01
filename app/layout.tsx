import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { Navbar } from "@/components/navbar"

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
        </ThemeProvider>
      </body>
    </html>
  )
}

