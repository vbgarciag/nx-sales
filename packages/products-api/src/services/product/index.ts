import { createProductsDataClient } from '@sales/products-data-client';

export const getProducts = async () => {
  const productsDataClient = createProductsDataClient();
  const products = await productsDataClient.getProducts();
  return products;
}

export const getProductById = async (id: string) => {
  const productsDataClient = createProductsDataClient();
  const product = await productsDataClient.getProductById(id);
  return product;
}