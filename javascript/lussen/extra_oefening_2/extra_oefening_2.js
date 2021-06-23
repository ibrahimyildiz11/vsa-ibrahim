let tekens = parseInt(prompt("Aantal tekens?"));
if(tekens<4){
    tekens= parseInt(prompt("Geef tekens groter dan 4:"));
}

let keuze = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?%-_&";
let paswoord="";

for (let teller=0; teller<=tekens; teller++) {
    let random = Math.floor(Math.random() * keuze.length) +1 ;
    let karakter = keuze[random-1];
    paswoord+= karakter; 
}

console.log(paswoord);