import { SchoolFacilitySection } from "@/components/public/units/SchoolFacilitySection";
import {
  HIDROPONIK_FACILITY_CONTENT,
  HIDROPONIK_FACILITY_DATA,
} from "@/app/(public)/bisnis/hidroponik-pesantren-cendekia-amanah/constants";

export function HidroponikFacilitySection() {
  return (
    <SchoolFacilitySection
      subtitle={HIDROPONIK_FACILITY_CONTENT.subtitle}
      title={HIDROPONIK_FACILITY_CONTENT.title}
      description={HIDROPONIK_FACILITY_CONTENT.description}
      buttonText={HIDROPONIK_FACILITY_CONTENT.buttonText}
      buttonLink={HIDROPONIK_FACILITY_CONTENT.buttonLink}
      facilities={HIDROPONIK_FACILITY_DATA}
    />
  );
}
