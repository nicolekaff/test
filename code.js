"use strict"; 

window.onload = main;

function main() {
    document.querySelector("#imgButton").onclick = loadImage;
    document.querySelector("#metaButton").onclick = loadMetadata;
}

function loadImage() {
    document.querySelector("#imgDiv").innerHTML = '<img src="data/imgs/001.jpeg" alt="alt text">';
}

function loadMetadata() {
    
}