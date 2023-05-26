import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const galleryMarkUp = galleryItems
  .map(
    (img) => `<li class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${img.preview}"
    data-source="${img.original}"
    alt="${img.description}"
  />
</a>
</li> `
  )
  .join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkUp);

galleryEl.addEventListener("click", onOpenImg);

function onOpenImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modalImg = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${modalImg}" width="800" height="600">`,
    {
      onShow: () => {document.addEventListener("keydown", onCloseModal)},
      onClose: () => {document.removeEventListener("keydown", onCloseModal)}
    }
  );
  instance.show();
  function onCloseModal(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
