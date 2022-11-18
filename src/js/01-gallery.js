// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refsGallery = document.querySelector('.gallery'); 

function createGallaryMarkup(items) { 
    return items.map( item => `
    <li>
        <a class="galleryitem" href="${item.original}"> 
            <img class="galleryimage" src="${item.preview}" alt="${item.description}" /> 
        </a> 
    </li>` ).join('');
} 
refsGallery.innerHTML = createGallaryMarkup(galleryItems);

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });