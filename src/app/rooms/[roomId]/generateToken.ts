'use server'

import { getSession } from "@/lib/auth";
import { StreamChat } from "stream-chat"

export async function GenerateToken() {
    const session = await getSession()
    if (!session)
        throw new Error("No session found")

    const apiKey = process.env.STREAM_API_KEY!;
    const apiSecret = process.env.STREAM_API_SECRET!;
    
    const serverClient = StreamChat.getInstance(apiKey, apiSecret)
    const token = serverClient.createToken(session.user.id)

    return token
}