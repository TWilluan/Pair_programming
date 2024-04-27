import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-button";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>          
          <ThemeProvider 
		  	attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
			<div>
				<ModeToggle/>
			</div>
            {children}
          </ThemeProvider></body>
    </html>
  );
}
