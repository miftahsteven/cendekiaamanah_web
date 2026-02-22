"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save, Loader2, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { CarouselFormSkeleton } from "@/components/carousel/CarouselSkeletons";

interface CarouselItem {
  id: number;
  title: string | null;
  subtitle: string | null;
  image: string;
  link: string | null;
  buttonText: string | null;
  order: number;
  isActive: boolean;
}

export default function EditCarouselPage() {
  const params = useParams();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image: "",
    link: "",
    buttonText: "",
    order: 0,
    isActive: true,
  });
  const [preview, setPreview] = useState<string>("");
  const [units, setUnits] = useState<
    Array<{ id: number; name: string; slug: string }>
  >([]);

  // Fetch units for the link dropdown
  useEffect(() => {
    async function fetchUnits() {
      try {
        const response = await fetch("/api/units");
        if (response.ok) {
          const data = await response.json();
          setUnits(data);
        }
      } catch (error) {
        console.error("Failed to fetch units:", error);
      }
    }
    fetchUnits();
  }, []);

  useEffect(() => {
    async function fetchCarouselItem() {
      try {
        const response = await fetch(`/api/carousel/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch carousel item");

        const item: CarouselItem = await response.json();
        setFormData({
          title: item.title || "",
          subtitle: item.subtitle || "",
          image: item.image,
          link: item.link || "",
          buttonText: item.buttonText || "selengkapnya",
          order: item.order,
          isActive: item.isActive,
        });
        setPreview(item.image);
      } catch {
        toast.error("Gagal memuat data carousel");
      } finally {
        setIsFetching(false);
      }
    }

    fetchCarouselItem();
  }, [params.id]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (!validTypes.includes(file.type)) {
      toast.error(
        "Tipe file tidak valid. Hanya JPG, JPEG, dan PNG yang diizinkan",
      );
      return;
    }

    // Validate file size (2MB)
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("Ukuran file melebihi batas 2MB");
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to Cloudinary
    setIsUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to upload image");
      }

      const data = await response.json();
      setFormData({ ...formData, image: data.url });
      toast.success("Gambar berhasil diunggah");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Gagal mengunggah gambar",
      );
      setPreview(formData.image);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image) {
      toast.error("Gambar wajib diunggah");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/carousel/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to update carousel");
      }

      toast.success("Slide carousel berhasil diperbarui");
      router.push("/dashboard/carousel");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Gagal memperbarui slide carousel",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return <CarouselFormSkeleton />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/carousel">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Edit Slide Carousel</h1>
          <p className="text-muted-foreground">
            Perbarui informasi slide carousel
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informasi Slide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="image">
                Gambar <span className="text-destructive">*</span>
              </Label>
              <div className="relative w-full h-64 bg-muted rounded-lg overflow-hidden group">
                <Image
                  src={preview || formData.image}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isUploading}
                  >
                    {isUploading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Mengunggah...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Ganti Gambar
                      </>
                    )}
                  </Button>
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/jpg,image/png"
                onChange={handleFileChange}
                className="hidden"
              />
              <p className="text-xs text-muted-foreground">
                JPG, JPEG, atau PNG (Maks. 2MB)
              </p>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Judul</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Contoh: Selamat Datang di Cendekia Amanah"
              />
            </div>

            {/* Subtitle */}
            <div className="space-y-2">
              <Label htmlFor="subtitle">Subjudul</Label>
              <Input
                id="subtitle"
                value={formData.subtitle}
                onChange={(e) =>
                  setFormData({ ...formData, subtitle: e.target.value })
                }
                placeholder="Contoh: Pendidikan Berkualitas untuk Masa Depan"
              />
            </div>

            {/* Link */}
            <div className="space-y-2">
              <Label htmlFor="link">Link ke Halaman Unit (Opsional)</Label>
              <Select
                value={formData.link || "none"}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    link: value === "none" ? "" : value,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih halaman unit..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Tidak ada link</SelectItem>
                  {units.map((unit) => (
                    <SelectItem key={unit.id} value={`/${unit.slug}`}>
                      {unit.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Carousel akan mengarah ke halaman detail unit yang dipilih
              </p>
            </div>

            {/* Button Text */}
            <div className="space-y-2">
              <Label htmlFor="buttonText">Teks Tombol</Label>
              <Input
                id="buttonText"
                value={formData.buttonText}
                onChange={(e) =>
                  setFormData({ ...formData, buttonText: e.target.value })
                }
                placeholder="Contoh: Selengkapnya"
              />
              <p className="text-xs text-muted-foreground">
                Teks yang akan ditampilkan pada tombol (Default: selengkapnya)
              </p>
            </div>

            {/* Order */}
            <div className="space-y-2">
              <Label htmlFor="order">Urutan</Label>
              <Input
                id="order"
                type="number"
                value={formData.order}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    order: parseInt(e.target.value) || 0,
                  })
                }
                placeholder="0"
              />
              <p className="text-xs text-muted-foreground">
                Angka lebih kecil akan ditampilkan lebih dulu
              </p>
            </div>

            {/* Is Active */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData({ ...formData, isActive: e.target.checked })
                }
                className="w-4 h-4 rounded border-gray-300"
              />
              <Label htmlFor="isActive" className="cursor-pointer">
                Aktifkan slide ini
              </Label>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={isLoading || isUploading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Simpan Perubahan
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                asChild
                disabled={isLoading || isUploading}
              >
                <Link href="/dashboard/carousel">Batal</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
