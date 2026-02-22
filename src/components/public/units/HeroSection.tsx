"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRightCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export interface SocialMedia {
  icon: string; // Path to image icon
  href: string;
  label: string;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  programImage: string;
  socialMedia: SocialMedia[];
  email: string;
  phone: string;
  registrationLink: string;
  registrationLabel: string;
}

export function HeroSection({
  title,
  description,
  programImage,
  socialMedia,
  email,
  phone,
  registrationLink,
  registrationLabel,
}: HeroSectionProps) {
  return (
    <div className="w-full space-y-12 py-12 md:py-18">
      {/* Row 1: Title and Description */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-start">
        <div className="md:col-span-3">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight pb-0 -mt-4 font-manrope">
            {title}
          </h1>
        </div>
        <div className="md:col-span-4">
          <p className="text-base text-foreground leading-relaxed pb-0 mt-0 whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* Row 2: Contact/Social and CTA Button */}
      <div className="flex flex-col md:flex-row justify-between bg-white md:bg-transparent pb-8 md:pb-0 items-start rounded-lg md:rounded-none pl-8 md:pl-0 md:items-center gap-8 md:border-t border-gray-300 pt-8">
        {/* Left Column: Social Media, Phone, Email */}
        <div className="flex flex-col md:flex-row  gap-6 md:gap-8">
          {/* Social Icons */}
          <div className="flex gap-4">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label={social.label}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={32}
                  height={32}
                  className="w-10 h-10"
                />
              </a>
            ))}
          </div>

          <div className="h-10 w-px bg-gray-300 hidden md:block" />

          {/* Contact Info */}
          <div className="hidden md:flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-foreground">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <EnvelopeIcon className="w-4 md:w-5 h-4 md:h-5 text-primary/80" />
              <span>{email}</span>
            </a>
            <a
              href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer"
            >
              <PhoneIcon className="w-4 md:w-5 h-4 md:h-5 text-primary/80" />
              <span>{phone}</span>
            </a>
          </div>

          <div className="flex flex-col md:hidden gap-4">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                <EnvelopeIcon className="w-4 h-4 transition-transform hover:scale-110" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a
                  href="mailto:info@cendekiaamanah.id"
                  className="font-medium transition-colors"
                >
                  <span>{email}</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center shrink-0">
                <PhoneIcon className="w-4 h-4 transition-transform hover:scale-110" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Telepon</p>
                <a
                  href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline hover:text-white transition-colors"
                >
                  <span>{phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: CTA Button */}
        <div className="flex flex-wrap items-center shrink-0 pointer-events-auto">
          <Link
            href={registrationLink}
            target="_blank"
            className="inline-flex items-center bg-primary text-white py-2 px-4 md:py-3 rounded-full font-bold text-xs md:text-sm hover:bg-primary/80 transition-all duration-300 shadow-lg hover:shadow-primary/25"
          >
            {registrationLabel}
            <ArrowRightCircleIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Row 3: Landscape Image */}
      <div className="relative w-full aspect-5/4 md:aspect-3/1 rounded-xl overflow-hidden bg-muted">
        <Image
          src={programImage}
          alt={`${title} Overview`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
