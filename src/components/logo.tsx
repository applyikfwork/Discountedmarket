import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Discounted Market Home">
      <span className="font-headline text-xl font-bold text-foreground">
        Discounted Market
      </span>
    </Link>
  );
}