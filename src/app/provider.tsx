'use client'

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "../components/theme-provider"
import React, { ReactNode } from "react"


export const Providers = ({ children }: { children: ReactNode }) => {
    return (<>
        <SessionProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </SessionProvider>
    </>)
}