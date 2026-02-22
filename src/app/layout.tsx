import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Pesantren Cendekia Amanah | Membangun Generasi Qur'ani Berwawasan Global",
  description:
    "Pesantren Cendekia Amanah Depok. Lembaga pendidikan Islam terpadu (SMP, SMA, Madrasah Diniyah) yang memadukan kurikulum nasional dan nilai-nilai kepesantrenan untuk melahirkan generasi berakhlak mulia dan berprestasi.",
  keywords: [
    "Pesantren",
    "Cendekia Amanah",
    "Sekolah Islam Depok",
    "Pondok Pesantren",
    "SMP Islam",
    "SMA Islam",
    "Pendidikan Islam",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
