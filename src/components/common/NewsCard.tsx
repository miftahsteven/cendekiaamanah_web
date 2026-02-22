import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  slug: string;
  publishedAt: string;
}

interface NewsCardProps {
  news: NewsItem;
  basePath?: string;
  orientation?: "vertical" | "horizontal";
}

export function NewsCard({
  news,
  basePath = "/berita",
  orientation = "vertical",
}: NewsCardProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "bg-card rounded-xl overflow-hidden transition-shadow duration-300 flex",
        isHorizontal
          ? "flex-row md:flex-col h-auto md:h-full shadow-none md:shadow-sm md:hover:shadow-lg"
          : "flex-col h-full shadow-sm hover:shadow-lg",
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "p-2.5 md:p-3",
          isHorizontal ? "w-1/3 md:w-full shrink-0" : "w-full",
        )}
      >
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-lg",
            isHorizontal ? "h-full min-h-[120px] md:h-48" : "h-48",
          )}
        >
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col flex-1",
          isHorizontal
            ? "p-3 md:p-4 gap-2 md:gap-3 justify-center"
            : "p-4 gap-3",
        )}
      >
        {/* Category Label */}
        <span
          className={cn(
            "inline-block rounded-full font-normal uppercase w-fit bg-white border border-accent text-foreground shadow-sm",
            isHorizontal
              ? "px-2 py-0.5 text-[10px] md:text-xs md:px-3 md:py-1"
              : "px-3 py-1 text-xs",
          )}
        >
          {news.category}
        </span>

        {/* Title */}
        <h3
          className={cn(
            "font-medium text-foreground line-clamp-2 font-manrope",
            isHorizontal ? "text-sm md:text-lg" : "text-lg",
          )}
        >
          {news.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "text-muted-foreground line-clamp-2 flex-1",
            isHorizontal ? "text-xs md:text-sm hidden sm:block" : "text-sm",
          )}
        >
          {news.description}
        </p>

        {/* Read More Link */}
        <div className="flex justify-end mt-auto">
          <Link
            href={`${basePath}/${news.slug}`}
            className={cn(
              "inline-flex items-center gap-2 font-semibold text-foreground hover:text-foreground/80 transition-colors group",
              isHorizontal ? "text-xs md:text-sm" : "text-sm",
            )}
          >
            SELENGKAPNYA
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
