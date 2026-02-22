"use client";

import { PESANTREN_STRUCTURE_ORGANIZATION_CONTENT } from "@/app/(public)/profile/constants";
import { StructureOrganizationSection } from "@/components/public/units/StructureOrganizationSection";

export function PesantrenStructureOrganizationSection() {
  const { subtitle, title, description, leaders } =
    PESANTREN_STRUCTURE_ORGANIZATION_CONTENT;

  return (
    <StructureOrganizationSection
      subtitle={subtitle}
      title={title}
      description={description}
      leaders={leaders}
    />
  );
}
