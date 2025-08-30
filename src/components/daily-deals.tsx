import { getDailyDeals } from '@/lib/products';
import ProductCard from './product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function DailyDeals() {
  const dailyDeals = getDailyDeals();

  if (dailyDeals.length === 0) {
    return null;
  }

  return (
    <section id="daily-deals" className="my-16">
      <h2 className="font-headline text-4xl font-bold text-primary mb-8 text-center">
        Today's Hottest Deals
      </h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {dailyDeals.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
