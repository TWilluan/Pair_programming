import { db } from "@/db"
import { unstable_cache, unstable_noStore } from "next/cache"


export async function getRooms() {
    unstable_noStore()
    const rooms = await db.query.room.findMany()
    return rooms
}