import { db } from "@/db"
import { room } from "@/db/schema"
import { eq } from "drizzle-orm"
import { unstable_cache, unstable_noStore } from "next/cache"


export async function getRooms() {
    unstable_noStore()
    const rooms = await db.query.room.findMany()
    return rooms
}

export async function getRoom(id:string) {
    unstable_noStore()
    const rooms = await db.query.room.findFirst({
            where: eq(room.id, id)
        })
    return rooms
}