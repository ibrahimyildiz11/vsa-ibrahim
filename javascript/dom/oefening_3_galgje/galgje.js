var woorden = ["appel", "peer", "ananas", "citroen", "meloen", "sinaasappel", "kiwi", "passievrucht", "aardbei", "framboos",
 "braambes", "bosbes", "kiwibes", "mango", "papaya", "banaan", "druif", "mandarijn", "vijg", "perzik", "nectarine", "pruim",
 "abrikoos", "limoen", "kers", "granaatappel", "lychee", "pompelmoes", "stekelbes"];

var letter = "abcdefghijklmnopqrstuvwxyz";

window.addEventListener("load",function(){
nieuwSpel();
});

function nieuwSpel(){
    toonVraagtekens();
};

function toonVraagtekens(){

};

function kiesLetter(){
    spelGewonnen();
    spelGewonnen();
};

function spelGewonnen(){
    //maakLetterOnbruikbar();
};
 
function spelVerloren(){
    //maakLetterOnbruikbar();
};

function maakLetterOnbruikbar(){
    document.getElementById("alfabet").disabled = true;

};
