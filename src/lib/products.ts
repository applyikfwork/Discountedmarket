import {Product} from './types';

// This file is now primarily for static data and helper functions,
// as real-time data is fetched directly from Firebase in the components.

export const CATEGORIES = ['Electronics', 'Fashion', 'Home', 'Books', 'Sports', 'Toys'];


// This function can still be used for calculations on the client side.
export function getDiscountedPrice(product: Product) {
    return product.price * (1 - product.discountPercentage / 100);
}
