import { getProductById, getDiscountedPrice } from '@/lib/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Tag } from 'lucide-react';

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const discountedPrice = getDiscountedPrice(product);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={product.imageHint}
            />
             <Badge
              variant="destructive"
              className="absolute right-4 top-4 flex items-center gap-1 text-lg"
            >
              <Tag className="h-5 w-5" />
              {product.discountPercentage}% OFF
            </Badge>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-primary">{product.category}</p>
          <h1 className="mt-2 font-headline text-4xl font-bold text-foreground">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex text-yellow-400">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 text-muted-foreground fill-muted" />
            </div>
            <span className="text-sm text-muted-foreground">(123 reviews)</span>
          </div>
          <p className="mt-6 text-lg text-foreground/80">
            {product.description}
          </p>

          <div className="mt-8 flex items-baseline gap-4">
            <span className="font-headline text-5xl font-bold text-accent">
              ${discountedPrice.toFixed(2)}
            </span>
            <span className="text-2xl text-muted-foreground line-through">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="mt-auto pt-8">
            <Button size="lg" className="w-full">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
