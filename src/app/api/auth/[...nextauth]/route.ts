import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers/discord"
import { db } from "@/db"
import type { Adapter } from "next-auth/adapters"
import { authConfig } from "@/lib/auth"

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }