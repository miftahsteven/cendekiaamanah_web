"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
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
import { ArrowLeft, Save, Loader2, Upload, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { createGalleryItem, updateGalleryItem } from "@/server/actions/gallery";
import { Skeleton } from "@/components/ui/skeleton";

interface GalleryFormProps {
  initialData?: {
    id: number;
    title: string;
    image: string;
    unitId: number | null;
  };
  units: Array<{ id: number; name: string }>;
  isEditing?: boolean;
  isLoadingUnits?: boolean;
}

export function GalleryForm({
  initialData,
  units,
  isEditing = false,
  isLoadingUnits = false,
}: GalleryFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    image: initialData?.image || "",
    unitId: initialData?.unitId?.toString() || "null", // string for Select value
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
      // Store only the path (public_id with extension or just public_id?
      // User said "upload image just path name, no base url domain"
      // Cloudinary response `url` is full URL. `publicId` is the ID (e.g. folder/name).
      // `publicId` usually doesn't have extension.
      // Let's use `publicId` but we need to know if we need the extension for `Image` src.
      // Usually Cloudinary URLs work with publicId alone (defaults to jpg/png or auto format).
      // But if we want to be safe, we can manually check.
      // The `publicId` from upload response is safest "path name".
      // Example publicId: "cendekia-amanah/carousel/abcde"

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

    if (!formData.image) {
      toast.error("Gambar wajib diunggah");
      return;
    }

    if (!formData.title) {
      toast.error("Judul wajib diisi");
      return;
    }

    setIsLoading(true);
    try {
      const unitId =
        formData.unitId === "null" ? null : parseInt(formData.unitId);

      let result;
      if (isEditing && initialData) {
        result = await updateGalleryItem(initialData.id, {
          title: formData.title,
          image: formData.image,
          unitId: unitId,
        });
      } else {
        result = await createGalleryItem({
          title: formData.title,
          image: formData.image,
          unitId: unitId,
        });
      }

      if (!result.success) {
        throw new Error(result.error);
      }

      toast.success(
        isEditing
          ? "Item galeri berhasil diperbarui"
          : "Item galeri berhasil dibuat",
      );
      router.push("/dashboard/gallery");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Gagal menyimpan item galeri",
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
          <Link href="/dashboard/gallery">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">
            {isEditing ? "Edit Foto" : "Tambah Foto"}
          </h1>
          <p className="text-muted-foreground">
            {isEditing
              ? "Edit informasi foto galeri"
              : "Tambahkan foto baru ke galeri"}
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informasi Foto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="image">
                Gambar <span className="text-destructive">*</span>
              </Label>
              {preview ? (
                <>
                  <div className="relative min-w-64 min-h-64 max-w-80 max-h-80 bg-muted rounded-lg overflow-hidden group">
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
                        Hapus Gambar
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    JPG, JPEG, atau PNG (Maks. 1MB)
                  </p>
                </>
              ) : (
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-4">
                    JPG, JPEG, atau PNG (Maks. 1MB)
                  </p>
                  <Button
                    type="button"
                    variant="outline"
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
                        Pilih Gambar
                      </>
                    )}
                  </Button>
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
                placeholder="Contoh: Kegiatan Upacara Bendera"
                required
              />
            </div>

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
              <p className="text-xs text-muted-foreground">
                Foto akan ditampilkan pada halaman detail unit yang dipilih
                (atau semua jika Umum)
              </p>
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
                    Simpan
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                asChild
                disabled={isLoading || isUploading}
              >
                <Link href="/dashboard/gallery">Batal</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
