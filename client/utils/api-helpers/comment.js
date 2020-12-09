import fetchHelper from './fetch-helper';

export const listCommentsByPage = async (signal, page, productId) => {
  const url = `/api/comments/${productId}/?page=${page}`;
    const config = {
      method: 'GET',
      signal,
    };
  return await fetchHelper(fetch, url, config);
};

export const listAllComments = async (signal, productId) => {
  const url = `/api/comments/${productId}`;
  const config = {
    method: 'GET',
    signal,
  };
  return await fetchHelper(fetch, url, config);
};

export const getCommentById = async (signal, commentId) => {
  const url = `/api/comments/${commentId}`;
  const config = {
    method: 'GET',
    signal,
  };
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  };
};

export const removeComment = async (signal, userId, commentId) => {
  const url = `/api/comments/${userId}/${commentId}`;
  const config = {
    method: 'DELETE',
    signal,
  };
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  }
};

export const updateComment = async (signal, userId, commentId) => {
  const url = `/api/comments/${userId}/${commentId}`;
  const config = {
    method: 'PUT',
    signal,
  }
  try {
    return await fetchHelper(fetch, url, config);
  } catch (error) {
    console.log(error);
  }
};