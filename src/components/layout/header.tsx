'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, LogOut } from 'lucide-react';
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

export default function Header() {
  const { user, isAdmin, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="/"
              className="transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#daily-deals"
              className="transition-colors hover:text-primary"
            >
              Deals
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className="transition-colors hover:text-primary"
              >
                Admin
              </Link>
            )}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="relative hidden w-full max-w-sm md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
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
          </div>
        </div>
      </div>
    </header>
  );
}
