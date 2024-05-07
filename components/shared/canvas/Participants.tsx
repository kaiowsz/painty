"use client";

import React from "react"
import { Skeleton } from "../../ui/skeleton"
import { UserAvatar } from "../UserAvatar";
import { useOthers, useSelf, useUser } from "@/liveblocks.config";
import { connectionIdToColor } from "@/lib/utils";

const Participants = () => {

    const users = useOthers();
    const currentUser = useSelf();

    const MAX_SHOWN_OTHER_USERS = 1;

    const hasMoreUsers = users.length > MAX_SHOWN_OTHER_USERS;
    
    return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
        <div className="flex gap-x-2">
            {users.slice(0, MAX_SHOWN_OTHER_USERS).map(({connectionId, info}) => {
                return (
                    <UserAvatar borderColor={connectionIdToColor(connectionId)} key={connectionId} src={info?.picture} name={info?.name} fallback={info?.name?.[0] || "T"} />
                )
            })}

            {currentUser && (
                <UserAvatar borderColor={connectionIdToColor(currentUser.connectionId)} src={currentUser.info?.picture} name={`${currentUser.info?.name} (You)`} fallback={currentUser.info?.name?.[0]} />
            )}

            {hasMoreUsers && (
                <UserAvatar name={`${users.length - MAX_SHOWN_OTHER_USERS} more`} fallback={`+${users.length - MAX_SHOWN_OTHER_USERS}`} />
            )}
        </div>
    </div>
    )
}

export default Participants

export const ParticipantsSkeleton = () => {
    return (
        <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
    )
} 