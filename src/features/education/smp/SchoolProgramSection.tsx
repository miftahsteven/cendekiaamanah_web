"use client";

import { SMP_SCHOOL_PROGRAM_CONTENT } from "@/app/(public)/pendidikan/smp-pesantren-cendekia-amanah/constants";
import { SchoolProgramSection } from "@/components/public/units/SchoolProgramSection";
import {
  BookOpenIcon,
  SparklesIcon,
  TrophyIcon,
  StarIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

// Map icons to program labels
const programsWithIcons = SMP_SCHOOL_PROGRAM_CONTENT.programs.map(
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

export function SmpSchoolProgramSection() {
  return (
    <SchoolProgramSection
      subtitle={SMP_SCHOOL_PROGRAM_CONTENT.subtitle}
      title={SMP_SCHOOL_PROGRAM_CONTENT.title}
      description={SMP_SCHOOL_PROGRAM_CONTENT.description}
      programs={programsWithIcons}
      programSekolah={SMP_SCHOOL_PROGRAM_CONTENT.programSekolah}
      ekstrakurikuler={SMP_SCHOOL_PROGRAM_CONTENT.ekstrakurikuler}
      pembiasaan={SMP_SCHOOL_PROGRAM_CONTENT.pembiasaan}
    />
  );
}
