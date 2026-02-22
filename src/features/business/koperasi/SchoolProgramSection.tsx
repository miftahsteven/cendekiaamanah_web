"use client";

import {
  KOPERASI_SCHOOL_PROGRAM_CONTENT,
  KOPERASI_PRODUCT_LIST,
} from "@/app/(public)/bisnis/koperasi-pesantren-cendekia-amanah/constants";
import { BisnisProgramSection } from "@/components/public/units/BisnisProgramSection";
import {
  BuildingStorefrontIcon,
  WalletIcon,
  ShoppingBagIcon,
  AcademicCapIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";

// Map icons to program labels
const programsWithIcons = KOPERASI_SCHOOL_PROGRAM_CONTENT.programs.map(
  (program, index) => {
    const icons = [
      BuildingStorefrontIcon,
      WalletIcon,
      ShoppingBagIcon,
      AcademicCapIcon,
      DevicePhoneMobileIcon,
    ];
    return {
      ...program,
      icon: icons[index] || BuildingStorefrontIcon,
    };
  },
);

export function KoperasiSchoolProgramSection() {
  return (
    <BisnisProgramSection
      subtitle={KOPERASI_SCHOOL_PROGRAM_CONTENT.subtitle}
      title={KOPERASI_SCHOOL_PROGRAM_CONTENT.title}
      description={KOPERASI_SCHOOL_PROGRAM_CONTENT.description}
      programs={programsWithIcons}
      programSekolah={KOPERASI_SCHOOL_PROGRAM_CONTENT.programSekolah}
      ekstrakurikuler={KOPERASI_SCHOOL_PROGRAM_CONTENT.ekstrakurikuler}
      pembiasaan={KOPERASI_SCHOOL_PROGRAM_CONTENT.pembiasaan}
      // Product List Section Props
      productListSubtitle={KOPERASI_PRODUCT_LIST.subtitle}
      productListTitle={KOPERASI_PRODUCT_LIST.title}
      productListDescription={KOPERASI_PRODUCT_LIST.description}
      products={KOPERASI_PRODUCT_LIST.products}
    />
  );
}
