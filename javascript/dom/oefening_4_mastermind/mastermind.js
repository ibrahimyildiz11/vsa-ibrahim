
let pogingen = 0;
let randomGetallen = [];
/* feedback: moet deze variabele globaal gedefineerd worden? zie regel 17 en 35 */
let ingevoerdeGetallen = [];

window.addEventListener('load', function(){    
    spelOpnieuw();  
});

function spelOpnieuw(){
    for(let teller = 0; teller < 4; teller++) {
        let numbers = Math.floor(Math.random() * 10);
        randomGetallen.push(numbers)};
    console.log(randomGetallen);
    // feedback: dit is "input" voor de functie controleerPoging?
    ingevoerdeGetallen = document.getElementsByClassName("ingevoerd_getal");
    speelVeld();
};

/* feedback: speelVeld = nieuwePoging? */
/* feedback: functie naam en resultaat naam zijn best gelijkaardig: speelVeld =/= nieuwe_poging */
function speelVeld(){
    /* feedback: geef een input ook een id dan kan je die gebruiken om de input disablen bij maakOnbruikbaar */
    let invoer = '<input class="ingevoerd_getal" type="text"></input>';
    let resultaat = "";
    for (let teller = 0; teller < 4; teller++) {
         resultaat+= invoer;
    }
    resultaat += '<button id="controlleer" onclick="controleerPoging()">✓</button>';
    document.getElementById('nieuwe_poging').innerHTML = resultaat;
}

function controleerPoging(){
    /* feedback: zie regel 17 */
    let getallen = [];
    for(let teller = 0; teller < 4; teller++) {
        getallen.push(ingevoerdeGetallen[teller].value);
    }
    getallen = getallen.map(Number);
    controleerVierGetallen(getallen);
    if (getallen[0]==randomGetallen[0] && getallen[1]==randomGetallen[1] && getallen[2]==randomGetallen[2] && getallen[3]==randomGetallen[3]) {
        gewonnen();
    }else if(pogingen==9) {
        verloren();
    }else {
        pogingen++;
    }
    speelVeld();
    vorigePoging(getallen);
};

function controleerVierGetallen(getallen){
    console.log(ingevoerdeGetallen);
    for(let teller =0;teller<4;teller++){
        if(randomGetallen.includes(getallen[teller])){
            if(getallen[teller]==randomGetallen[teller]){
                toonBolletje("groen");
            }else{
                toonBolletje("rood");
            }
        }
        else{
            toonBolletje("grijs");
        }
    }
    document.getElementById("score").innerHTML += '<br>';
};

/* feedback: een functie is best een actie: bv. toonVorigePoging */
function vorigePoging(getallen) {
    let divVanVorigePoging = '<div class="vorige_poging">';
    for (let teller = 0; teller < 4; teller++) {
        divVanVorigePoging += '<span>'+ getallen[teller] + '</span>'
    } 
    divVanVorigePoging += '</div>';
    document.getElementById('vorige_pogingen').innerHTML += divVanVorigePoging;
}

function toonBolletje(kleur){
    let bolletje = '<span class="' + kleur + '_bolletje">•</span>';
    document.getElementById("score").innerHTML += bolletje;
};


function gewonnen(){
    document.getElementById("boodschap").innerHTML= "Proficiat, u bent gewonnen.";
    maakOnbruikbaar();
};
function verloren(){
    document.getElementById("boodschap").innerHTML= "Spijtig, u bent verloren. Correct getallen is: " + randomGetallen;
    maakOnbruikbaar();
};

/* feedback: maak wat onbruikbaar? beter maakInvoerInbruikbaar */
function maakOnbruikbaar(){
    document.getElementById("controlleer").disabled = true;
};