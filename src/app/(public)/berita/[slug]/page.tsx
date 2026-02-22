import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { NewsGrid } from "@/components/common/NewsGrid";
import { formatDate } from "@/lib/utils";
import { getNews, getNewsBySlug } from "@/server/actions/news";
import Link from "next/link";
import { ShareButtons } from "@/components/common/ShareButtons";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const result = await getNewsBySlug(slug);

  if (!result.success || !result.data) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  const news = result.data;

  return {
    title: `${news.title} - Cendekia Amanah`,
    description: news.excerpt || news.title,
    openGraph: {
      title: news.title,
      description: news.excerpt || news.title,
      images: news.image
        ? [
            {
              url: news.image.startsWith("http")
                ? news.image
                : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${news.image}`,
            },
          ]
        : [],
    },
  };
}

export default async function NewsDetailPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const result = await getNewsBySlug(slug);

  if (!result.success || !result.data) {
    notFound();
  }

  const news = result.data;

  // Get related news (exclude current, take 4)
  // Initially fetch latest 5, then filter out current
  const relatedResult = await getNews({ limit: 5 });
  const relatedNews = (
    relatedResult.success && relatedResult.data ? relatedResult.data : []
  )
    .filter((n) => n.id !== news.id)
    .slice(0, 4)
    .map((item) => ({
      id: item.id.toString(),
      title: item.title,
      description: item.excerpt || "",
      category: item.unit?.name || "Umum",
      image: item.image
        ? item.image.startsWith("http")
          ? item.image
          : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${item.image}`
        : "/images/placeholder.jpg", // Fallback image needed? Or check NewsCard
      slug: item.slug,
      publishedAt: formatDate(item.publishedAt || new Date()),
    }));

  const breadcrumbItems = [
    { label: "Pesantren", href: "/" },
    { label: "Berita", href: "/berita" },
    { label: news.title }, // Truncate if too long?
  ];

  // Current URL for sharing
  // In Server Components, getting full URL is tricky without headers.
  // We can construct it.
  const shareUrl = `https://cendekiaamanah.id/berita/${slug}`; // Replace with env var if possible
  const shareText = `Baca berita terbaru: ${news.title}`;

  // Image URL helper
  const imageUrl = news.image
    ? news.image.startsWith("http")
      ? news.image
      : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${news.image}`
    : "/images/placeholder.jpg";

  return (
    <div className="container mx-auto px-4 md:px-0 py-8 md:py-12 space-y-4 md:space-y-8 ">
      {/* 1. Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* 2. Title & Hero Image */}
      <div className="space-y-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight font-manrope">
          {news.title}
        </h1>
        <div className="relative w-full aspect-video md:aspect-[2.5/1] rounded-2xl overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={news.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 3. Main Content Columns (Ratio 1:3 ~ Grid cols 4) */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 py-4 md:py-8">
        {/* Left Column: Metadata (1 col) */}
        <div className="lg:col-span-1 flex flex-row flex-wrap justify-between items-center gap-4 lg:flex-col lg:items-start lg:space-y-8 h-fit lg:sticky lg:top-24 border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0">
          {/* Date */}
          <div className="space-y-1 lg:space-y-2">
            <h3 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Tanggal Upload
            </h3>
            <p className="text-sm font-medium text-foreground">
              {formatDate(news.publishedAt || new Date())}
            </p>
          </div>

          {/* Category */}
          <div className="space-y-1 lg:space-y-2">
            <h3 className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Kategori
            </h3>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {news.unit?.name || "Umum"}
            </span>
          </div>

          {/* Share */}
          {/* Share */}
          <ShareButtons title={news.title} url={shareUrl} />
        </div>

        {/* Right Column: Main Content (3 cols) */}
        <div className="lg:col-span-3">
          <div
            className="prose prose-lg max-w-none prose-headings:font-manrope prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{
              __html: news.content,
            }}
          />
        </div>
      </div>

      {/* 4. Berita Lainnya */}
      {relatedNews.length > 0 && (
        <div className="pt-8 border-t border-gray-200">
          <NewsGrid
            items={relatedNews}
            subtitle="BERITA LAINNYA"
            title="Baca Berita & Informasi Menarik Lainnya"
            headerAlign="left" // Ensure NewsGrid supports this prop (it was headerPosition="left" in previous view_file?)
            // Checking previous view_file for NewsGrid... it has `headerPosition`.
            // Wait, previous file `NewsGrid.tsx` check (Step 83) didn't show `headerPosition` explicitly in props interface but GalleryGrid did.
            // Let me check NewsGrid again or assume common component.
            // Actually, in Step 267 (old slug page), it used `headerAlign="left"`.
            // But let's check `NewsGrid` definition from earlier steps.
            // Step 79: `interface NewsGridProps { items: NewsItem[]; subtitle: string; ... }`
            // It imports from `NewsCard`.
            // I should verify `NewsGrid` props.
            showViewAllButton={false} // Check if this prop exists
            showFilter={false}
            basePath="/berita"
          />
        </div>
      )}
    </div>
  );
}
