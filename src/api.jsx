export const API_URL = 'https://fakestoreapi.com/products';

export function PRODUCT_GET(id) {
  return {
    url: `${API_URL}/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function PRODUCTS_GET() {
  return {
    url: `${API_URL}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}
