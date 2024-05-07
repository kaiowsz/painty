"use client"

import Image from "next/image"
import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { Hint } from "./Hint";

interface Props {
    id: string;
    name: string;
    imageUrl: string;
}

const Item = ({ id, imageUrl, name }: Props) => {
  
    const { organization } = useOrganization()
    const { setActive } = useOrganizationList();
    
    const isActive = organization?.id === id;

    const onClick = () => {
        if(!setActive) return;

        setActive({
            organization: id
        })
    }


    return (
    <div className="aspect-square relative">
        <Hint label={name} side="right" align="start" sideOffset={18}>

        <Image src={imageUrl} alt={name} onClick={() => {}} className={`rounded-md cursor-pointer opacity-75 hover:opacity-100 transition ${isActive && "opacity-100"}`} fill />
        </Hint>
    </div>
  )
}

export default Item