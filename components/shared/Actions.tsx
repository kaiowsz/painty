import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import React from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { useApiMutation } from "@/hooks/useApiMutation";
import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import ConfirmModal from "./ConfirmModal";
import { Button } from "../ui/button";
import { useRenameModal } from "@/store/useRenameModal";

type ActionsProps = {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
}

const Actions = ({ children, side, sideOffset, id, title }: ActionsProps) => {

    const { onOpen } = useRenameModal();
    const { mutate, pending } = useApiMutation(api.board.remove);

    const onCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/board/${id}`)
        .then(() => toast.success("Link copied."))
        .catch(() => toast.error("Failed to copy link."))
    }

    const onDelete = () => {
        mutate({id})
        .then(() => toast.success("Board deleted."))
        .catch(() => toast.error("Failed to delete board."))
    }

    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent side={side} sideOffset={sideOffset} className="w-60" onClick={(e) => e.stopPropagation()}>
            <DropdownMenuItem onClick={onCopyLink} className="p-3 cursor-pointer">
                <Link2 className="h-4 w-4 mr-2" />
                Copy board link
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onOpen(id, title)} className="p-3 cursor-pointer">
                <Pencil className="h-4 w-4 mr-2" />
                Rename
            </DropdownMenuItem>
            <ConfirmModal header="Delete board?" description="This will delete the board an all its content." disabled={pending} onConfirm={onDelete}>
                <Button 
                variant="ghost"
                className="p-3 cursor-pointer text-sm w-full justify-start font-normal">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                </Button>
            </ConfirmModal>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}

export default Actions