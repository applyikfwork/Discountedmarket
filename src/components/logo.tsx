import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Logo({ isAdmin = false }: { isAdmin?: boolean }) {
  return (
    <Link
      href={isAdmin ? '/admin' : '/'}
      className="flex items-center gap-2"
      aria-label="Discounted Market Home"
    >
      {isAdmin && <Shield className="h-6 w-6 text-primary" />}
      <span className="font-headline text-xl font-bold text-foreground">
        {isAdmin ? 'Admin' : 'Discounted Market'}
      </span>
    </Link>
  );
}
