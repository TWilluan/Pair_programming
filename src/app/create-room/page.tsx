
import React from "react"
import { CreateRoomForm } from "./create-form";

const CreateRoom = () => {
    return(<>
        <div className="container mx-auto flex flex-col gap-8 mt-12">
            <h1 className="text-4xl font-bold">Create Room</h1>
            <CreateRoomForm/>
        </div>
    </>)
}


export default CreateRoom;