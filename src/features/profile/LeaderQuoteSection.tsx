import Image from "next/image";
import { Quote } from "lucide-react";

export function PesantrenLeaderQuoteSection() {
  return (
    <div className="w-full pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Photo & Name */}
        <div className="lg:col-span-8 relative">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 relative">
            <Quote
              className="absolute top-8 left-8 w-12 h-12 text-primary/20 rotate-180"
              fill="currentColor"
              strokeWidth={0}
            />

            <blockquote className="relative z-10 text-base md:text-lg lg:text-xl font-medium text-foreground leading-relaxed italic text-center md:text-left pt-8">
              Pesantren terbukti telah berhasil mencetak kader - kader unggul
              dan pemimpin bangsa, baik pesantren salaf maupun modern, maka
              perlu dilakukan inovasi sistem Pendidikan pesantren dan integrasi
              ilmu guna menyiapkan perkembangan dan tantangan zaman guna
              menyiapkan generasi yang unggul bertaraf Internasional
            </blockquote>
          </div>
        </div>
        {/* Right Column: Quote */}

        <div className="lg:col-span-4 flex flex-col items-center text-center space-y-6">
          <div className="relative w-64  md:w-80 h-100 overflow-hidden ">
            <Image
              src="/images/guru/leader-remove-bg.png"
              alt="KH. M. Cholil Nafis, Lc., Ph.D"
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-primary font-manrope">
              KH. M. Cholil Nafis, Lc., Ph.D
            </h3>
            <p className="text-muted-foreground font-medium text-lg">
              Pengasuh Pondok Pesantren Cendekia Amanah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
