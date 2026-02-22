"use client";

import { SMA_VISI_MISI_CONTENT } from "@/app/(public)/pendidikan/sma-pesantren-cendekia-amanah/constants";
import { VisiMisiSection } from "@/components/public/units/VisiMisiSection";

export function SmaVisiMisiSection() {
  return (
    <VisiMisiSection
      visi={SMA_VISI_MISI_CONTENT.visi}
      misi={SMA_VISI_MISI_CONTENT.misi}
    />
  );
}
