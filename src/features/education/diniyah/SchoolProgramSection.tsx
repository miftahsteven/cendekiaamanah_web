"use client";

import { DINIYAH_SCHOOL_PROGRAM_CONTENT } from "@/app/(public)/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah/constants";
import { SchoolProgramSection } from "@/components/public/units/SchoolProgramSection";
import {
  BookOpenIcon,
  SparklesIcon,
  TrophyIcon,
  StarIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

// Map icons to program labels
const programsWithIcons = DINIYAH_SCHOOL_PROGRAM_CONTENT.programs.map(
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

export function DiniyahSchoolProgramSection() {
  return (
    <SchoolProgramSection
      subtitle={DINIYAH_SCHOOL_PROGRAM_CONTENT.subtitle}
      title={DINIYAH_SCHOOL_PROGRAM_CONTENT.title}
      description={DINIYAH_SCHOOL_PROGRAM_CONTENT.description}
      programs={programsWithIcons}
      programSekolah={DINIYAH_SCHOOL_PROGRAM_CONTENT.programSekolah}
      ekstrakurikuler={DINIYAH_SCHOOL_PROGRAM_CONTENT.ekstrakurikuler}
      pembiasaan={DINIYAH_SCHOOL_PROGRAM_CONTENT.pembiasaan}
    />
  );
}
