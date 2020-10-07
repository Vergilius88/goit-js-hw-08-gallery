"use strict";

import data from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");

const createImageElement = (data) => {
  const imagesListItem = document.createElement("li");
  imagesListItem.classList = "gallery__item";

  const imagesLink = document.createElement("a");
  imagesLink.classList = "gallery__link";
  imagesLink.href = data.original;

  const imagesElem = document.createElement("img");
  imagesElem.classList = "gallery__image";
  imagesElem.src = data.preview;
  imagesElem.alt = data.description;
  imagesElem.dataset.href = data.original;

  imagesLink.appendChild(imagesElem);
  imagesListItem.appendChild(imagesLink);

  return imagesListItem;
};

const galleryItemAccumulator = data.map((data) => createImageElement(data));

galleryRef.append(...galleryItemAccumulator);
