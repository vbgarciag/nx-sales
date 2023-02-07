import { createProductsDataClient } from '@sales/products-data-client';

main();

async function main() {
  const productsDataClient = createProductsDataClient();
  const id = getProductId();
  if (id != null) {
    const product = await productsDataClient.getProductById(id);
    console.log(JSON.stringify(product, null, 2));
  } else {
    const products = await productsDataClient.getProducts();
    console.log(JSON.stringify(products, null, 2));
  }
}

function getProductId() {
  return process.argv[2];
}