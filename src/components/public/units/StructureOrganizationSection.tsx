"use client";

import { SectionTitleHeader } from "@/components/common/SectionTitleHeader";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Leader {
  name: string;
  role: string;
  image: string;
}

interface StructureOrganizationSectionProps {
  subtitle: string;
  title: string;
  description: string;
  leaders: Leader[];
  className?: string;
}

export function StructureOrganizationSection({
  subtitle,
  title,
  description,
  leaders,
  className,
}: StructureOrganizationSectionProps) {
  const LeaderCard = ({ leader }: { leader: Leader }) => (
    <div className="flex flex-col gap-3 h-full">
      {/* Image Container - Just rounded image */}
      <div className="md:border border-gray-200 rounded-xl overflow-hidden p-0 md:p-2">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={leader.image}
            alt={leader.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-120 cursor-pointer"
          />
        </div>
      </div>

      {/* Content Below Image */}
      <div className="text-left">
        <h4 className="font-semibold text-gray-900 text-base md:text-lg line-clamp-1">
          {leader.name}
        </h4>
        <p className="text-muted-foreground text-sm">{leader.role}</p>
      </div>
    </div>
  );

  return (
    <section className={cn("w-full py-12 md:py-20 bg-background", className)}>
      <div className="container mx-auto px-4 md:px-0">
        {/* Row 1: Title Header (Full Width) */}
        <div className="mb-12">
          <SectionTitleHeader
            subtitle={subtitle}
            title={title}
            align="left"
            className="items-center md:items-start"
            full
          />
        </div>

        {/* Row 2: Content (Icon Text + Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-12 md:border-t md:border-gray-200 ">
          {/* Column 1: Icon Text (2/7 columns) */}
          <div className="lg:col-span-2 md:border-r md:border-gray-200 md:pt-8">
            <div className="sticky top-24">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-white rounded-lg border border-gray-300">
                  <UserGroupIcon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground font-manrope">
                  {description}
                </h3>
              </div>
            </div>
          </div>

          {/* Column 2: Card Photo Teacher (5/7 columns) */}
          <div className="lg:col-span-5 md:pt-8">
            {/* Desktop Grid (Hidden on Mobile, Visible on MD+) */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {leaders.map((leader, index) => (
                <LeaderCard key={index} leader={leader} />
              ))}
            </div>

            {/* Mobile Swiper (Visible on Mobile, Hidden on MD+) */}
            <div className="block md:hidden w-full">
              <Swiper
                modules={[Pagination]}
                spaceBetween={16}
                slidesPerView={2.2}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                }}
                className="pb-12!"
              >
                {leaders.map((leader, index) => (
                  <SwiperSlide key={index}>
                    <LeaderCard leader={leader} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
