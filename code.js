"use strict"; 

window.onload = main;
let imgA;
let imgB;

function main() {
    document.querySelector("#imgButton").onclick = loadImages;
    document.querySelector("#metaButton").onclick = loadMetadata;
}

function loadImages() {
    // Generate random images
    let randA = Math.floor(Math.random() * (4-1)+ 1);
    let randB = Math.floor(Math.random() * (4-1)+ 1);
    while (randA === randB) {
        randB = Math.floor(Math.random() * (4-1)+ 1);
    }
    imgA = "00" + String(randA);
    imgB = "00" + String(randB);
    
    // Format HTML
    let codeA = '<img src="https://raw.githubusercontent.com/nicolekaff/test/main/data/imgs/' + imgA + '.jpeg">';
    console.log(codeA);
    let codeB = '<img src="https://raw.githubusercontent.com/nicolekaff/test/main/data/imgs/' + imgB + '.jpeg">';
    console.log(codeB);
    
    // Update HTML
    document.querySelector("#imgA").innerHTML = codeA;
    document.querySelector("#imgB").innerHTML = codeB;
}

// loadJSON method to open the JSON file.
// Source: https://www.educative.io/edpresso/how-to-read-a-json-file-from-a-url-in-javascript
function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      }
      else {
        error(xhr);
      }
    }
  };
  xhr.open('GET', path, true);
  xhr.send();
}

function processJSON(Data) {
    console.log(Data[0]);
}

function loadMetadata() {
    if (typeof imgA !== 'undefined' && typeof imgB !== 'undefined') {
        let urlA = "https://raw.githubusercontent.com/nicolekaff/test/main/data/meta/" + imgA + ".json";
        let urlB = "https://raw.githubusercontent.com/nicolekaff/test/main/data/meta/" + imgB + ".json";
        
        loadJSON(urlA, processJSON,'jsonp');
        loadJSON(urlB, processJSON,'jsonp'); 
    }
}