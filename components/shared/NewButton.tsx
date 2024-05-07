"use client";

import React from "react"

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Hint } from "./Hint";

const NewButton = () => {
    return (
    <Dialog>
        <DialogTrigger asChild>
            <div className="aspect-square">
                <Hint side="right" align="start" sideOffset={18} label="Create Organization">
                    <button className="bg-white/25 h-full w-full rounded-md flex items-center opacity-60 hover:opacity-100 transition justify-center">
                        <Plus className="text-white" />
                    </button>
                </Hint>
            </div>
        </DialogTrigger>
        <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
        </DialogContent>
    </Dialog>
    )
}

export default NewButton