"use strict";

const closeBtnRef = document.querySelector(
  '.lightbox__button[data-action="close-lightbox"]'
);
const lightBoxRef = document.querySelector(".js-lightbox");
const openImageRef = document.querySelector(".lightbox__image");

const closeModal = (event) => {
  lightBoxRef.classList.remove("is-open");
  openImageRef.src = "#";
};
const showModal = (event) => {
  event.preventDefault();
  lightBoxRef.classList.add("is-open");
  openImageRef.src = event.target.dataset.href;
};

const handlerGallery = (event) => {
  if (
    event.target.classList.contains("gallery__image") && !lightBoxRef.classList.contains("is-open")
  ) {
    showModal(event);
  }
  if (
    (lightBoxRef.classList.contains("is-open") &&
      event.target === closeBtnRef) ||
    event.code === "Escape"
  ) {
    closeModal(event);
  }
};

document.addEventListener("click", handlerGallery);
document.addEventListener("keydown", handlerGallery);
