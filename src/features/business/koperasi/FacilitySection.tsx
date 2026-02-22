import { SchoolFacilitySection } from "@/components/public/units/SchoolFacilitySection";
import {
  KOPERASI_FACILITY_CONTENT,
  KOPERASI_FACILITY_DATA,
} from "@/app/(public)/bisnis/koperasi-pesantren-cendekia-amanah/constants";

export function KoperasiFacilitySection() {
  return (
    <SchoolFacilitySection
      subtitle={KOPERASI_FACILITY_CONTENT.subtitle}
      title={KOPERASI_FACILITY_CONTENT.title}
      description={KOPERASI_FACILITY_CONTENT.description}
      buttonText={KOPERASI_FACILITY_CONTENT.buttonText}
      buttonLink={KOPERASI_FACILITY_CONTENT.buttonLink}
      facilities={KOPERASI_FACILITY_DATA}
    />
  );
}
