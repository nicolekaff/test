"use strict"; 

window.onload = main;

function main() {
    document.querySelector("#imgButton").onclick = loadImages;
    document.querySelector("#metaButton").onclick = loadMetadata;
}

function loadImages() {
    let randA = Math.floor(Math.random() * (4-1)+ 1);
    let randB = Math.floor(Math.random() * (4-1)+ 1);
    while (randA === randB) {
        randB = Math.floor(Math.random() * (4-1)+ 1);
    }
    
    let codeA = '<img src="https://raw.githubusercontent.com/nicolekaff/test/main/data/imgs/00' + String(randA) + '.jpeg">';
    console.log(codeA);
    let codeB = '<img src="https://raw.githubusercontent.com/nicolekaff/test/main/data/imgs/00' + String(randB) + '.jpeg">';
    console.log(codeB);
    
    document.querySelector("#imgA").innerHTML = codeA;
    document.querySelector("#imgB").innerHTML = codeB;
}

function loadMetadata() {
    
}