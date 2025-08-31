import Link from 'next/link';
import { Twitter, Facebook, Instagram, Send } from 'lucide-react';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3 space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Discounted Market is your one-stop shop for the best deals on the
              internet, curated with the power of AI to bring you savings you
              can trust.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Daily Deals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Trending
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Search
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-headline font-semibold text-foreground mb-4">
              Connect With Us
            </h3>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-3">
             <h3 className="font-headline font-semibold text-foreground mb-4">
              Promote Your Brand
            </h3>
             <Button>
              <Send className='mr-2 h-4 w-4' />
              Partner With Us</Button>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Discounted Market. All Rights Reserved.</p>
          <p>As an affiliate, we may earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  );
}
