/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import express from 'express';
import { createProductsDataClient } from '@sales/products-data-client';

const app = express();
const productsDataClient = createProductsDataClient();

app.get('/products', async (_req, res) => {
  const products = await productsDataClient.getProducts();
  res.send(products);
});

app.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const product = await productsDataClient.getProductById(id);
  if (product == null) {
    res.status(404).send();
    return;
  }
  res.send(product);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);