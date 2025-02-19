import type { Metadata } from "next";
import {  Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/atoms/theme-provider";
import NextTopLoader from "nextjs-toploader"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})



export const metadata: Metadata = {
  title: "eTaskify I To-do list Apps",
  description: "etaskify to-do list apps by ervin arviandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}
        className={`${sora.variable} antialiased`}
      >
       
        <ThemeProvider  
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        <NextTopLoader color="#a684ff"
        />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
