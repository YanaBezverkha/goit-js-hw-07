import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const galleryImg = galleryItems
  .map(
    (img) => `<li class="gallery__item">
<a class="gallery__link" href="${img.original}">
   <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>
</li>`
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryImg);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
