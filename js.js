"use strict";

const imageUrl = document.querySelector("#image").value;

document.addEventListener("DOMContentLoaded", startScript);

function startScript() {
  document.querySelector("button").addEventListener("click", loadImage);
  console.log(imageUrl);
}

function loadImage() {
  document.querySelector("img").src = imageUrl;
}
