"use client";

import { SMP_STRUCTURE_ORGANIZATION_CONTENT } from "@/app/(public)/pendidikan/smp-pesantren-cendekia-amanah/constants";
import { StructureOrganizationSection } from "@/components/public/units/StructureOrganizationSection";

export function SmpStructureOrganizationSection() {
  const { subtitle, title, description, leaders } =
    SMP_STRUCTURE_ORGANIZATION_CONTENT;

  return (
    <StructureOrganizationSection
      subtitle={subtitle}
      title={title}
      description={description}
      leaders={leaders}
    />
  );
}
