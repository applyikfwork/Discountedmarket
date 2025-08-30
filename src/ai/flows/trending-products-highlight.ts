'use server';

/**
 * @fileOverview Retrieves and ranks trending discounted products using AI.
 *
 * - getTrendingProducts - A function that returns a list of trending discounted products.
 * - TrendingProduct - The product returned by the getTrendingProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TrendingProductSchema = z.object({
  productId: z.string().describe('The unique identifier of the product.'),
  name: z.string().describe('The name of the product.'),
  imageUrl: z.string().describe('The URL of the product image.'),
  discountPercentage: z.number().describe('The discount percentage of the product.'),
  trafficScore: z.number().describe('This represents the amount of traffic the product received over the past week. Higher scores indicate products with unexpectedly high traffic.'),
});

export type TrendingProduct = z.infer<typeof TrendingProductSchema>;

const GetTrendingProductsInputSchema = z.object({
  category: z.string().optional().describe('Optional category to filter trending products.'),
  limit: z.number().default(10).describe('Maximum number of trending products to return.'),
});

export type GetTrendingProductsInput = z.infer<typeof GetTrendingProductsInputSchema>;

const GetTrendingProductsOutputSchema = z.array(TrendingProductSchema);

export type GetTrendingProductsOutput = z.infer<typeof GetTrendingProductsOutputSchema>;

export async function getTrendingProducts(input: GetTrendingProductsInput): Promise<GetTrendingProductsOutput> {
  return getTrendingProductsFlow(input);
}

const shouldPromoteProduct = ai.defineTool({
  name: 'shouldPromoteProduct',
  description: 'Determines whether a product should be included in the trending products list based on its recent traffic and other factors.',
  inputSchema: TrendingProductSchema,
  outputSchema: z.boolean(),
},
async (product) => {
  // Dummy implementation, real implementation should use analytics data and AI to determine if a product is trending
  return product.trafficScore > 0.5;
});

const getTrendingProductsPrompt = ai.definePrompt({
  name: 'getTrendingProductsPrompt',
  tools: [shouldPromoteProduct],
  input: {schema: GetTrendingProductsInputSchema},
  output: {schema: GetTrendingProductsOutputSchema},
  prompt: `You are an expert at identifying trending products. Based on the product catalog data and the output of the shouldPromoteProduct tool, determine the top trending products.

  Only include products for which the shouldPromoteProduct tool returns true.

  Desired category: {{category}}
  Limit: {{limit}}`,
});


const getTrendingProductsFlow = ai.defineFlow(
  {
    name: 'getTrendingProductsFlow',
    inputSchema: GetTrendingProductsInputSchema,
    outputSchema: GetTrendingProductsOutputSchema,
  },
  async input => {
    // Dummy product data, replace with actual data source
    const products: TrendingProduct[] = [
      { productId: '1', name: 'Awesome Gadget', imageUrl: '/gadget.jpg', discountPercentage: 20, trafficScore: 0.8 },
      { productId: '2', name: 'Cool T-Shirt', imageUrl: '/tshirt.jpg', discountPercentage: 10, trafficScore: 0.6 },
      { productId: '3', name: 'Amazing Book', imageUrl: '/book.jpg', discountPercentage: 30, trafficScore: 0.4 },
      { productId: '4', name: 'Stylish Shoes', imageUrl: '/shoes.jpg', discountPercentage: 15, trafficScore: 0.7 },
      { productId: '5', name: 'Luxury Watch', imageUrl: '/watch.jpg', discountPercentage: 25, trafficScore: 0.9 },
    ];

    const trendingProducts: TrendingProduct[] = [];
    for (const product of products) {
      if (await shouldPromoteProduct(product)) {
        trendingProducts.push(product);
      }
    }

    // Apply category filter if provided
    const filteredProducts = input.category
      ? trendingProducts.filter(p => p.name.toLowerCase().includes(input.category!.toLowerCase()))
      : trendingProducts;

    // Limit the number of products returned
    return filteredProducts.slice(0, input.limit);
  }
);
