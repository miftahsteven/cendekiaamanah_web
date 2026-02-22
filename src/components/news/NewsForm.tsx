"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save, Loader2, Upload, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { createNews, updateNews } from "@/server/actions/news";
import { Skeleton } from "@/components/ui/skeleton";
import { RichTextEditor } from "./RichTextEditor";

interface NewsFormProps {
  initialData?: {
    id: number;
    title: string;
    excerpt: string | null;
    content: string;
    image: string | null;
    unitId: number | null;
    isPublished: boolean;
  };
  units: Array<{ id: number; name: string }>;
  isEditing?: boolean;
  isLoadingUnits?: boolean;
}

export function NewsForm({
  initialData,
  units,
  isEditing = false,
  isLoadingUnits = false,
}: NewsFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    image: initialData?.image || "",
    unitId: initialData?.unitId?.toString() || "null",
    isPublished: initialData?.isPublished ?? true,
  });

  const [preview, setPreview] = useState<string>(
    initialData?.image
      ? initialData.image.startsWith("http")
        ? initialData.image
        : `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${initialData.image}`
      : "",
  );

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

    // Validate file size (1MB) - User spec: "maksimal 1 mb"
    const maxSize = 1 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("Ukuran file melebihi batas 1MB");
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
      // Store publicId as per requirement
      setFormData({ ...formData, image: data.publicId });
      toast.success("Gambar berhasil diunggah");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Gagal mengunggah gambar",
      );
      setPreview(""); // reset preview on fail
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: "" });
    setPreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title) {
      toast.error("Judul wajib diisi");
      return;
    }

    if (!formData.content) {
      toast.error("Konten berita wajib diisi");
      return;
    }

    // Thumbnail is optional for news? Let's assume yes, but strongly encouraged.
    // If requirement says "news have title and imagethumbnail", might be required.
    // GalleryForm required it. Let's make it optional but warn or just required if consistent with UI.
    // User says "news have title and imagethumbnail", lets assume required for good UI.
    // Actually, "news have title and imagethumbnail date uploaded content..." implies it's part of the data.
    // I'll make it required to be safe and ensure good UI.
    if (!formData.image) {
      toast.error("Gambar thumbnail wajib diunggah");
      return;
    }

    setIsLoading(true);
    try {
      const unitId =
        formData.unitId === "null" ? null : parseInt(formData.unitId);

      let result;
      if (isEditing && initialData) {
        result = await updateNews(initialData.id, {
          title: formData.title,
          excerpt: formData.excerpt,
          content: formData.content,
          image: formData.image,
          unitId: unitId,
          isPublished: formData.isPublished,
        });
      } else {
        result = await createNews({
          title: formData.title,
          excerpt: formData.excerpt,
          content: formData.content,
          image: formData.image,
          unitId: unitId,
          isPublished: formData.isPublished,
        });
      }

      if (!result.success) {
        throw new Error(result.error);
      }

      toast.success(
        isEditing ? "Berita berhasil diperbarui" : "Berita berhasil dibuat",
      );
      router.push("/dashboard/news");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Gagal menyimpan berita",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/news">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">
            {isEditing ? "Edit Berita" : "Tambah Berita"}
          </h1>
          <p className="text-muted-foreground">
            {isEditing
              ? "Edit informasi berita"
              : "Buat berita baru untuk sekolah atau unit"}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Konten Berita</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">
                    Judul <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Judul berita..."
                    required
                  />
                </div>

                {/* Content (Rich Text) */}
                <div className="space-y-2">
                  <Label>
                    Konten <span className="text-destructive">*</span>
                  </Label>
                  <RichTextEditor
                    content={formData.content}
                    onChange={(html) =>
                      setFormData({ ...formData, content: html })
                    }
                    disabled={isLoading}
                  />
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Ringkasan (Excerpt)</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) =>
                      setFormData({ ...formData, excerpt: e.target.value })
                    }
                    placeholder="Singkat mengenai berita ini (opsional)..."
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    Ditampilkan di kartu berita pada halaman depan.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Meta & Image */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Publikasi</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Unit */}
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit</Label>
                  {isLoadingUnits ? (
                    <Skeleton className="h-10 w-full" />
                  ) : (
                    <Select
                      value={formData.unitId}
                      onValueChange={(value) =>
                        setFormData({ ...formData, unitId: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih unit..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="null">Umum (Semua Unit)</SelectItem>
                        {units.map((unit) => (
                          <SelectItem key={unit.id} value={unit.id.toString()}>
                            {unit.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                </div>

                {/* Status (Hidden for now, default true) */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Thumbnail</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image">
                    Gambar Utama <span className="text-destructive">*</span>
                  </Label>
                  {preview ? (
                    <>
                      <div className="relative aspect-video w-full bg-muted rounded-lg overflow-hidden group">
                        <Image
                          src={preview}
                          alt="Preview"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={handleRemoveImage}
                          >
                            <X className="w-4 h-4 mr-2" />
                            Hapus
                          </Button>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Maksimal 1MB. Format: JPG, JPEG, PNG.
                      </p>
                    </>
                  ) : (
                    <div className="border-2 border-dashed rounded-lg p-6 text-center hover:bg-muted/50 transition-colors">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground mb-2">
                        <span
                          className="font-semibold text-primary cursor-pointer"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          Klik untuk upload
                        </span>{" "}
                        atau drag & drop
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        JPG, JPEG, PNG (Maks. 1MB)
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg,image/jpg,image/png"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                disabled={isLoading || isUploading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Simpan Berita
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                asChild
                disabled={isLoading || isUploading}
                className="w-full"
              >
                <Link href="/dashboard/news">Batal</Link>
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
