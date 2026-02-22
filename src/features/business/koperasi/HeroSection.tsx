"use client";

import { KOPERASI_HERO_CONTENT } from "@/app/(public)/bisnis/koperasi-pesantren-cendekia-amanah/constants";
import { HeroSectionSecondary } from "@/components/public/units/HeroSectionSecondary";

export function KoperasiHeroSection() {
  return (
    <HeroSectionSecondary
      title={KOPERASI_HERO_CONTENT.title}
      description={KOPERASI_HERO_CONTENT.description}
      programImage={KOPERASI_HERO_CONTENT.programImage}
      socialMedia={KOPERASI_HERO_CONTENT.socialMedia}
      email={KOPERASI_HERO_CONTENT.email}
      phone={KOPERASI_HERO_CONTENT.phone}
      registrationLink={KOPERASI_HERO_CONTENT.registrationLink}
      registrationLabel={KOPERASI_HERO_CONTENT.registrationLabel}
    />
  );
}
