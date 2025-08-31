'use client';

import Link from 'next/link';
import { Search, User, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/components/logo';
import { useAuth } from '@/hooks/use-auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/navigation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const { user, isAdmin, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const navLinks = (
    <>
      <Link href="/daily-deals" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Daily Deals
      </Link>
      <Link href="/festival-deals" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Festival
      </Link>
      <Link href="/trending" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Trending
      </Link>
      <Link href="/offers" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Offers
      </Link>
      <Link href="/deals" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Sasta Maal
      </Link>
       {isAdmin && (
          <Link
            href="/admin"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Admin
          </Link>
        )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <div className="mr-6 hidden md:flex">
          <Logo />
        </div>
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full rounded-full bg-muted pl-10"
            />
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex ml-6">
          {navLinks}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="User Account">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                    <AvatarFallback>{user.displayName?.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/profile')}>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="ghost" size="icon" asChild aria-label="User Account">
              <Link href="/login">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          )}
           <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="p-4">
                    <Logo />
                </div>
              <nav className="grid gap-6 text-lg font-medium p-4">
                {navLinks}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
