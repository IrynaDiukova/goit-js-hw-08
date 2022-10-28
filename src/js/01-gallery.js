// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const imageContainer = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems);
imageContainer.insertAdjacentHTML('beforeend', imageMarkup);

imageContainer.addEventListener('click', onGalleryClick)

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createImageMarkup (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return`<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img 
        class="gallery__image"
        src ="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>   
        </div>`;
    })
    .join('');
}   

 
function onGalleryClick (event){
    event.preventDefault()
}




