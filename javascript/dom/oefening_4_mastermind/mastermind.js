
let pogingen = 0;
let randomGetallen = [];
let ingevoerdeGetallen = [];

window.addEventListener('load', function(){    
    spelOpnieuw();  
});

function spelOpnieuw(){
    for(let teller = 0; teller < 4; teller++) {
        let numbers = Math.floor(Math.random() * 10);
        randomGetallen.push(numbers)};
    console.log(randomGetallen);
    ingevoerdeGetallen = document.getElementsByClassName("ingevoerd_getal");
    speelVeld();
};

function speelVeld(){
    let invoer = '<input class="ingevoerd_getal" type="text"></input>';
    let resultaat = "";
    for (let teller = 0; teller < 4; teller++) {
         resultaat+= invoer;
    }
    resultaat += '<button id="controlleer" onclick="controleerPoging()">✓</button>';
    document.getElementById('nieuwe_poging').innerHTML = resultaat;
}

function controleerPoging(){
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
function maakOnbruikbaar(){
    document.getElementById("controlleer").disabled = true;
};