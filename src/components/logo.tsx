import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Discounted Market Home">
      <ShoppingBag className="h-8 w-8 text-primary" />
      <span className="font-headline text-xl font-bold text-foreground">
        Discounted Market
      </span>
    </Link>
  );
}
