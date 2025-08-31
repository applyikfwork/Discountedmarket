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
import DailyDeals from '@/components/daily-deals';
import TrendingProducts from '@/components/trending-products';
import ProductCard from '@/components/product-card';

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
        <div className="container mx-auto px-4 md:px-6">
          <DailyDeals />
          <TrendingProducts />

          <section id="all-products" className="my-16">
            <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="font-headline text-4xl font-bold text-primary">
                All Products
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">
                  Filter by category:
                </span>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {CATEGORIES.map((category) => (
                      <SelectItem
                        key={category}
                        value={category.toLowerCase()}
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
