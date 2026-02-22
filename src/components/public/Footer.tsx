"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Footer() {
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Pesan terkirim!", {
          description:
            "Terima kasih telah menghubungi kami. Kami akan segera membalas pesan Anda.",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error("Gagal mengirim pesan", {
          description: result.message || "Silakan coba lagi nanti.",
        });
      }
    } catch (error) {
      toast.error(`Terjadi kesalahan ${error}`, {
        description: "Mohon periksa koneksi internet Anda dan coba lagi.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <footer className="bg-background pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-0">
        {/* Main Footer (Row 1) */}
        <div className="bg-primary rounded-xl p-8 md:p-12 text-primary-foreground">
          {/* Top Section: Brand + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Column 1: Logo, Desc, Map Preview */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo/logo-white.png"
                    alt="Cendekia Amanah Logo"
                    width={180}
                    height={58}
                    className="h-14 w-auto object-contain"
                  />
                </Link>

                <p className="text-primary-foreground/90 max-w-md leading-relaxed">
                  Kami berkolaborasi dengan berbagai media dan mitra strategis
                  untuk mendukung perkembangan pendidikan dan publikasi kegiatan
                  pesantren.
                </p>
              </div>

              {/* Map Preview Section */}
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg border border-primary-foreground/20 bg-white/10 shadow-lg h-76 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6670249784265!2d106.8213957!3d-6.436794700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ea26da9cfbe7%3A0xbfbf4efabb7654a8!2sPesantren%20Cendekia%20Amanah!5e0!3m2!1sen!2sid!4v1769954922798!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full grayscale-20 hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Column 2: Contact Form */}
            <div className="space-y-4 md:space-y-8">
              <h4 className="font-normal text-2xl md:text-5xl">Hubungi Kami</h4>
              <div className="bg-white rounded-lg p-6 md:p-8 text-slate-900 shadow-xl h-fit">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Masukkan nama lengkap"
                        className="bg-slate-50 border-slate-200 focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700">
                        Nomor Telepon
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Masukkan nomor telepon"
                        className="bg-slate-50 border-slate-200 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@contoh.com"
                        className="bg-slate-50 border-slate-200 focus-visible:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-700">
                        Subjek <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subjek pesan"
                        className="bg-slate-50 border-slate-200 focus-visible:ring-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700">
                      Pesan <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tulis pesan Anda di sini..."
                      className="min-h-[120px] bg-slate-50 border-slate-200 focus-visible:ring-primary"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Section: Info Details & Links */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-primary-foreground/15">
            {/* Col 1: Contact Details (Takes up 5 cols) */}
            <div className="lg:col-span-5 space-y-6 border-r pt-6 md:pt-12 border-primary-foreground/15">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <EnvelopeIcon className="w-5 h-5 transition-transform hover:scale-110" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@cendekiaamanah.id"
                    className="font-medium hover:underline hover:text-white transition-colors"
                  >
                    info@cendekiaamanah.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <PhoneIcon className="w-5 h-5 transition-transform hover:scale-110" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">
                    Telepon
                  </p>
                  <a
                    href="https://wa.me/6285290392246"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline hover:text-white transition-colors"
                  >
                    +62 852-9039-2246
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60 mb-1">
                    Alamat
                  </p>
                  <p className="font-medium leading-relaxed">
                    Jl. Raya Kalimulya No.86B, Kalimulya,
                    <br />
                    Kec. Cilodong, Kota Depok, Jawa Barat 16413
                  </p>
                </div>
              </div>
            </div>

            {/* Col 2: Navigation Links (Takes up 7 cols) */}
            <div className="lg:col-span-7 pt-6 md:pt-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-primary-foreground">
                {/* Navigasi */}
                <div>
                  <h4 className="font-bold text-lg mb-4">Navigasi</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/"
                        className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                      >
                        Beranda
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/profile"
                        className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/kontak"
                        className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                      >
                        Kontak
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Unit Pendidikan */}
                <div>
                  <h4 className="font-bold text-lg mb-4">Unit Pendidikan</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah"
                        className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                      >
                        Madrasah Diniyah
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pendidikan/sma-pesantren-cendekia-amanah"
                        className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                      >
                        SMA PCA
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pendidikan/smp-pesantren-cendekia-amanah"
                        className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                      >
                        SMP PCA
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Bisnis */}
                <div>
                  <h4 className="font-bold text-lg mb-4">Bisnis</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/bisnis/koperasi-pesantren-cendekia-amanah"
                        className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                      >
                        Koperasi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/bisnis/hidroponik-pesantren-cendekia-amanah"
                        className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                      >
                        Hidroponik
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Copyright */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground px-4">
          <p>
            &copy; 2025 Pesantren Cendekia Amanah. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Syarat dan Ketentuan
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
