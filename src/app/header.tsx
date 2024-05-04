"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { ModeToggle } from "../components/mode-button"
import { LogOut, LogIn, Computer } from 'lucide-react';
import { Avatar, AvatarImage } from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AccountDropDown = () => {
    const session = useSession()
    const isLogged = !!session.data
    const userImage = session.data?.user?.image

    return (<>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"link"}>
                    {userImage && (
                        <Avatar>
                            <AvatarImage src={userImage} />
                        </Avatar>
                    )}
                    <div className="text-xl font-medium">
                        {session.data?.user?.name}
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {isLogged ? (
                    <DropdownMenuItem onClick={() => signOut()}>
                        <LogOut className="mr-2" size={20} />
                        Sign Out
                    </DropdownMenuItem>
                ) : (
                    <DropdownMenuItem onClick={() => signIn("google")}>
                        <LogIn className="mr-2" size={20} />
                        Sign In
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    </>)
}


export const Header = () => {
    return (
        <header className="py-2 bg-zinc-100 container mx-auto dark:bg-zinc-900">
            <div className="flex justify-between items-center">
                <Link href="/" className="flex">
                    <Computer className="mr-2" />
                    <span className="text-xl font-medium">Home</span>
                </Link>

                <div className="flex gap-1 items-center">
                    <AccountDropDown />
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}