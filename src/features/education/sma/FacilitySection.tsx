import { SchoolFacilitySection } from "@/components/public/units/SchoolFacilitySection";
import {
  SMA_FACILITY_CONTENT,
  SMA_FACILITY_DATA,
} from "@/app/(public)/pendidikan/sma-pesantren-cendekia-amanah/constants";

export function SmaFacilitySection() {
  return (
    <SchoolFacilitySection
      subtitle={SMA_FACILITY_CONTENT.subtitle}
      title={SMA_FACILITY_CONTENT.title}
      description={SMA_FACILITY_CONTENT.description}
      buttonText={SMA_FACILITY_CONTENT.buttonText}
      buttonLink={SMA_FACILITY_CONTENT.buttonLink}
      facilities={SMA_FACILITY_DATA}
    />
  );
}
