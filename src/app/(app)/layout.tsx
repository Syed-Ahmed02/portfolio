import type { Metadata } from "next";
import { libre_bodoni,roboto_mono,inter} from "./fonts";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Syed's Portfolio",
  description: "Hi I am Syed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={` ${libre_bodoni.variable} ${inter.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
