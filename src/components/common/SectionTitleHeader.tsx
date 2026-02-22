import { cn } from "@/lib/utils";

interface SectionTitleHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
  align?: "left" | "center";
  full?: boolean;
}

export function SectionTitleHeader({
  subtitle,
  title,
  className = "",
  align = "left",
  full = false,
}: SectionTitleHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "left" ? "text-center md:text-left" : "text-center",
        className,
      )}
    >
      <p className="text-sm md:text-base text-muted-foreground md:text-foreground font-light md:font-semibold uppercase tracking-wide">
        {subtitle}
      </p>
      <h2
        className={cn(
          "text-xl md:text-2xl lg:text-3xl font-semibold text-foreground font-manrope",
          !full && (align === "left" ? "max-w-2xl" : "mx-auto max-w-3xl"),
        )}
      >
        {title}
      </h2>
    </div>
  );
}
