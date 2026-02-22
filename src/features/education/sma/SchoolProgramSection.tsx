"use client";

import { SMA_SCHOOL_PROGRAM_CONTENT } from "@/app/(public)/pendidikan/sma-pesantren-cendekia-amanah/constants";
import { SchoolProgramSection } from "@/components/public/units/SchoolProgramSection";
import {
  BookOpenIcon,
  SparklesIcon,
  TrophyIcon,
  StarIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

// Map icons to program labels
const programsWithIcons = SMA_SCHOOL_PROGRAM_CONTENT.programs.map(
  (program, index) => {
    const icons = [
      BookOpenIcon,
      SparklesIcon,
      TrophyIcon,
      StarIcon,
      BuildingLibraryIcon,
    ];
    return {
      ...program,
      icon: icons[index] || BookOpenIcon,
    };
  },
);

export function SmaSchoolProgramSection() {
  return (
    <SchoolProgramSection
      subtitle={SMA_SCHOOL_PROGRAM_CONTENT.subtitle}
      title={SMA_SCHOOL_PROGRAM_CONTENT.title}
      description={SMA_SCHOOL_PROGRAM_CONTENT.description}
      programs={programsWithIcons}
      programSekolah={SMA_SCHOOL_PROGRAM_CONTENT.programSekolah}
      ekstrakurikuler={SMA_SCHOOL_PROGRAM_CONTENT.ekstrakurikuler}
      pembiasaan={SMA_SCHOOL_PROGRAM_CONTENT.pembiasaan}
    />
  );
}
