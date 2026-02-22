"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface Unit {
  id: number;
  name: string;
  abbreviation: string;
  slug: string;
  description: string | null;
}

export default function EditUnitPage() {
  const params = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    abbreviation: "",
    description: "",
  });
  const [originalSlug, setOriginalSlug] = useState("");

  useEffect(() => {
    async function fetchUnit() {
      try {
        const response = await fetch(`/api/units/${params.id}`);
        if (!response.ok) throw new Error("Failed to fetch unit");

        const unit: Unit = await response.json();
        setFormData({
          name: unit.name,
          abbreviation: unit.abbreviation,
          description: unit.description || "",
        });
        setOriginalSlug(unit.slug);
      } catch {
        toast.error("Gagal memuat data unit");
      } finally {
        setIsFetching(false);
      }
    }

    fetchUnit();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`/api/units/${params.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update unit");
      }

      toast.success("Unit berhasil diperbarui");

      router.push("/dashboard/units");
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Gagal memperbarui unit",
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/units">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Edit Unit</h1>
          <p className="text-muted-foreground">Perbarui informasi unit</p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informasi Unit</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">
                Nama Unit <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Contoh: SMA Cendekia Amanah"
                required
              />
            </div>

            {/* Abbreviation */}
            <div className="space-y-2">
              <Label htmlFor="abbreviation">
                Singkatan <span className="text-destructive">*</span>
              </Label>
              <Input
                id="abbreviation"
                value={formData.abbreviation}
                onChange={(e) =>
                  setFormData({ ...formData, abbreviation: e.target.value })
                }
                placeholder="Contoh: SMA"
                required
              />
              <p className="text-xs text-muted-foreground">
                Singkatan akan ditampilkan pada berbagai halaman
              </p>
            </div>

            {/* Slug (read-only) */}
            <div className="space-y-2">
              <Label htmlFor="slug">Slug (URL)</Label>
              <Input
                id="slug"
                value={originalSlug}
                disabled
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">
                Slug tidak dapat diubah untuk menjaga konsistensi URL
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Deskripsi singkat tentang unit ini..."
                rows={5}
              />
              <p className="text-xs text-muted-foreground">
                Deskripsi akan ditampilkan pada halaman detail unit
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4">
              <Button type="submit" disabled={isLoading}>
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
                disabled={isLoading}
              >
                <Link href="/dashboard/units">Batal</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
