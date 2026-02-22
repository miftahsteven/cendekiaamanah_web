"use client";

import {
  HIDROPONIK_SCHOOL_PROGRAM_CONTENT,
  HIDROPONIK_PRODUCT_LIST,
} from "@/app/(public)/bisnis/hidroponik-pesantren-cendekia-amanah/constants";
import { BisnisProgramSection } from "@/components/public/units/BisnisProgramSection";
import {
  SparklesIcon,
  SunIcon,
  CpuChipIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

// Map icons to program labels
const programsWithIcons = HIDROPONIK_SCHOOL_PROGRAM_CONTENT.programs.map(
  (program, index) => {
    const icons = [
      SparklesIcon,
      SunIcon,
      CpuChipIcon,
      AcademicCapIcon,
      ShoppingCartIcon,
    ];
    return {
      ...program,
      icon: icons[index] || SparklesIcon,
    };
  },
);

export function HidroponikSchoolProgramSection() {
  return (
    <BisnisProgramSection
      subtitle={HIDROPONIK_SCHOOL_PROGRAM_CONTENT.subtitle}
      title={HIDROPONIK_SCHOOL_PROGRAM_CONTENT.title}
      description={HIDROPONIK_SCHOOL_PROGRAM_CONTENT.description}
      programs={programsWithIcons}
      programSekolah={HIDROPONIK_SCHOOL_PROGRAM_CONTENT.programSekolah}
      ekstrakurikuler={HIDROPONIK_SCHOOL_PROGRAM_CONTENT.ekstrakurikuler}
      pembiasaan={HIDROPONIK_SCHOOL_PROGRAM_CONTENT.pembiasaan}
      // Product List Section Props
      productListSubtitle={HIDROPONIK_PRODUCT_LIST.subtitle}
      productListTitle={HIDROPONIK_PRODUCT_LIST.title}
      productListDescription={HIDROPONIK_PRODUCT_LIST.description}
      products={HIDROPONIK_PRODUCT_LIST.products}
    />
  );
}
