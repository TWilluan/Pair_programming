"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { ModeToggle } from "../components/mode-button"
import { Button } from "../components/ui/button"


export const Header = () => {
    const session = useSession()
    return (
        <div>
            {session.data ? <Button onClick={() => signOut()}>SignOut</Button> : 
                                <Button onClick={() => signIn("google")}>Signin</Button>}
            <ModeToggle />
        </div>
    )
}