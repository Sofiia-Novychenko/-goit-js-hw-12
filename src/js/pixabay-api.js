//* зберігай функції для HTTP-запитів.

import axios from 'axios';

const SEARCH_URL = 'https://pixabay.com/api/';
const MY_KEY = '48325012-3ccc1b5d8b9c25a12d61b57d7';

export const fetchPhotosByQuery = (query, currentPage) => {
  const axiousParams = {
    params: {
      key: MY_KEY,
      q: query,
      page: currentPage,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get(`${SEARCH_URL}`, axiousParams);
};
