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

      piece.dataset.xyid = `id${x}${y}`;
      piece.classList.add("dropzone");
      document.querySelector("#container").appendChild(piece);
    }
  }

  for (let y = 0; y < numOfY; y++) {
    for (let x = 0; x < numOfX; x++) {
      let piece = document.createElement("div");
      piece.style.width = container_width / numOfX + "px";
      piece.style.height = container_height / numOfY + "px";
      piece.style.backgroundImage = `url(${imageUrl})`;
      piece.dataset.xyid = `id${x}${y}`;
      piece.classList.add("piece");
      piece.style.backgroundPosition = `${(x * container_width) /
        numOfX}px ${(y * container_height) / numOfY}px`;

      document.querySelector("#pieceContainer").appendChild(piece);
    }
  }
  dragPieces();
}

document.querySelectorAll(".piece").draggable = "true";
let dragged;

function dragPieces() {
  console.log("hej");
  document.addEventListener("drag", function(event) {});

  document.addEventListener("dragstart", function(event) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = 0.5;
  });
  document.addEventListener("dragend", function(event) {
    // reset the transparency
    event.target.style.opacity = "";
  });
  /* events fired on the drop targets */
  document.addEventListener("dragover", function(event) {
    // prevent default to allow drop
    event.preventDefault();
  });

  document.addEventListener("drop", function(event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    console.log("DROP", event.target.className);
    // move dragged elem to the selected drop target
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
      dragged.style.left = event.target.style.left;
      dragged.style.top = event.target.style.top;
    } else if (event.target.className == "theBody") {
      // park the dragged elem somewhere on the body
      dragged.style.left = event.pageX + "px";
      dragged.style.top = event.pageY + "px";
    }
  });
  randomPieces();
}

function randomPieces() {
  document.querySelectorAll(".piece").forEach(piece => {
    piece.style.left = `${Math.random() * 300 + 350}px`;
  });
}
