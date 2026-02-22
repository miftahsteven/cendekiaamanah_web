import { SectionTitleHeader } from "@/components/common/SectionTitleHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export interface FacilityItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

export interface FacilityRowData {
  items: FacilityItem[];
}

interface SchoolFacilitySectionProps {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  facilities: FacilityRowData[];
  className?: string;
}

// Facility Item Component
function FacilityItemComponent({ icon: Icon, label }: FacilityItem) {
  return (
    <div className="flex items-center gap-2 px-2.5 py-2 bg-white border border-gray-300 rounded-full">
      <div className="p-1 border border-primary rounded-full">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <span className="text-sm md:text-base font-medium text-primary whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export function SchoolFacilitySection({
  subtitle,
  title,
  description,
  buttonText,
  buttonLink,
  facilities,
  className,
}: SchoolFacilitySectionProps) {
  return (
    <section
      className={cn(
        "w-full p-4 md:p-8 bg-white rounded-lg md:rounded-xl border border-gray-200",
        className,
      )}
    >
      <div className="container mx-auto">
        {/* Main 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-end">
          {/* Column 1: Title, Description, and Button */}
          <div className="flex flex-col gap-6 justify-end">
            {/* Section Title Header */}
            <SectionTitleHeader subtitle={subtitle} title={title} />

            {/* Description */}
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              {description}
            </p>

            {/* CTA Button - Like Navbar */}
            <div>
              <Button asChild className="rounded-full">
                <Link href={buttonLink}>
                  {buttonText}
                  <ArrowRightCircleIcon className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Column 2: Facility List */}
          <div className="flex flex-col gap-2">
            {facilities.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-wrap gap-2 justify-start"
              >
                {row.items.map((facility, itemIndex) => (
                  <FacilityItemComponent
                    key={itemIndex}
                    icon={facility.icon}
                    label={facility.label}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
