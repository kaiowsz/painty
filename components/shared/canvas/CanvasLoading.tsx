
import { Skeleton } from "../../ui/skeleton";
import { Loader } from "lucide-react";

import React from 'react'
import Info, { InfoSkeleton } from "./Info";
import Participants, { ParticipantsSkeleton } from "./Participants";
import Toolbar, { ToolbarSkeleton } from "./Toolbar";

const CanvasLoading = () => {
    return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
        <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
        <InfoSkeleton />
        <ParticipantsSkeleton />
        <ToolbarSkeleton />
    </main>
    )
}

export default CanvasLoading