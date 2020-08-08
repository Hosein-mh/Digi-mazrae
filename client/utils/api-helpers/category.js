import fetchHelper from './fetch-helper';

export const listCategoriesByPage = async (signal, page) => {
  const url = `/api/categories/?page=${page}`;
    const config = {
      method: 'GET',
      signal,
    };
  return await fetchHelper(fetch, url, config);
};

export const removeCategory = async (userId, categoryId) => {
  const url = `/api/categories/${userId}/${categoryId}`
  const config = {
    method: 'DELETE',
  };
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  }
};