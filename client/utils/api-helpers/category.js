import fetchHelper from './fetch-helper';

export const listCategoriesByPage = async (signal, page) => {
  const url = `/api/categories/?page=${page}`;
    const config = {
      method: 'GET',
      signal,
    };
  return await fetchHelper(fetch, url, config);
};

export const listAllCategories = async () => {
  const url = '/api/categories/';
  const config = {
    method: 'GET',
  };
  return await fetchHelper(fetch, url, config);
};

export const getCategory = async (userId, categoryId) => {
  const url = `/api/categories/${categoryId}`;
  const config = {
    method: 'GET',
  };
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  };
};

export const removeCategory = async (userId, categoryId) => {
  const url = `/api/categories/${userId}/${categoryId}`;
  const config = {
    method: 'DELETE',
  };
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  }
};

export const updateCategory = async (userId, categoryId) => {
  const url = `/api/categories/${userId}/${categoryId}`;
  const config = {
    method: 'PUT',
  }
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  }
};