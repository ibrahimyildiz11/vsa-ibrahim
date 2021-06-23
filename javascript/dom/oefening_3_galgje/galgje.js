var woorden = ["appel", "peer", "ananas", "citroen", "meloen", "sinaasappel", "kiwi", "passievrucht", "aardbei", "framboos",
 "braambes", "bosbes", "kiwibes", "mango", "papaya", "banaan", "druif", "mandarijn", "vijg", "perzik", "nectarine", "pruim",
 "abrikoos", "limoen", "kers", "granaatappel", "lychee", "pompelmoes", "stekelbes"];


let woord;

let gekozenLetterLijst=[];

let beurt = 0;


function nieuwSpel(){
    woord = woorden[Math.floor(Math.random() * woorden.length)];
    toonVraagtekens();


    var alfabet = "abcdefghijklmnopqrstuvwxyz".split("").map((eenletter) => 
    `<button id='` + eenletter + `'onClick=kiesLetter('` + eenletter + `')>`+ eenletter + `</button>`).join("");
    
    document.getElementById("alfabet").innerHTML = alfabet;
};



function toonVraagtekens(){
    let vraag= "";
for(let teller=1; teller <= woord.length; teller++){
    vraag+='<span id="letter_' + (teller) + '">?</span>';
}
document.getElementById("woord").innerHTML=vraag;
};

function kiesLetter(gekozenLetter){
    document.getElementById(gekozenLetter).setAttribute("disabled",true);
    if(woord.indexOf(gekozenLetter)>=0){
        vulLettersIn(gekozenLetter);
        document.getElementById("letter_" + (teller+1)).innerHTML = gekozenLetter;
        // letter(s) tonen
        // wanneer alle letters getoond zijn => spelGewonnen
    }
    else{
        beurt++;
        if(beurt==6){
            spelVerloren();
        }
    }
    console.log(beurt);

    gekozenLetterLijst.push(gekozenLetter);
    let tonengekozenLetter = gekozenLetterLijst.join("-");
    console.log(tonengekozenLetter);
    //spelGewonnen();
    //spelVerloren();
};
function vulLettersIn(gekozen_letter) {
    for (let letter_teller=0; letter_teller< woord.length; letter_teller++) {
        if (woord[letter_teller] == gekozen_letter) {
            //letters_gevonden++;
            document.getElementById("letter_" +(letter_teller+1)).innerHTML = gekozen_letter;
        }
    }
}

function spelGewonnen(){
 document.getElementById("resultaat").innerHTML= "Proficiat, u bent gewonnen.";
    maakLettersOnbruikbaar();
};
 
function spelVerloren(){
    document.getElementById("resultaat").innerHTML= "Spijtig, u bent verloren."
    maakLettersOnbruikbaar();
};

function maakLettersOnbruikbaar(){
    for(let i=0;i<26;i++){

    document.getElementById(`${i}`).disabled = true;
}
};
