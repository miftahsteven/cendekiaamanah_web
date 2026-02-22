"use client";

import { SectionTitleHeader } from "@/components/common/SectionTitleHeader";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  BookOpenIcon,
  TrophyIcon,
  SparklesIcon,
  StarIcon,
  BuildingLibraryIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

interface ProgramItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface ProgramContentData {
  title: string;
  description: string;
  items: string[];
  image: string;
}

interface ProgramContentItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  items: string[];
  image: string;
  imagePosition?: "left" | "right";
}

interface SchoolProgramSectionProps {
  subtitle: string;
  title: string;
  description: string;
  programs: ProgramItem[];
  programSekolah: ProgramContentData;
  ekstrakurikuler: ProgramContentData;
  pembiasaan: ProgramContentData;
  className?: string;
}

// Reusable Program Content Item Component
function ProgramContentItem({
  icon: TitleIcon,
  title,
  description,
  items,
  image,
  imagePosition = "left",
}: ProgramContentItemProps) {
  const imageColumn = (
    <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
  );

  const contentColumn = (
    <div className="flex flex-col justify-center space-y-4 md:px-10">
      {/* Title with Icon */}
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-white rounded-lg border border-gray-300">
          <TitleIcon className="w-4 h-4 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground font-manrope">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-foreground leading-relaxed">
        {description}
      </p>

      {/* List Items - Column Direction */}
      <div className="flex flex-col gap-3 mt-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <BoltIcon className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-10">
      {imagePosition === "left" ? (
        <>
          {imageColumn}
          {contentColumn}
        </>
      ) : (
        <>
          {contentColumn}
          {imageColumn}
        </>
      )}
    </div>
  );
}

export function SchoolProgramSection({
  subtitle,
  title,
  description,
  programs,
  programSekolah,
  ekstrakurikuler,
  pembiasaan,
  className,
}: SchoolProgramSectionProps) {
  // Map header icons to programs
  const headerIcons: React.ComponentType<{ className?: string }>[] = [
    BookOpenIcon,
    SparklesIcon,
    TrophyIcon,
    StarIcon,
    BuildingLibraryIcon,
  ];

  return (
    <section className={cn("w-full py-12 md:py-20 ", className)}>
      <div className="container mx-auto">
        {/* Section Heading - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-10 ">
          {/* Column 1: Title Header */}
          <SectionTitleHeader subtitle={subtitle} title={title} />

          {/* Column 2: Description */}
          <div className="flex items-center">
            <p className="text-sm md:text-base text-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Program List Row */}
        <div className="flex flex-wrap gap-6 border-b border-gray-300 pb-6 ">
          {programs.map((program, index) => {
            const IconComponent = headerIcons[index] || BookOpenIcon;
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="p-1.5 bg-white rounded-lg border border-gray-300">
                  <IconComponent className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                  {program.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Program Content Sections */}
        <div className="mt-6">
          {/* Program Sekolah - Image Left */}
          <ProgramContentItem
            icon={BookOpenIcon}
            title={programSekolah.title}
            description={programSekolah.description}
            items={programSekolah.items}
            image={programSekolah.image}
            imagePosition="left"
          />

          {/* Ekstrakurikuler - Image Right */}
          <ProgramContentItem
            icon={SparklesIcon}
            title={ekstrakurikuler.title}
            description={ekstrakurikuler.description}
            items={ekstrakurikuler.items}
            image={ekstrakurikuler.image}
            imagePosition="right"
          />

          {/* Pembiasaan - Image Left */}
          <ProgramContentItem
            icon={TrophyIcon}
            title={pembiasaan.title}
            description={pembiasaan.description}
            items={pembiasaan.items}
            image={pembiasaan.image}
            imagePosition="left"
          />
        </div>
      </div>
    </section>
  );
}
