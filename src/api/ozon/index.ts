import axios from 'axios';
import { ProductItem, ProductList } from './types';

export const getProductList = () =>
  axios
    .post<{ result: { items: ProductList[] } }>(
      `https://api-seller.ozon.ru/v2/product/list`,
      {},
      {
        headers: {
          'Api-Key': '2694611d-d97d-4d92-8a4c-79665c3a3c4b',
          'Client-Id': '1401256',
        },
      }
    )
    .then((res) => res.data.result.items);

export const getProductListInfo = (offerIds?: string[], productIds?: number[]) =>
  axios.post<{ result: { items: ProductItem[] } }>(
    `https://api-seller.ozon.ru/v2/product/info/list`,
    { offer_id: offerIds, product_id: productIds },
    {
      headers: {
        'Api-Key': '2694611d-d97d-4d92-8a4c-79665c3a3c4b',
        'Client-Id': '1401256',
      },
    }
  );
