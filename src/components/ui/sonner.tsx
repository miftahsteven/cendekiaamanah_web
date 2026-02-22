"use client";

import {
  CheckCircleIcon,
  InformationCircleIcon,
  ArrowPathIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background/95 group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      icons={{
        success: <CheckCircleIcon className="size-4 text-green-500" />,
        info: <InformationCircleIcon className="size-4 text-blue-500" />,
        warning: <ExclamationTriangleIcon className="size-4 text-yellow-500" />,
        error: <XCircleIcon className="size-4 text-red-500" />,
        loading: <ArrowPathIcon className="size-4 animate-spin" />,
      }}
      {...props}
    />
  );
};

export { Toaster };
