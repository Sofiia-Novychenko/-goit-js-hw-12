//* створи функції для відображення елементів інтерфейсу.
export const createGalleryCardTemplate = arr => {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
			class="gallery-img" 
			src="${webformatURL}" 
			alt="${tags}" 
			/>
	</a>
    <ul class="gallery-info-list">
                    <li class="info-list-item">
                        <h2 class="info-list-title">Likes:</h2>
                        <p class="info-list-text">${likes}</p>
                    </li>
                    <li class="inform-item">
                        <h2 class="info-list-title">Views:</h2>
                        <p class="info-list-text">${views}</p>
                    </li>
                    <li class="info-list-item">
                        <h2 class="info-list-title">Comments:</h2>
                        <p class="info-list-text">${comments}</p>
                    </li>
                    <li class="info-list-item">
                        <h2 class="info-list-title">Downloads:</h2>
                        <p class="info-list-text">${downloads}</p>
                    </li>
                </ul>
    </li>
    `
    )
    .join('');
};
