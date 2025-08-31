'use server';

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from './config';
import type { Product } from '@/lib/types';

const productsRef = collection(db, 'products');

export async function getProducts(): Promise<Product[]> {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Product)
  );
}

export async function getProductById(id: string): Promise<Product | null> {
  const productDoc = doc(db, 'products', id);
  const snapshot = await getDoc(productDoc);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() } as Product;
  }
  return null;
}

export async function addProduct(
  product: Omit<Product, 'id'>
): Promise<string> {
  const docRef = await addDoc(productsRef, product);
  return docRef.id;
}

export async function updateProduct(
  id: string,
  product: Partial<Product>
): Promise<void> {
  const productDoc = doc(db, 'products', id);
  await updateDoc(productDoc, product);
}

export async function deleteProduct(id: string): Promise<void> {
  const productDoc = doc(db, 'products', id);
  await deleteDoc(productDoc);
}
