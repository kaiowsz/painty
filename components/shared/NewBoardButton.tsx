"use client"

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { Plus } from "lucide-react";
import React from "react"
import { toast } from "sonner";

type NewBoardButtonProps = {
    orgId: string;
    disabled?: boolean;
}

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {

    const { mutate, pending } = useApiMutation(api.board.create)

    const onClick = () => {
        mutate({
            orgId,
            title: "Untitled"
        })
        .then((id) => {
            toast.success("Board created");
        })
        .catch(() => {
            toast.error("Failed to create board")
        })
    }

    return (
    <button disabled={pending || disabled} onClick={onClick} className={`col-span-1 aspect-[100/127] bg-blue-700 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6 ${pending || disabled && "opacity-75"}`}>
        <div />
        <Plus className="h-12 w-12 text-white stroke-1" />
        <p className="text-sm text-white font-light">New board</p>
    </button>
    )
}

export default NewBoardButton