"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RocketLaunchIcon,
  TrophyIcon,
  MapPinIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { SectionTitleHeader } from "@/components/common/SectionTitleHeader";
import { Button } from "@/components/ui/button";
import { STATISTICS, EDUCATION_UNITS } from "./constant";

const iconMap = {
  users: RocketLaunchIcon,
  "user-plus": TrophyIcon,
  "map-pin": MapPinIcon,
};

export function StatisticSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([0]);

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const updateProgress = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const scrollStart = sectionTop - viewportHeight + 500;
      const scrollEnd = sectionTop + sectionHeight - viewportHeight;
      const scrollRange = scrollEnd - scrollStart;

      const rawProgress = (scrollY - scrollStart) / scrollRange;
      const scrollProgress = Math.max(0, Math.min(1, rawProgress));

      const totalUnits = EDUCATION_UNITS.length;
      const progressPerUnit = 1 / totalUnits;

      const newVisibleCards: number[] = [];

      for (let i = 0; i < totalUnits; i++) {
        const unitStart = i * progressPerUnit;
        const unitEnd = (i + 1) * progressPerUnit;
        if (linesRef.current[i]) {
          let heightPercent = 0;

          if (scrollProgress >= unitEnd) {
            heightPercent = 100;
          } else if (scrollProgress >= unitStart) {
            heightPercent =
              ((scrollProgress - unitStart) / progressPerUnit) * 100;
          } else {
            heightPercent = 0;
          }

          linesRef.current[i]!.style.height = `${heightPercent}%`;
        }

        if (scrollProgress >= unitStart) {
          newVisibleCards.push(i);
          if (
            i < totalUnits - 1 &&
            scrollProgress > unitStart + progressPerUnit * 0.5
          ) {
            newVisibleCards.push(i + 1);
          }
        }
      }

      setVisibleCards((prev) => {
        const uniqueNew = [...new Set(newVisibleCards)];
        if (
          prev.length !== uniqueNew.length ||
          !prev.every((val, index) => val === uniqueNew[index])
        ) {
          return uniqueNew;
        }
        return prev;
      });
    };

    const handleScroll = () => {
      rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-background">
      <div className="container px-4 md:px-0 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:sticky lg:top-16 lg:self-start py-10 md:py-14 lg:py-16">
            <div className="flex flex-col gap-8">
              <SectionTitleHeader
                subtitle="STATISTIK KAMI"
                title="Mendidik dengan Nilai. Tumbuh dengan Kepercayaan."
              />
              <div className="flex flex-col gap-7">
                {STATISTICS.map((stat, index) => {
                  const Icon = iconMap[stat.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex flex-col gap-1">
                      <div className="flex items-end gap-3">
                        <div className="p-2 rounded-lg border border-gray-300">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-secondary font-manrope">
                          {stat.value}
                        </h3>
                        <p className="text-sm md:text-base text-foreground mt-1">
                          {stat.valueDescription}
                        </p>
                      </div>
                      <p className="text-sm md:text-base text-foreground mt-1">
                        {stat.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-16 lg:self-start py-10 md:py-14 lg:py-16">
            <div className="bg-white rounded-lg p-2 md:p-4 shadow-sm flex flex-col gap-6 h-fit">
              <div className="flex justify-left">
                <Image
                  src="/logo/main-logo.png"
                  alt="Cendekia Amanah Logo"
                  width={200}
                  height={60}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col gap-3 text-left">
                <h3 className="text-sm md:text-lg font-bold text-foreground font-manrope">
                  Fondasi Akhlak dan Ilmu Sejak Dini
                </h3>
                <p className="text-sm md:text-base text-foreground">
                  Pendidikan terpadu yang terus berkembang, didukung oleh
                  kepercayaan masyarakat
                </p>
              </div>
              <div>
                <Image
                  src="/images/common/statistic-card-image.png"
                  alt="Statistik Pendidikan"
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          <div className="py-10 md:py-14 lg:py-16">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground font-manrope">
                Lihat Semua Unit Pendidikan
              </h3>

              <div className="flex gap-4">
                <div className="flex flex-col">
                  {EDUCATION_UNITS.map((unit, index) => (
                    <div
                      key={unit.id}
                      className="flex flex-col items-center"
                      style={{
                        height:
                          index === EDUCATION_UNITS.length - 1
                            ? "200px"
                            : "calc(200px + 2rem)",
                      }}
                    >
                      <div className="px-2 py-1 rounded-lg border border-gray-300">
                        <span className="text-xl font-semibold font-manrope text-secondary">
                          {unit.number}
                        </span>
                      </div>
                      {index < EDUCATION_UNITS.length - 1 && (
                        <div className="w-0.5 flex-1 mt-2 bg-gray-200 relative overflow-hidden">
                          <div
                            ref={(el) => {
                              linesRef.current[index] = el;
                            }}
                            className="absolute top-0 left-0 w-full bg-secondary"
                            style={{ height: "0%" }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Cards with Fade In */}
                <div className="flex-1 space-y-8">
                  {EDUCATION_UNITS.map((unit, index) => (
                    <div
                      key={unit.id}
                      ref={(el) => {
                        cardsRef.current[index] = el;
                      }}
                      className={`h-[200px] flex items-start transition-all duration-800 ${
                        visibleCards.includes(index)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      {/* Isi Card tetap sama */}
                      <div className=" bg-transparent rounded-xl p-4 border border-gray-300 flex flex-col gap-4 w-full h-full">
                        <h4 className="text-lg font-semibold text-primary font-manrope line-clamp-2">
                          {unit.title}
                        </h4>
                        <p className="text-sm font-light text-foreground line-clamp-2">
                          {unit.description}
                        </p>
                        <div className="flex justify-start">
                          <Button asChild className="rounded-full">
                            <Link href={unit.href}>
                              Lihat Detail
                              <ArrowRightCircleIcon className=" w-4 h-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
