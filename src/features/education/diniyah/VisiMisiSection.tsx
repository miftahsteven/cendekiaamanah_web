"use client";

import { DINIYAH_VISI_MISI_CONTENT } from "@/app/(public)/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah/constants";
import { VisiMisiSection } from "@/components/public/units/VisiMisiSection";

export function DiniyahVisiMisiSection() {
  return (
    <VisiMisiSection
      visi={DINIYAH_VISI_MISI_CONTENT.visi}
      misi={DINIYAH_VISI_MISI_CONTENT.misi}
    />
  );
}
