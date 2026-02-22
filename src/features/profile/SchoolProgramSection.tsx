"use client";

import { PESANTREN_SCHOOL_PROGRAM_CONTENT } from "@/app/(public)/profile/constants";
import { SchoolProgramSection } from "@/components/public/units/SchoolProgramSection";
import {
  BookOpenIcon,
  SparklesIcon,
  TrophyIcon,
  StarIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

// Map icons to program labels
const programsWithIcons = PESANTREN_SCHOOL_PROGRAM_CONTENT.programs.map(
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

export function PesantrenSchoolProgramSection() {
  return (
    <SchoolProgramSection
      subtitle={PESANTREN_SCHOOL_PROGRAM_CONTENT.subtitle}
      title={PESANTREN_SCHOOL_PROGRAM_CONTENT.title}
      description={PESANTREN_SCHOOL_PROGRAM_CONTENT.description}
      programs={programsWithIcons}
      programSekolah={PESANTREN_SCHOOL_PROGRAM_CONTENT.programSekolah}
      ekstrakurikuler={PESANTREN_SCHOOL_PROGRAM_CONTENT.ekstrakurikuler}
      pembiasaan={PESANTREN_SCHOOL_PROGRAM_CONTENT.pembiasaan}
    />
  );
}
