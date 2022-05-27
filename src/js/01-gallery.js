// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
                 <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
                     <img
                         class="gallery__image"
                         src="${preview}"
                         alt="${description}"
                         title="${description}"
                     />
                 </a>
`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
