//invoer
let getal = parseInt(prompt("Geef een getal: "));

let resultaat = "";

//verwerking

/*if (getal<1) {
    bericht = "Getal moet groter zijn of gelijk aan 1";
}

else if (getal >= 1 && getal <= 10) {
    bericht = "Het is een getal tussen 1 en 10";
}
else if (getal > 10 && getal <= 20) {
    bericht = "Het is een getal tussen 11 en 20";
}
else if (getal > 20 && getal <= 30) {
    bericht = "Het is een getal tussen 21 en 30";
}

else if (getal >30) {
    bericht = "Het is een getal boven 30";
} */

if (getal<1) {
    resultaat = "situatie_1";
}

else if (getal >= 1 && getal <= 10) {
    resultaat = "situatie_2";
}
else if (getal > 10 && getal <= 20) {
    resultaat = "situatie_3";
}
else if (getal > 20 && getal <= 30) {
    resultaat = "situatie_4";
}

else if (getal >30) {
    resultaat = "situatie_5";
} 

switch (resultaat) {
    case 'situatie_1':
        berichtje = "Getal moet groter zijn of gelijk aan 1";
        break;

    case 'situatie_2':
        berichtje = "Het is een getal tussen 1 en 10";
        break;

    case 'situatie_3':
        berichtje = "Het is een getal tussen 11 en 20";
        break;

    case 'situatie_4':
        berichtje = "Het is een getal tussen 21 en 30";
        break;

    default:
        berichtje = "Het is een getal boven 30";
}


//uitvoer

console.log(berichtje);




