"use client";

import { PESANTREN_VISI_MISI_CONTENT } from "@/app/(public)/profile/constants";
import { VisiMisiSection } from "@/components/public/units/VisiMisiSection";

export function PesantrenVisiMisiSection() {
  return (
    <VisiMisiSection
      visi={PESANTREN_VISI_MISI_CONTENT.visi}
      misi={PESANTREN_VISI_MISI_CONTENT.misi}
    />
  );
}
