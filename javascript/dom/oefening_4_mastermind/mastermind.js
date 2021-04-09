
let foute_pogingen = 0;

let randomGetallen;
let ingevoerdeGetallen;
let vorige_ingevoerde_getallen = [];


/*function start(){ 
    spelOpnieuw();
    //document.getElementById("controlleer").addEventListener('click', controleerPoging());
};*/

window.addEventListener('load', function(){
    spelOpnieuw();
    
});

function spelOpnieuw(){
    randomGetallen = Math.floor(Math.random() * (9999 - 1000) ) + 1000;
    console.log(randomGetallen);
    

    //reset speelveld
    document.getElementById('nieuwe_poging').innerHTML = '';
    document.getElementById('vorige_pogingen').innerHTML = '';
    document.getElementById('score').innerHTML = '';
    document.getElementById('boodschap').innerHTML = '';

    ingevoerdeGetallen = document.getElementsByClassName("ingevoerd_getal");
    vorige_ingevoerde_getallen = ingevoerdeGetallen;
    console.log(ingevoerdeGetallen);
    console.log(vorige_ingevoerde_getallen);
    let text = '<input class="ingevoerd_getal" type="text"></input>';
    let resultaat = "";
    for (let teller = 0; teller < 4; teller++) {
         resultaat+= text;
    }
    resultaat += '<button id="controlleer" onclick="controleerPoging()">✓</button>';
    document.getElementById('nieuwe_poging').innerHTML = resultaat;
};

function controleerPoging(){
    controleerVierGetallen(randomGetallen, ingevoerdeGetallen);
    /*if (vierBolletjesGroen){
        gewonnen();
    }else if(foute_pogingen==10){
        verloren();
    }else{
        foute_pogingen++;
    }  */
};

function controleerVierGetallen(randomGetallen, ingevoerdeGetallen){
    randomGetallen = randomGetallen.toString();
    ingevoerdeGetallen = ingevoerdeGetallen.toString();
    for(let teller =0;teller<4;teller++){
        if(ingevoerdeGetallen.charAt(teller)===randomGetallen.charAt(teller)){
            toonBolletje("groen");
            //console.log(y.charAt(teller) + " groen")
        }else if(ingevoerdeGetallen.includes(randomGetallen[teller])){
            toonBolletje("rood");
            //console.log(y.charAt(teller)+ " rood")
        }else if(ingevoerdeGetallen.includes(randomGetallen[teller])!==true){
            toonBolletje("grijs");
            //console.log(y.charAt(teller)+ " grijs")
        }  
    }

};

function toonBolletje(kleur){
    let bolletje = '<span class="' + kleur + '_bolletje">•</span>';
    document.getElementById("score").innerHTML = bolletje;

    /*switch(kleur) {
        case groen:
            bolletje+= '<span class="groen_bolletje">•</span>';
            document.getElementById("score").innerHTML = bolletje;
          break;

        case rood:
            bolletje += '<span class="rood_bolletje">•</span>';
            document.getElementById("score").innerHTML = bolletje;
          break;

        case grijs:
            bolletje += '<span class="grijs_bolletje">•</span>';
            document.getElementById("score").innerHTML = bolletje;
          break;

        default:
      } */
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
    document.getElementById("speelveld").disabled = true;
};
