import { getTrendingProducts, TrendingProduct } from '@/ai/flows/trending-products-highlight';
import { getDiscountedPrice, Product } from '@/lib/products';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Star, Tag } from 'lucide-react';

const imageMap: { [key: string]: { url: string; hint: string } } = {
  '/gadget.jpg': { url: 'https://picsum.photos/seed/gadget/600/600', hint: 'modern gadget' },
  '/tshirt.jpg': { url: 'https://picsum.photos/seed/tshirt/600/600', hint: 'graphic tshirt' },
  '/book.jpg': { url: 'https://picsum.photos/seed/bookai/600/600', hint: 'book cover ai' },
  '/shoes.jpg': { url: 'https://picsum.photos/seed/shoes/600/600', hint: 'stylish shoes' },
  '/watch.jpg': { url: 'https://picsum.photos/seed/watchai/600/600', hint: 'luxury watch' },
};

function TrendingProductCard({ product }: { product: TrendingProduct & { imageUrl: string; imageHint: string } }) {
  const dummyPrice = (product.discountPercentage + 50) * 2;
  const discountedPrice = dummyPrice * (1 - product.discountPercentage / 100);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <CardHeader className="relative p-0">
      <Link href={`/products/${product.productId}`}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={600}
          className="aspect-square w-full object-cover"
          data-ai-hint={product.imageHint}
        />
      </Link>
      <Badge
        variant="default"
        className="absolute left-3 top-3 flex items-center gap-1 bg-accent text-accent-foreground"
      >
        <Star className="h-3 w-3" />
        Trending
      </Badge>
      <Badge
        variant="destructive"
        className="absolute right-3 top-3 flex items-center gap-1"
      >
        <Tag className="h-3 w-3" />
        {product.discountPercentage}% OFF
      </Badge>
    </CardHeader>
    <CardContent className="flex-1 p-4">
      <h3 className="mt-1 font-headline text-lg font-semibold">
        <Link href={`/products/${product.productId}`} className="hover:text-primary">
          {product.name}
        </Link>
      </h3>
    </CardContent>
    <CardFooter className="flex items-center justify-between p-4 pt-0">
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-accent">
          ${discountedPrice.toFixed(2)}
        </span>
        <span className="text-sm text-muted-foreground line-through">
          ${dummyPrice.toFixed(2)}
        </span>
      </div>
       <Button size="sm" variant="ghost" asChild>
          <Link href={`/products/1`}>
            View <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
    </CardFooter>
  </Card>
  );
}

export default async function TrendingProducts() {
  const trendingProducts = await getTrendingProducts({ limit: 4 });

  const productsWithRealImages = trendingProducts.map(p => ({
    ...p,
    imageUrl: imageMap[p.imageUrl]?.url || 'https://picsum.photos/600/600',
    imageHint: imageMap[p.imageUrl]?.hint || 'product',
  }));

  if (productsWithRealImages.length === 0) {
    return null;
  }
  
  return (
    <section className="my-16">
      <h2 className="mb-8 text-center font-headline text-4xl font-bold text-primary">
        Trending Discounts
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productsWithRealImages.map((product) => (
          <TrendingProductCard key={product.productId} product={product} />
        ))}
      </div>
    </section>
  );
}
