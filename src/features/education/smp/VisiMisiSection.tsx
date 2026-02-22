"use client";

import { SMP_VISI_MISI_CONTENT } from "@/app/(public)/pendidikan/smp-pesantren-cendekia-amanah/constants";
import { VisiMisiSection } from "@/components/public/units/VisiMisiSection";

export function SmpVisiMisiSection() {
  return (
    <VisiMisiSection
      visi={SMP_VISI_MISI_CONTENT.visi}
      misi={SMP_VISI_MISI_CONTENT.misi}
    />
  );
}
