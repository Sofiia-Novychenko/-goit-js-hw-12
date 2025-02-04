import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchPhotosByQuery } from './js/pixabay-api.js';
import { createGalleryCardTemplate } from './js/render-functions.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.js-load-more');

let page = 1;
let userInputValue = ' ';
//* аби і в OnSearchFormSubmit і в OnSearchFormSubmit передавалось одне пошукове слово
let per_page = 15;

loader.style.display = 'none';

// ініціалізація модального вікна галереї
const galleryModal = new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  className: 'simple-lightbox',
});

const OnSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    userInputValue = event.currentTarget.elements.user_query.value.trim();

    galleryEl.innerHTML = ' ';

    if (userInputValue === '') {
      iziToast.warning({
        title: 'Caution',
        message: 'You forgot important data',
        position: 'topRight',
      });

      return;
    }

    loader.style.display = 'block';

    // * аби запит йшов за першою групою і кнопка ще не показувалась
    page = 1;
    loadMoreBtn.classList.add('is-hidden');

    const { data } = await fetchPhotosByQuery(userInputValue, page);

    if (data.total === 0) {
      loader.style.display = 'none';

      iziToast.error({
        title: '',
        messageColor: '#FFFFFF',
        messageSize: 16,
        messageLineHeight: 1.5,
        backgroundColor: '#EF4040',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });

      galleryEl.innerHTML = ' ';
      searchFormEl.reset();
      return;
    }

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCardTemplate(data.hits)
    );

    galleryModal.refresh();

    //* окреме приховування кнопки, коли по запиту знайдено меньше 15 зображень і навпаки
    if (data.hits.length < per_page) {
      loadMoreBtn.classList.add('is-hidden');
    } else {
      loadMoreBtn.classList.remove('is-hidden');
    }

    loader.style.display = 'none';

    event.target.reset();
  } catch (err) {
    loader.style.display = 'block';

    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
    });
    console.error('An error occurred:', err.message);

    loader.style.display = 'none';
  }
};

const onLoadBtnClick = async event => {
  try {
    page++;

    loader.style.display = 'block';

    const { data } = await fetchPhotosByQuery(userInputValue, page);

    galleryEl.insertAdjacentHTML(
      'beforeend',
      createGalleryCardTemplate(data.hits)
    );

    galleryModal.refresh();

    // * перевірка кінця колекції

    if (page * per_page >= data.totalHits || data.hits.length < per_page) {
      loadMoreBtn.classList.add('is-hidden');

      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results",
      });
    }

    loader.style.display = 'none';

    // * реалізація повільного прокручення
    const galleryItemEL = document.querySelector('.gallery-item');
    const cardHeight = galleryItemEL.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    loader.style.display = 'block';

    iziToast.error({
      message: 'Something went wrong, please try again later.',
      position: 'topRight',
    });
    console.error('An error occurred:', err.message);

    loader.style.display = 'none';
  }
};

searchFormEl.addEventListener('submit', OnSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadBtnClick);
