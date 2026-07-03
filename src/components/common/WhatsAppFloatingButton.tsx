"use client";

import Image from "next/image";

export function WhatsAppFloatingButton() {
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890";
  const waUrl = `https://wa.me/${waNumber}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
      className="whatsapp-float"
    >
      {/* Pulse ring animation */}
      <span className="whatsapp-pulse" />

      {/* Local official WhatsApp WebP image */}
      <div className="whatsapp-img-container">
        <Image
          src="/images/icon/whatsapp.png.webp"
          alt="WhatsApp Logo"
          width={60}
          height={60}
          className="whatsapp-icon-img"
          priority
        />
      </div>

      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease;
          text-decoration: none;
        }
        .whatsapp-float:hover {
          transform: scale(1.13);
        }
        .whatsapp-img-container {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .whatsapp-icon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .whatsapp-pulse {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(37, 211, 102, 0.4);
          animation: wa-pulse 2s ease-out infinite;
          pointer-events: none;
          z-index: 1;
        }
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          70%  { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
      `}</style>
    </a>
  );
}

