"use client";

import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Youtube from "@tiptap/extension-youtube";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link as LinkIcon,
  Image as ImageIcon,
  Loader2,
  Heading1,
  Heading2,
  Heading3,
} from "lucide-react";
import { useCallback, useState } from "react";
import { toast } from "sonner";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  disabled?: boolean;
}

const MenuBar = ({
  editor,
  disabled,
}: {
  editor: Editor | null;
  disabled?: boolean;
}) => {
  const [isUploading, setIsUploading] = useState(false);

  const addImage = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      if (input.files?.length) {
        const file = input.files[0];
        setIsUploading(true);

        const formData = new FormData();
        formData.append("file", file);

        try {
          const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Failed to upload image");
          }

          const data = await response.json();
          // Insert image with full URL
          if (editor) {
            editor.chain().focus().setImage({ src: data.url }).run();
          }
          toast.success("Image uploaded successfully");
        } catch (error) {
          console.error(error);
          toast.error("Failed to upload image");
        } finally {
          setIsUploading(false);
        }
      }
    };
    input.click();
  }, [editor]);

  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // update
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  const buttons = [
    {
      icon: Bold,
      title: "Bold",
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: Italic,
      title: "Italic",
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: Heading1,
      title: "Heading 1",
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: Heading2,
      title: "Heading 2",
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: Heading3,
      title: "Heading 3",
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: () => editor.isActive("heading", { level: 3 }),
    },
    {
      icon: List,
      title: "Bullet List",
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: ListOrdered,
      title: "Ordered List",
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    // Alignment needs special handling for icons if we want robust, but simple for now
  ];

  return (
    <div className="border border-input border-b-0 rounded-t-md p-2 flex flex-wrap gap-1 bg-muted/20">
      {buttons.map((btn, index) => (
        <Button
          key={index}
          onClick={btn.action}
          variant={btn.isActive() ? "secondary" : "ghost"}
          size="sm"
          type="button"
          disabled={disabled}
          className="h-8 w-8 p-0"
          title={btn.title}
        >
          <btn.icon className="h-4 w-4" />
        </Button>
      ))}

      <div className="w-px h-6 bg-border mx-1 my-auto" />

      <Button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        variant={editor.isActive({ textAlign: "left" }) ? "secondary" : "ghost"}
        size="sm"
        type="button"
        disabled={disabled}
        className="h-8 w-8 p-0"
        title="Align Left"
      >
        <span className="sr-only">Align Left</span>
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        variant={
          editor.isActive({ textAlign: "center" }) ? "secondary" : "ghost"
        }
        size="sm"
        type="button"
        disabled={disabled}
        className="h-8 w-8 p-0"
        title="Align Center"
      >
        <span className="sr-only">Align Center</span>
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        variant={
          editor.isActive({ textAlign: "right" }) ? "secondary" : "ghost"
        }
        size="sm"
        type="button"
        disabled={disabled}
        className="h-8 w-8 p-0"
        title="Align Right"
      >
        <span className="sr-only">Align Right</span>
        <AlignRight className="h-4 w-4" />
      </Button>

      <div className="w-px h-6 bg-border mx-1 my-auto" />

      <Button
        onClick={setLink}
        variant={editor.isActive("link") ? "secondary" : "ghost"}
        size="sm"
        type="button"
        disabled={disabled}
        className="h-8 w-8 p-0"
        title="Link"
      >
        <LinkIcon className="h-4 w-4" />
      </Button>

      <Button
        onClick={addImage}
        variant="ghost"
        size="sm"
        type="button"
        disabled={disabled || isUploading}
        className="h-8 w-8 p-0 relative"
        title="Insert Image"
      >
        {isUploading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ImageIcon className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export function RichTextEditor({
  content,
  onChange,
  disabled,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        inline: true,
        allowBase64: true, // fallback
      }),
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Youtube.configure({
        controls: false,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editable: !disabled,
    editorProps: {
      attributes: {
        class:
          "min-h-[300px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 prose prose-sm max-w-none dark:prose-invert",
      },
      transformPastedText(text) {
        return text.toUpperCase();
      },
    },
    immediatelyRender: false, // Fix hydration mismatch
  });

  return (
    <div className="w-full">
      <MenuBar editor={editor} disabled={disabled} />
      <EditorContent
        editor={editor}
        className="rounded-b-md border border-t-0 border-input"
      />
    </div>
  );
}
