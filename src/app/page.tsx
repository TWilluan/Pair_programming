import Image from "next/image";
import { db } from "../db";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Room } from "@/db/schema";
import { GitBranchIcon, GithubIcon } from "lucide-react";
import { getRooms } from "@/services/room";

const RoomCard = ({room} : {room: Room}) => {
  return (<>
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        { room.gitRepo && 
          <Link href={room.gitRepo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2">
            <GithubIcon/>
            Github Link
          </Link>
        }
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link> 
        </Button>
      </CardFooter>
    </Card>
  </>)
}

export default async function Home() {

  const rooms = await getRooms()

  return (
    <main className="min-h-screen items-center justify-between p-24">

      <div className="flex justify-between items-center mb-16">
        <span className="text-2xl font-medium">Find room: </span>
        <Button asChild><Link href={"/create-room"}>Create Room</Link></Button>
      </div>
      
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
      {
        rooms.map((room) => {
          return <RoomCard key={room.id} room={room}/>
        })
      }
      </div>
    </main>
  );
}
