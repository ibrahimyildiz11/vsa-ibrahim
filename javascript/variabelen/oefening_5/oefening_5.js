//invoer
let tekst = prompt("Geef een tekst");


//verwerking

// feedback: gebruik een meerzeggende variabele naam: "woorden" is beter dan "list"
let woorden = tekst.split(" ");


/* feedback: plaats inhoud en variabelen en toon bij uitvoer de inhoud van de variable:
let eerste_letter = tekst.substring(0, 1);
console.log("Eerste letter:" + eerste_letter);
*/
let eerste_letter = tekst.substring(0,1);
let laatste_letter = tekst.substring((tekst.length)-1);
let eerste_woord = woorden[0];
let laatste_woord = woorden[woorden.length-1];


//uitvoer
console.log("Tekst: " + tekst);
console.log("Eerste letter: " + eerste_letter);
console.log("Laatste letter: " + laatste_letter);
console.log("Eeerste woord: " + eerste_woord);
console.log("Laatste woord: " + laatste_woord);



