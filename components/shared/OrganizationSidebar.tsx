"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { LayoutDashboard, Star } from "lucide-react"
import { Button } from "../ui/button"
import { useSearchParams } from "next/navigation"

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

const OrganizationSidebar = () => {

    const searchParams = useSearchParams();
    const favorites = searchParams.get("favorites");

    return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
        <Link href="/">
            <div className="flex items-center gap-x-2">
                <Image src="/logo.svg" alt="Logo" height={40} width={40} />
                <span className={`font-semibold text-2xl ${font.className}`}>
                    Painty
                </span>
            </div>
        </Link>
        <OrganizationSwitcher 
        hidePersonal 
        appearance={{
            elements: {
                rootBox: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                },
                organizationSwitcherTrigger: {
                    padding: "6px",
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #E5E7EB",
                    justifyContent: "space-between",
                    backgroundColor: "white"
                }
            }
        }} />

        <div className="space-y-1 w-full">
            <Button
            variant={favorites ? "ghost" : "secondary"}
            asChild
            size="lg"
            className="font-normal justify-start px-2 w-full"
            >
                <Link href="/">
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Team Boards
                </Link>
            </Button>

            <Button
            variant={favorites ? "secondary" : "ghost"}
            asChild
            size="lg"
            className="font-normal justify-start px-2 w-full"
            >
                <Link href={{
                    pathname: "/",
                    query: {favorites: true}
                }}>
                    <Star className="h-4 w-4 mr-2" />
                    Favorite Boards
                </Link>
            </Button>
        </div>
    </div>
    )
}

export default OrganizationSidebar