import { Icon } from "@/components/ui/icon";
import { Ghost } from "lucide-react";

interface EmptyStateProps {
    message: string;
    description?: string;
}

export default function EmptyState({ message, description }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
            <Icon iconNode={Ghost} className="w-16 h-16 mb-4 text-gray-400" />
            <p className="text-lg">{message}</p>
            {description && <p className="text-sm">{description}</p>}
        </div>
    );
}

