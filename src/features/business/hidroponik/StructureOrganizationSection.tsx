"use client";

import { HIDROPONIK_STRUCTURE_ORGANIZATION_CONTENT } from "@/app/(public)/bisnis/hidroponik-pesantren-cendekia-amanah/constants";
import { StructureOrganizationSection } from "@/components/public/units/StructureOrganizationSection";

export function HidroponikStructureOrganizationSection() {
  const { subtitle, title, description, leaders } =
    HIDROPONIK_STRUCTURE_ORGANIZATION_CONTENT;

  return (
    <StructureOrganizationSection
      subtitle={subtitle}
      title={title}
      description={description}
      leaders={leaders}
    />
  );
}
