//invoer
let tekst = prompt("Geef een tekst");


//verwerking
let list = tekst.split(" ");

//uitvoer
console.log("Tekst: " + tekst);
console.log("Eerste letter: " + tekst.substring(0,1));
console.log("Laatste letter: " + tekst.substring((tekst.length)-1));
console.log("Eeerste woord: " + list[0] );
console.log("Laatste woord: " + list.pop());