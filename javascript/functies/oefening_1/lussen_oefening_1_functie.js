// feedback: Mooi! Best de "let een_woord = ..." onderaan zetten (net voor "uitvoer")
//Invoer



//verwerking
function omgekeerdWoord (woord) {
    let afteller = woord.length-1;
    let omgekeerd  = ""
    while (afteller >= 0) {
        omgekeerd += woord.charAt(afteller);
        afteller--;  
    }
    return omgekeerd;
}

let een_woord = prompt("Geef een woord");
let resultaat = omgekeerdWoord(een_woord);

//uitvoer
console.log(resultaat);
