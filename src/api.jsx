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
