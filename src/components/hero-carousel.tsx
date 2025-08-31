
'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  {
    image: 'https://picsum.photos/seed/carousel1/1200/500',
    imageHint: 'electronics sale',
    title: 'Up to 50% Off Electronics',
    description: 'Grab the latest gadgets at unbeatable prices.',
    buttonText: 'Shop Now',
    buttonLink: '#',
  },
  {
    image: 'https://picsum.photos/seed/carousel2/1200/500',
    imageHint: 'fashion collection',
    title: 'New Fashion Collection',
    description: 'Upgrade your style with our latest arrivals.',
    buttonText: 'Explore',
    buttonLink: '#',
  },
  {
    image: 'https://picsum.photos/seed/carousel3/1200/500',
    imageHint: 'home decor',
    title: 'Home Decor Essentials',
    description: 'Beautify your living space with our exclusive collection.',
    buttonText: 'Discover',
    buttonLink: '#',
  },
];

export default function HeroCarousel() {
  return (
    <section className="w-full container mx-auto my-8">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="overflow-hidden">
                <CardContent className="relative p-0 flex items-center justify-center h-[500px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    data-ai-hint={slide.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 text-center text-white p-8">
                    <h2 className="text-4xl md:text-6xl font-bold font-headline">
                      {slide.title}
                    </h2>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <Button size="lg" className="mt-8">
                      {slide.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
      </Carousel>
    </section>
  );
}
