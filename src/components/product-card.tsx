import Link from 'next/link';
import Image from 'next/image';
import { type Product, getDiscountedPrice } from '@/lib/products';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Tag } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = getDiscountedPrice(product);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="relative p-0">
        <Link href={`/products/${product.id}`}>
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
          variant="destructive"
          className="absolute right-3 top-3 flex items-center gap-1"
        >
          <Tag className="h-3 w-3" />
          {product.discountPercentage}% OFF
        </Badge>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <p className="text-sm text-muted-foreground">{product.category}</p>
        <h3 className="mt-1 font-headline text-lg font-semibold">
          <Link href={`/products/${product.id}`} className="hover:text-primary">
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
            ${product.price.toFixed(2)}
          </span>
        </div>
        <Button size="sm" variant="ghost" asChild>
          <Link href={`/products/${product.id}`}>
            View <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
