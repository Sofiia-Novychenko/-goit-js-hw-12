//* зберігай функції для HTTP-запитів.

const SEARCH_URL = 'https://pixabay.com/api/';
const MY_KEY = '48325012-3ccc1b5d8b9c25a12d61b57d7';

export const fetchPhotosByQuery = query => {
  const params = new URLSearchParams({
    key: MY_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${SEARCH_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
