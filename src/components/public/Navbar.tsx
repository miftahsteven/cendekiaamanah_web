"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Profile", href: "/profile" },
  {
    label: "Pendidikan",
    children: [
      {
        label: "SMP PCA",
        sublabel: "Sekolah Menengah Pertama Pesantren Cendekia Amanah",
        href: "/pendidikan/smp-pesantren-cendekia-amanah",
      },
      {
        label: "SMA PCA",
        sublabel: "Sekolah Menengah Atas Pesantren Cendekia Amanah",
        href: "/pendidikan/sma-pesantren-cendekia-amanah",
      },
      {
        label: "Madin PCA",
        sublabel: "Madrasah Diniyah Pesantren Cendekia Amanah",
        href: "/pendidikan/madrasah-diniyah-pesantren-cendekia-amanah",
      },
    ],
  },
  {
    label: "Bisnis",
    children: [
      {
        label: "Koperasi",
        sublabel: "Koperasi Pesantren Cendekia Amanah",
        href: "/bisnis/koperasi-pesantren-cendekia-amanah",
      },
      {
        label: "Hidroponik",
        sublabel: "Hidroponik Pesantren Cendekia Amanah",
        href: "/bisnis/hidroponik-pesantren-cendekia-amanah",
      },
    ],
  },
  { label: "Publikasi", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
  {
    label: "Zakat & Wakaf",
    href: "https://amanahzakat.id",
    external: true,
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isChildActive = (children: { href: string }[]) =>
    children.some((child) => pathname === child.href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-300 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/75">
      <nav className="container mx-auto px-4 md:px-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/main-logo.png"
              alt="Cendekia Amanah Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList>
                  {menuItems.map((item) => (
                    <NavigationMenuItem key={item.label}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger
                            className={cn(
                              "bg-transparent hover:bg-accent data-[state=open]:bg-accent/50",
                              isChildActive(item.children) &&
                                "text-primary font-semibold",
                            )}
                          >
                            {item.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.children.map((child) => (
                                <ListItem
                                  key={child.href}
                                  title={child.label}
                                  href={child.href}
                                  className={cn(
                                    isActive(child.href) &&
                                      "text-primary font-semibold",
                                  )}
                                >
                                  {child.sublabel}
                                </ListItem>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent hover:bg-accent",
                            isActive(item.href) && "text-primary font-semibold",
                          )}
                        >
                          <Link
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={
                              item.external ? "noopener noreferrer" : undefined
                            }
                          >
                            <span className="inline-flex items-center gap-1">
                              {item.label}
                              {item.external && (
                                <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                              )}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Menu & CTA */}
            <div className="flex items-center gap-2">
              <Button asChild className="hidden sm:inline-flex rounded-full">
                <Link href="/daftar">
                  Daftar SPMB
                  <ArrowRightCircleIcon className="w-4 h-4" />
                </Link>
              </Button>

              {/* Mobile Sheet Trigger */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden bg-white shadow-xs"
                  >
                    <Bars3Icon className="h-8 w-full" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-4 mt-8 bg-background p-5">
                    {menuItems.map((item) =>
                      item.children ? (
                        <div key={item.label} className="space-y-3">
                          <div className="font-medium text-sm text-muted-foreground px-2">
                            {item.label}
                          </div>
                          <div className="flex flex-col gap-1 pl-4 border-l border-accent">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={
                            item.external ? "noopener noreferrer" : undefined
                          }
                          className="block px-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="inline-flex items-center gap-1">
                            {item.label}
                            {item.external && (
                              <ArrowTopRightOnSquareIcon className="w-3 h-3" />
                            )}
                          </span>
                        </Link>
                      ),
                    )}

                    <Button asChild className="w-full rounded-full">
                      <Link href="/daftar" onClick={() => setIsOpen(false)}>
                        Daftar SPMB
                        <ArrowRightCircleIcon className=" w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground  focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
