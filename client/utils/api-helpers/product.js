import fetchHelper from './fetch-helper';

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

export const getProduct = async (userId, productId) => {
  const url = `/api/categories/${productId}`;
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

export const updateProduct = async (userId, productId) => {
  const url = `/api/categories/${userId}/${productId}`;
  const config = {
    method: 'PUT',
  }
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  }
};