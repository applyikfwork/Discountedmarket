import Link from 'next/link';
import {
  getProductById,
  getProducts,
  Product,
  CATEGORIES,
} from '@/lib/products';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Flame,
  Gift,
  HandCoins,
  Sparkles,
  TrendingUp,
  Box,
} from 'lucide-react';
import FeatureCards from '@/components/feature-cards';

export default function Home() {
  const products = getProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-background w-full py-20 md:py-32">
          <div className="container mx-auto text-center px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Welcome to Discounted Market
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover AI-curated products and personalized recommendations at
              unbeatable prices. We find the best, so you don't have to.
            </p>
            <Button size="lg">
              <Box className="mr-2 h-5 w-5" />
              Explore Products
            </Button>
          </div>
        </section>

        <FeatureCards />
      </main>
    </div>
  );
}