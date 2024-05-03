import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-button";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Providers } from "./provider";
import { Header } from "./header";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Together",
  description: "A program to code with strangers or friends online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          <NextTopLoader/>
          <Header/>
          {children}
        </Providers>
      </body>
    </html >
  );
}
