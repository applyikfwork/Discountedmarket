'use client';

import Link from 'next/link';
import {
  Home,
  Package,
  Settings,
  ShoppingBag,
  Ticket,
  Users,
  LayoutTemplate,
  Gift,
  TrendingUp,
  Award,
  BookOpen,
  UploadCloud,
  LogOut,
  SlidersHorizontal,
  Info,
  LineChart,
  Palette,
  Gavel,
  Megaphone,
  FileText,
  Send,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar';
import Logo from '@/components/logo';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAdmin, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/login');
    }
  }, [user, isAdmin, loading, router]);

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  if (loading || !isAdmin) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader>
            <div className="p-4 flex items-center gap-2">
              <Logo isAdmin />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin" isActive>
                  <Home />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/categories">
                  <SlidersHorizontal />
                  Categories
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/products">
                  <Package />
                  Products
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/bulk-upload">
                  <UploadCloud />
                  Bulk Upload
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Send />
                  Sasta Maal
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <FileText />
                  Footer Mgmt
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Megaphone />
                  Promoter Requests
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Gavel />
                  Legal Pages
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="/admin/analytics">
                  <LineChart />
                  Analytics
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Palette />
                  Theme
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton href="#">
                  <Users />
                  User Management
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout}>
                  <LogOut />
                  Logout
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1 bg-muted/40 p-4 md:p-8">{children}</main>
      </div>
    </SidebarProvider>
  );
}
