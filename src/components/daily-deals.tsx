'use client';

import { useState, useEffect } from 'react';
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import ProductCard from './product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Product } from '@/lib/types';

export default function DailyDeals() {
  const [dailyDeals, setDailyDeals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where('isDailyDeal', '==', true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dealsData: Product[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Product, 'id'>),
      }));
      setDailyDeals(dealsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <section id="daily-deals" className="my-16">
        <h2 className="font-headline text-4xl font-bold text-primary mb-8 text-center">
          Today's Hottest Deals
        </h2>
        <p className="text-center">Loading today's deals...</p>
      </section>
    );
  }

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
