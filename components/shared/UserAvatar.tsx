import { Hint } from "./Hint";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

type UserAvatarProps = {
    src?: string;
    name?: string;
    fallback?: string;
    borderColor?: string;
}

export const UserAvatar = ({ borderColor, fallback, name, src }: UserAvatarProps) => {
    return (
        <Hint label={name || "Teammate"} side="bottom" sideOffset={18}>
            <Avatar style={{ borderColor }} className="w-8 h-8 border-2">
                <AvatarImage src={src} />
                <AvatarFallback className="text-xs font-semibold">
                    {fallback}
                </AvatarFallback>
            </Avatar>
        </Hint>
    )
}