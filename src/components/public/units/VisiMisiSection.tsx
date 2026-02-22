"use client";

import { cn } from "@/lib/utils";
import { RocketLaunchIcon, FlagIcon } from "@heroicons/react/24/solid";

interface VisiMisiSectionProps {
  visi: {
    label: string;
    content: string;
  };
  misi: {
    label: string;
    points: string[];
  };
  className?: string;
}

export function VisiMisiSection({
  visi,
  misi,
  className,
}: VisiMisiSectionProps) {
  return (
    <section className={cn("w-full py-12 md:py-20", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Visi */}
          <div className="space-y-6">
            {/* Header with Icon */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg">
                <RocketLaunchIcon className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-lg font-semibold font-manrope uppercase tracking-wider text-foreground">
                {visi.label}
              </span>
            </div>
            {/* Large Quote */}
            <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-foreground leading-tight">
              {visi.content}
            </h2>
          </div>

          {/* Column 2: Misi */}
          <div className="space-y-6">
            {/* Header with Icon */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg">
                <FlagIcon className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-lg font-semibold font-manrope uppercase tracking-wider text-foreground">
                {misi.label}
              </span>
            </div>
            {/* Misi Points */}
            <div className="bg-gray-50 border border-gray-100 rounded-md md:rounded-xl p-3">
              <div className="space-y-4 border border-gray-100 bg-white rounded-md md:rounded-lg p-3 px-4">
                {misi.points.map((point, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center gap-4",
                      index !== misi.points.length - 1 &&
                        "border-b border-gray-100 pb-4",
                    )}
                  >
                    <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold text-primary border border-gray-300">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <p className="text-base text-foreground leading-relaxed pt-2">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
