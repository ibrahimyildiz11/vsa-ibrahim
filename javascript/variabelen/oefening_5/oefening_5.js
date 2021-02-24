//invoer
let tekst = prompt("Geef een tekst");


//verwerking
// feedback: gebruik een meerzeggende variabele naam: "woorden" is beter dan "list"
let list = tekst.split(" ");

/* feedback: plaats inhoud en variabelen en toon bij uitvoer de inhoud van de variable:
let eerste_letter = tekst.substring(0, 1);
console.log("Eerste letter:" + eerste_letter);
*/

//uitvoer
console.log("Tekst: " + tekst);
console.log("Eerste letter: " + tekst.substring(0,1));
console.log("Laatste letter: " + tekst.substring((tekst.length)-1));
console.log("Eeerste woord: " + list[0] );
console.log("Laatste woord: " + list.pop());