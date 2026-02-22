import { SchoolFacilitySection } from "@/components/public/units/SchoolFacilitySection";
import {
  DINIYAH_FACILITY_CONTENT,
  DEFAULT_FACILITY_DATA,
} from "@/app/(public)/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah/constants";

export function DiniyahFacilitySection() {
  return (
    <SchoolFacilitySection
      subtitle={DINIYAH_FACILITY_CONTENT.subtitle}
      title={DINIYAH_FACILITY_CONTENT.title}
      description={DINIYAH_FACILITY_CONTENT.description}
      buttonText={DINIYAH_FACILITY_CONTENT.buttonText}
      buttonLink={DINIYAH_FACILITY_CONTENT.buttonLink}
      facilities={DEFAULT_FACILITY_DATA}
    />
  );
}
