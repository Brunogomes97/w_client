import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface RemoveButtonProps {
    disabled?: boolean
    onClick?: () => void
    className?: string
}

export function RemoveButton({ disabled, onClick, className }: RemoveButtonProps) {
    return <Button
        className={cn("p-[0.75rem] hover:brightness-110", className)}
        variant="destructive"
        disabled={disabled}
        onClick={onClick}
    >
        <Trash />
    </Button>
}
