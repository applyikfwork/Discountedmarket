export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  imageUrl: string;
  imageHint: string;
  affiliateUrl: string; // Added affiliate link
  isDailyDeal?: boolean;
  isTrending?: boolean;
};

export type Category = {
  id: string;
  name: string;
  parentId?: string | null;
};
