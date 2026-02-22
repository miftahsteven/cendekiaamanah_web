"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TrashIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { deleteGalleryItem } from "@/server/actions/gallery";

interface DeleteGalleryButtonProps {
  id: number;
  title: string;
}

export function DeleteGalleryButton({ id, title }: DeleteGalleryButtonProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteGalleryItem(id);

      if (!result.success) {
        throw new Error(result.error);
      }

      toast.success("Item galeri berhasil dihapus");
      setOpen(false);
      // We don't need router.refresh() if the server action revalidates path,
      // but it's good practice in client components to ensure UI sync if needed.
      // However, server action returns, effectively giving us fresh data if we refresh.
      // revalidatePath in action handles the cache, router.refresh handles the client view update.
      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Gagal menghapus item galeri",
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
        onClick={() => setOpen(true)}
      >
        <TrashIcon className="w-4 h-4" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hapus Item Galeri</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menghapus item{" "}
              <span className="font-semibold">{title || "ini"}</span>? Tindakan
              ini tidak dapat dibatalkan.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isDeleting}
            >
              Batal
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Menghapus..." : "Hapus"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
