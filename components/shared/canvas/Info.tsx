"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "../../ui/skeleton"
import { cn } from "@/lib/utils";
import { Hint } from "../Hint";

import Image from "next/image";
import { Poppins } from "next/font/google";

import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { useRenameModal } from "@/store/useRenameModal";
import Actions from "../Actions";
import { Menu, Moon, Sun } from "lucide-react";

type InfoProps = {
    boardId: string;
    blackTheme: boolean;
    setBlackTheme: (value: boolean) => void;
}

const TabSeparator = () => {
    return (
        <div className="text-neutral-300 px-1.5"> 

        </div>
    )
}

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

const Info = ({ boardId, setBlackTheme, blackTheme }: InfoProps) => {

    const { onOpen } = useRenameModal();

    const data = useQuery(api.board.get, {
        id: boardId as Id<"boards">,
    });

    if(!data) return <InfoSkeleton />


    return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
        <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
            <Link href="/">
                <Image src="/logo.svg" alt="Board Logo" height={40} width={40} />
                <span className={`font-semibold text-xl ml-2 text-black ${font.className}`}>Painty</span>
            </Link>
        </Button>
        </Hint>

        <TabSeparator />

        <Hint label="Edit Title" side="bottom" sideOffset={10}>
            <Button variant="board" className="text-base font-normal px-2" onClick={() => onOpen(data._id, data.title)}>
                {data.title}
            </Button>
        </Hint>
        
        <TabSeparator />

        <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
            <div>
                <Hint label="Main menu" side="bottom" sideOffset={10}>
                    <Button size="icon" variant="board">
                        <Menu />
                    </Button>
                </Hint>
            </div>
        </Actions>
        
        <Hint label="Toggle Theme" side="bottom" sideOffset={10}>
            {blackTheme ? (
            <Button variant="board" className="text-base font-normal px-2" onClick={() => setBlackTheme(false)}>
                <Sun />
            </Button>
            ) : (
            <Button variant="board" className="text-base font-normal px-2" onClick={() => setBlackTheme(true)}>
                <Moon />
            </Button>
            )}
        </Hint>

    </div>
    )
}

export default Info

export const InfoSkeleton = () =>  {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
    )
}