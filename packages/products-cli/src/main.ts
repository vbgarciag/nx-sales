import { createProductsDataClient } from '@sales/products-data-client';

main();

async function main() {
  const productsDataClient = createProductsDataClient();
  const id = getProductId();
  if (id != null) {
    const product = await productsDataClient.getProductById(id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    console.log(JSON.stringify(product, null, 2));
  } else {
    const products = await productsDataClient.getProducts();
    console.log(JSON.stringify(products, null, 2));
  }
}

function getProductId() {
  return process.argv[2];
}