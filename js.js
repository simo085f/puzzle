"use strict";
let container_width;
let container_height;
const imageUrl = document.querySelector("#image").value;

document.addEventListener("DOMContentLoaded", startScript);

function startScript() {
  document.querySelector("button").addEventListener("click", loadImage);
  console.log(imageUrl);
}

function loadImage() {
  document.querySelector("img").src = imageUrl;
  document.querySelector("img").onload = imageErLoaded;
  console.log("billedet bliver vist!");
}

const numOfX = document.querySelector("#x").value;
const numOfY = document.querySelector("#y").value;

function imageErLoaded() {
  document.querySelector("img").naturalWidth;
  container_width = document.querySelector("img").naturalWidth;
  container_height = document.querySelector("img").naturalHeight;
  createDropZones();
}

function createDropZones() {
  document.querySelector(
    "#container"
  ).style.gridTemplateColumns = `repeat(${numOfX}, 1fr)`;
  document.querySelector("#container").style.width = `${container_width}px`;
  document.querySelector("#container").style.height = `${container_height}px`;
  for (let y = 0; y < numOfY; y++) {
    for (let x = 0; x < numOfX; x++) {
      let piece = document.createElement("div");
      piece.style.height = container_height / numOfY + "px";
      piece.textContent = `${x}${y}`;
      piece.classList.add("piece");
      document.querySelector("#container").appendChild(piece);
    }
  }
}
