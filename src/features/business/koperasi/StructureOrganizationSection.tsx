"use client";

import { KOPERASI_STRUCTURE_ORGANIZATION_CONTENT } from "@/app/(public)/bisnis/koperasi-pesantren-cendekia-amanah/constants";
import { StructureOrganizationSection } from "@/components/public/units/StructureOrganizationSection";

export function KoperasiStructureOrganizationSection() {
  const { subtitle, title, description, leaders } =
    KOPERASI_STRUCTURE_ORGANIZATION_CONTENT;

  return (
    <StructureOrganizationSection
      subtitle={subtitle}
      title={title}
      description={description}
      leaders={leaders}
    />
  );
}
