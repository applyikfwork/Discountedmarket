'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Sparkles, Zap, Gift } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Trending Now',
    description: "See what's popular right now.",
    icon: TrendingUp,
    badge: 'Hot',
    badgeVariant: 'destructive',
    href: '#',
  },
  {
    title: 'Top Offers',
    description: 'Hand-picked deals just for you.',
    icon: Sparkles,
    href: '#',
  },
  {
    title: 'Daily deals',
    description: 'Daily top latest product deals',
    icon: Zap,
    href: '#',
  },
  {
    title: 'Festival Deals',
    description: 'Special offers for the festive season.',
    icon: Gift,
    badge: 'Live',
    badgeVariant: 'outline',
    href: '#',
  },
];

export default function FeatureCards() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Link href={feature.href} key={feature.title}>
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
                {feature.badge && (
                  <Badge
                    variant={feature.badgeVariant as any}
                    className="absolute -top-3 right-4"
                  >
                    {feature.badge}
                  </Badge>
                )}
                <CardHeader className="flex flex-col items-center justify-center text-center p-8">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}