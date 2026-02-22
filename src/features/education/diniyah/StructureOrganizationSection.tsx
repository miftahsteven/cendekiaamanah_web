"use client";

import { DINIYAH_STRUCTURE_ORGANIZATION_CONTENT } from "@/app/(public)/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah/constants";
import { StructureOrganizationSection } from "@/components/public/units/StructureOrganizationSection";

export function DiniyahStructureOrganizationSection() {
  const { subtitle, title, description, leaders } =
    DINIYAH_STRUCTURE_ORGANIZATION_CONTENT;

  return (
    <StructureOrganizationSection
      subtitle={subtitle}
      title={title}
      description={description}
      leaders={leaders}
    />
  );
}
