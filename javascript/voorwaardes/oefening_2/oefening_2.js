// Feedback: goed gedaan Ibrahim!
//invoer
let getal = parseInt(prompt("Geef een getal: "));



//verwerking


// feedback: deze is goed, ik zou hier wel meteen de variabele "berichtje" een waarde geven
let berichtje = "";

if (getal<1) {
    berichtje = "Getal moet groter zijn of gelijk aan 1";
}
// feedback: in binnen het "else" onderdeel kan de switch komen om de voorwaardes te controleren
// feedback: probeer switch (true) { }

else {
    switch (true) {
        case (getal >= 1 && getal <= 10):
            berichtje = "Het is een getal tussen 1 en 10";
            break;
        
        case (getal > 10 && getal <= 20):
            berichtje = "Het is een getal tussen 11 en 20";
            break;
        
        case (getal > 20 && getal <= 30):
            berichtje = "Het is een getal tussen 21 en 30";
            break;
    
        default:
            berichtje = "Het is een getal boven 30"; 
            break;
    }
}


//uitvoer

console.log(berichtje);




