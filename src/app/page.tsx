'use client';

import { useState, useEffect } from 'react';
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Box } from 'lucide-react';
import FeatureCards from '@/components/feature-cards';
import DailyDeals from '@/components/daily-deals';
import ProductCard from '@/components/product-card';
import HeroCarousel from '@/components/hero-carousel';
import type { Product, Category } from '@/lib/types';

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, 'products');
    const unsubscribeProducts = onSnapshot(productsRef, (snapshot) => {
      const productsData: Product[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Product, 'id'>),
      }));
      setAllProducts(productsData);
      setFilteredProducts(productsData);
      setLoadingProducts(false);
    });

    const categoriesRef = collection(db, 'categories');
    const unsubscribeCategories = onSnapshot(categoriesRef, (snapshot) => {
      const categoriesData: Category[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Category, 'id'>),
      }));
      setCategories(categoriesData.sort((a, b) => a.name.localeCompare(b.name)));
      setLoadingCategories(false);
    });

    return () => {
      unsubscribeProducts();
      unsubscribeCategories();
    };
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, allProducts]);

  return (
    <>
      <section className="bg-background w-full py-12 md:py-24">
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

      <HeroCarousel />
      <FeatureCards />
      <div className="container mx-auto px-4 md:px-6">
        <DailyDeals />

        <section id="all-products" className="my-16">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="font-headline text-4xl font-bold text-primary">
              All Products
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Filter by category:</span>
              <Select
                onValueChange={setSelectedCategory}
                defaultValue="all"
                disabled={loadingCategories}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          {loadingProducts ? (
            <p>Loading products...</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
