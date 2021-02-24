// Feedback: mooi resultaat 
//invoer
let getallen = prompt("Geef twee getallen gescheiden door een ','");

//verwerking
// feedback: "nummers" is niet slecht, "twee_getallen" is misschien nog iets duidelijker?
nummers = getallen.split(",");

let getal_1 = nummers[0];
let getal_2 = nummers[1];

let situatie = "";

if((getal_1 < 10 || getal_1 > 20) || (getal_2 < 10 || getal_2 > 20 )) {
    situatie = "getal 1 of getal 2 niet tussen 10 en 20"
}

else {
    situatie = "getal 1 en getal 2 tussen 10 en 20"
}
//uitvoer

console.log("getal 1: " + getal_1);
console.log("getal 2: " + getal_2);
console.log(situatie);