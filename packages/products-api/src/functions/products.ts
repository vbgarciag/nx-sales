import { Handler, HandlerEvent } from '@netlify/functions';
import { getProducts, getProductById } from '../services/product';

const handler: Handler = async (event: HandlerEvent) => {
  console.log('Function `products` invoked', event.httpMethod, ' - ', event.path);
  switch (event.httpMethod) {
    case 'GET':
      if (event.path === '/.netlify/functions/products') {
        const products = await getProducts();
        return {
          statusCode: 200,
          body: JSON.stringify(products),
        };
      }
      if (event.path.startsWith('/.netlify/functions/products/')) {
        const id = event.path.split('/').pop();
        const product = await getProductById(id);
        if (product == null) {
          return {
            statusCode: 404,
            body: 'Not found',
          };
        }
        return {
          statusCode: 200,
          body: JSON.stringify(product),
        };
      }
      return {
        statusCode: 404,
        body: 'Not found',
      };
    default:
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
  }
}

export { handler }