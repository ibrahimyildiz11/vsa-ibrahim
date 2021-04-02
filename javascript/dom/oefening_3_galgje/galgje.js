var woorden = ["appel", "peer", "ananas", "citroen", "meloen", "sinaasappel", "kiwi", "passievrucht", "aardbei", "framboos",
 "braambes", "bosbes", "kiwibes", "mango", "papaya", "banaan", "druif", "mandarijn", "vijg", "perzik", "nectarine", "pruim",
 "abrikoos", "limoen", "kers", "granaatappel", "lychee", "pompelmoes", "stekelbes"];

let randomWoord = woorden[Math.floor(Math.random() * woorden.length)];

let gekozenLetterLijst=[];


function start() {
    nieuwSpel();
}

var alfabet = "abcdefghijklmnopqrstuvwxyz".split("").map((eenletter) => 
`<button id='` + eenletter + `'onClick=kiesLetter('` + eenletter + `')>`+ eenletter + `</button>`).join("");

/* window.addEventListener("load",function(){
nieuwSpel();
}); */

function nieuwSpel(){
    randomWoord;
    toonVraagtekens();

    document.getElementById("alfabet").innerHTML = alfabet;
};



function toonVraagtekens(){
    let vraag= "";
for(let teller=1; teller <= randomWoord.length; teller++){
    vraag+='<span>?</span>';
}
document.getElementById("woord").innerHTML=vraag;
};

function kiesLetter(gekozenLetter){
    document.getElementById(gekozenLetter).setAttribute("disabled",true);
    if(randomWoord.indexOf(gekozenLetter)>-1){
        alert("ja, er is");
    }

    gekozenLetterLijst.push(gekozenLetter);
    let tonengekozenLetter = gekozenLetterLijst.join("-");
    console.log(tonengekozenLetter);
    spelGewonnen();
    spelVerloren();
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
