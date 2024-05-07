import { Star } from "lucide-react";
import React from "react"

type FooterProps = {
    title: string;
    authorLabel: string;
    createdAt: string;
    isFavorite: boolean;
    onClick: () => void;
    disabled: boolean;
}

const Footer = ({ authorLabel, createdAt, disabled, isFavorite, onClick, title }: FooterProps) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();

        onClick()
    }

    return (
    <div className="relative bg-white p-3">
        <p className="text-[13px] truncate max-w-[calc(100% - 20px)]">{title}</p>
        <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">{authorLabel}, {createdAt}</p>
        <button 
        className={`opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600 ${disabled && "cursor-not-allowed opacity-75"}`}
        disabled={disabled} 
        onClick={handleClick}>
            <Star className={`w-4 h-4 ${isFavorite && "fill-blue-600 text-blue-600"}`} />
        </button>
    </div>
    )
}

export default Footer