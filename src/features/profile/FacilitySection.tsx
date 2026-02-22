import { SchoolFacilitySection } from "@/components/public/units/SchoolFacilitySection";
import {
  PESANTREN_FACILITY_CONTENT,
  PESANTREN_FACILITY_DATA,
} from "@/app/(public)/profile/constants";

export function PesantrenFacilitySection() {
  return (
    <SchoolFacilitySection
      subtitle={PESANTREN_FACILITY_CONTENT.subtitle}
      title={PESANTREN_FACILITY_CONTENT.title}
      description={PESANTREN_FACILITY_CONTENT.description}
      buttonText={PESANTREN_FACILITY_CONTENT.buttonText}
      buttonLink={PESANTREN_FACILITY_CONTENT.buttonLink}
      facilities={PESANTREN_FACILITY_DATA}
    />
  );
}
