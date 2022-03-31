"use strict"; 

window.onload = main;

function main() {
    document.querySelector("#imgButton").onclick = loadImage;
    document.querySelector("#metaButton").onclick = loadMetadata;
}

function loadImage() {
    document.querySelector("#imgDiv").innerHTML = '<img src="https://raw.githubusercontent.com/nicolekaff/test/main/data/imgs/001.jpeg" alt="alt text" width="400">';
}

function loadMetadata() {
    
}