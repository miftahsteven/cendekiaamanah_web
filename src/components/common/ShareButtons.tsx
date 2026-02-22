"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Check,
} from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  title: string;
  url: string;
}

interface ShareButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  className?: string;
}

function ShareLinkButton({ icon, href, label, className }: ShareButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors ${className}`}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareText = `Baca berita terbaru: ${title}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2 lg:space-y-3 w-full lg:w-auto">
      <h3 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Bagikan
      </h3>
      <div className="flex gap-2">
        <ShareLinkButton
          icon={<Facebook className="w-4 h-4" />}
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url,
          )}`}
          label="Share on Facebook"
        />
        <ShareLinkButton
          icon={<Twitter className="w-4 h-4" />}
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText,
          )}&url=${encodeURIComponent(url)}`}
          label="Share on Twitter"
        />
        <ShareLinkButton
          icon={<Linkedin className="w-4 h-4" />}
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            url,
          )}&title=${encodeURIComponent(title)}`}
          label="Share on LinkedIn"
        />
        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
          title="Copy Link"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <LinkIcon className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
