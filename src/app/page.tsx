import Link from 'next/link';
import {
  getProductById,
  getProducts,
  Product,
  CATEGORIES,
} from '@/lib/products';
import { Button } from '@/components/ui/button';
import TrendingProducts from '@/components/trending-products';
import DailyDeals from '@/components/daily-deals';
import ProductCard from '@/components/product-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Home() {
  const products = getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16 text-center">
        <div
          className="rounded-lg bg-primary/10 p-12"
          style={{
            backgroundImage:
              'radial-gradient(circle at top right, hsl(var(--primary) / 0.1), transparent 50%), radial-gradient(circle at bottom left, hsl(var(--accent) / 0.1), transparent 50%)',
          }}
        >
          <h1 className="font-headline text-5xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
            Unbeatable Deals, Every Day
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            Discover a world of savings. We bring you the best-discounted
            products, from trending gadgets to everyday essentials.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#all-products">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#daily-deals">View Daily Deals</Link>
            </Button>
          </div>
        </div>
      </section>

      <TrendingProducts />

      <DailyDeals />

      <section id="all-products" className="my-16">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="font-headline text-4xl font-bold text-primary">
            All Products
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Filter by category:</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category.toLowerCase()}>
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
  );
}
