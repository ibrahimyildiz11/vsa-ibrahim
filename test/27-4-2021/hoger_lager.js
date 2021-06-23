

let minimumGetal = 0;
let maximumGetal = 0;
let randomGetallen = [];
let poging = 0;



//start het spel bij het drukken op de knop van start spel
function start(){
    spelVeld();
    startSpel();
};

//om spel veld te vernieuwen
function spelVeld(){
    minimumGetal = 0;
    maximumGetal = 0;
    randomGetallen = [];
    poging = 0;
    document.getElementById("boodschap").innerHTML= "";
    document.getElementById("controleer_hoger").disabled = false;
    document.getElementById("controleer_lager").disabled = false;
};
function startSpel(){
    minimumGetal = document.getElementById("minimum_getal").value;
    maximumGetal = document.getElementById("maximum_getal").value;
    maakRandomGetallen(minimumGetal, maximumGetal)

    for(let teller = 0; teller < 5; teller++) {
        var html = "";
        for (let letter_teller=0; letter_teller< 5; letter_teller++) {
            html += '<span id="cijfer_' + (letter_teller + 1) + '">?</span>';
        }
        document.getElementById("cijfers").innerHTML = html;
        
    }
    //om eerste cijfer te tonen
    document.getElementById("cijfer_1").innerHTML = randomGetallen[0];

    //om te contreleeren
    console.log(minimumGetal);
    console.log(maximumGetal);
};

//om 5 random getallen te maken

function maakRandomGetallen(minimumGetal, maximumGetal){
    for(let teller = 0; teller < 5; teller++) {
        let numbers = Math.floor(Math.random() * (maximumGetal - minimumGetal) ) + minimumGetal;
        randomGetallen.push(numbers)};
    console.log(randomGetallen);
    
}

//werkt bij het indrukken van de hoger knop
function controleerHoger(){
    poging++;
    if(randomGetallen[poging-1] < randomGetallen[poging]){
        document.getElementById("cijfer_" + (poging+1)).innerHTML = randomGetallen[poging];
        if(poging==4){
            gewonnen();
        }
    }
    else {
        var element = document.getElementById("cijfer_" + (poging+1));
        element.classList.add("rood")
        document.getElementById("cijfer_" + (poging+1)).innerHTML = randomGetallen[poging];
        verloren();
    }
};

//werkt bij het indrukken van de lager knop
function controleerLager(){
    poging++;
    if(randomGetallen[poging-1] > randomGetallen[poging]){
        document.getElementById("cijfer_" + (poging+1)).innerHTML = randomGetallen[poging];
        if(poging==4){
            gewonnen();
        }
    }
    else {
        var element = document.getElementById("cijfer_" + (poging+1));
        element.classList.add("rood")
        document.getElementById("cijfer_" + (poging+1)).innerHTML = randomGetallen[poging];
        verloren();
    }

};


function gewonnen(){
    document.getElementById("boodschap").innerHTML= "Proficiat! U bent gewonnen." ;
    
    maakOnbruikbaar();
};

function verloren(){
    document.getElementById("boodschap").innerHTML= "Spijtig, u bent verloren." ;

    maakOnbruikbaar();
};

function maakOnbruikbaar(){
    document.getElementById("controleer_hoger").disabled = true;
    document.getElementById("controleer_lager").disabled = true;
};