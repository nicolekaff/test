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

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


function loadMetadata() {
    if (typeof imgA !== 'undefined' && typeof imgB !== 'undefined') {
        
        let urlA = "https://raw.githubusercontent.com/nicolekaff/test/main/data/meta/" + imgA + ".json";
        let urlB = "https://raw.githubusercontent.com/nicolekaff/test/main/data/meta/" + imgB + ".json";
        
        var json_A = JSON.parse(Get(urlA));
        var json_B = JSON.parse(Get(urlB));
        console.log("title: "+json_A.title + " artist: "+json_A.artist);
        console.log("title: "+json_B.title + " artist: "+json_B.artist);
    }
}