"use client";

import { SMA_STRUCTURE_ORGANIZATION_CONTENT } from "@/app/(public)/pendidikan/sma-pesantren-cendekia-amanah/constants";
import { StructureOrganizationSection } from "@/components/public/units/StructureOrganizationSection";

export function SmaStructureOrganizationSection() {
  const { subtitle, title, description, leaders } =
    SMA_STRUCTURE_ORGANIZATION_CONTENT;

  return (
    <StructureOrganizationSection
      subtitle={subtitle}
      title={title}
      description={description}
      leaders={leaders}
    />
  );
}
