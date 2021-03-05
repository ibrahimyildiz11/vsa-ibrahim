// feedback: al mooi, probeer je nog even te controlleren of een random karakter al in het paswoord zit?

function paswoordMaker(tekens){
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
    return paswoord;
}

let aantal_tekens = parseInt(prompt("Aantal tekens?"));
let mijn_paswoord = paswoordMaker(aantal_tekens);

console.log(mijn_paswoord);