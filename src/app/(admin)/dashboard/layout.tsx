import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { SessionProvider } from "next-auth/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <SessionProvider session={session}>
      <SidebarProvider>
        <Sidebar />
        <main className="w-full">
          <div className="flex items-center p-4 pb-0">
            <SidebarTrigger />
          </div>
          <div className="p-4 lg:p-8 max-w-7xl mx-auto">{children}</div>
        </main>
      </SidebarProvider>
    </SessionProvider>
  );
}
