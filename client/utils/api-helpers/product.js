import fetchHelper, { fetchWithFileHelpler } from './fetch-helper';
import { JsonWebTokenError } from 'jsonwebtoken';

export const listProductsByPage = async (signal, page) => {
  const url = `/api/products/?page=${page}`;
    const config = {
      method: 'GET',
      signal,
    };
  return await fetchHelper(fetch, url, config);
};

export const listAllProducts = async () => {
  const url = '/api/products/';
  const config = {
    method: 'GET',
  };
  return await fetchHelper(fetch, url, config);
};

export const getProduct = async (productId) => {
  const url = `/api/products/${productId}`;
  const config = {
    method: 'GET',
  };
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  };
};

export const removeProduct = async (userId, productId) => {
  const url = `/api/products/${userId}/${productId}`;
  const config = {
    method: 'DELETE',
  };
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (userId, productId, newProduct) => {
  const url = `/api/products/${userId}/${productId}`;
  const config = {
    method: 'PUT',
    body: JSON.stringify(newProduct),
  }
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  }
};

export const updateProductPhoto = async (userId, productId, photo) => {
  const url = `/api/products/photo/${userId}/${productId}`;
  const config = {
    method: 'PUT',
    body: photo,
  };
  try {
    return await fetchWithFileHelpler(fetch, url, config);
  } catch (error) {
    console.log(error);
  };
};