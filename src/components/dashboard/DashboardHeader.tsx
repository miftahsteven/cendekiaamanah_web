import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface DashboardHeaderProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function DashboardHeader({
  title,
  description,
  buttonText,
  buttonHref,
}: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Button asChild>
        <Link href={buttonHref}>
          <Plus className="w-4 h-4 mr-2" />
          {buttonText}
        </Link>
      </Button>
    </div>
  );
}
