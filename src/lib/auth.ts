import { db } from "@/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { getServerSession } from "next-auth"
import type { Adapter } from "next-auth/adapters"
import Google from "next-auth/providers/google"

export const authConfig = {
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ]
}

export const getSession = () => {
    return getServerSession(authConfig)
}