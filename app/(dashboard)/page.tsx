"use client"

import BoardList from "@/components/shared/BoardList";
import EmptyOrganization from "@/components/shared/EmptyOrganization";
import { useOrganization } from "@clerk/nextjs";
import React from "react"

type DashboardProps = {
    searchParams?: {
        search?: string;
        favorites?: string;
    }
}

const DashboardPage = ({ searchParams }: DashboardProps) => {
    
    const { organization } = useOrganization();
    
    return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
        {!organization ? (
            <EmptyOrganization />
        ) : (
            <BoardList orgId={organization.id} query={searchParams!} />
        )}
    </div>
    );
}

export default DashboardPage;