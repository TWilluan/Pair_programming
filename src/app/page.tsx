import Image from "next/image";
import { db } from "../db";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {

  const rooms = await db.query.room.findMany()

  return (
    <main className="min-h-screen items-center justify-between p-24">

      <div className="flex justify-between items-center">
        <span className="text-2xl font-medium">Find room: </span>
        <Button asChild><Link href={"/create-room"}>Create Room</Link></Button>
      </div>
      {
        rooms.map((room) => {
          return <div key={room.id}>{room.name}</div>
        })
      }
    </main>
  );
}
