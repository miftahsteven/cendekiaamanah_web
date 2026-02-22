import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: "default" | "muted" | "primary" | "dark";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const paddingClasses = {
  none: "",
  sm: "py-8",
  md: "py-12",
  lg: "py-16",
  xl: "py-24",
};

const backgroundClasses = {
  default: "bg-background",
  muted: "bg-muted/50",
  primary: "bg-primary text-primary-foreground",
  dark: "bg-gray-900 text-gray-100",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = "default",
  padding = "lg",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className,
      )}
    >
      <div className={cn("container mx-auto px-4", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mb-12", alignClasses[align], className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
