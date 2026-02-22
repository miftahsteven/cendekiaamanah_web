import { SchoolFacilitySection } from "@/components/public/units/SchoolFacilitySection";
import {
  SMP_FACILITY_CONTENT,
  SMP_FACILITY_DATA,
} from "@/app/(public)/pendidikan/smp-pesantren-cendekia-amanah/constants";

export function SmpFacilitySection() {
  return (
    <SchoolFacilitySection
      subtitle={SMP_FACILITY_CONTENT.subtitle}
      title={SMP_FACILITY_CONTENT.title}
      description={SMP_FACILITY_CONTENT.description}
      buttonText={SMP_FACILITY_CONTENT.buttonText}
      buttonLink={SMP_FACILITY_CONTENT.buttonLink}
      facilities={SMP_FACILITY_DATA}
    />
  );
}
