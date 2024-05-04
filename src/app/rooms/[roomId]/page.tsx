import { getRoom } from "@/services/room"
import { GithubIcon } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { TagList, splitTags } from "@/components/tags-list"


export default async function RoomPage(props: { params: { roomId: string } }) {
    const roomID = props.params.roomId


    try {
        const room = await getRoom(roomID)
        if (!room) { 
            throw new Error("No room with this ID")
        }

        return (<>
            <div className="grid grid-cols-4 min-h-screen">
                <div className="col-span-3 p-6 pr-2">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                        Video Player
                    </div>
                </div>
                <div className="col-span-1 p-6 pl-2.5">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
                        <h1 className="text-lg font-medium">{room?.name}</h1>
                        <p className="text-base text-gray-600">{room?.description}</p>
                        
                        <TagList tags={splitTags(room.tags)}/>

                        {room.gitRepo &&
                            <Link href={room.gitRepo} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm">
                                <GithubIcon size={20}/>
                                Github Project
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </>)
    } catch (error) {
        return <div className="flex justify-center mt-20 text-xl text-medium tracking-wide">
            Error: No room with this id
        </div>
    }
}