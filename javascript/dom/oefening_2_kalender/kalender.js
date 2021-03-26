let maanden = ["Januari","Februari","Maart","April","Mei","June","Juli","Augustus","September","Oktober","November","December"]
let datum = new Date();
let jaar = datum.getFullYear();


window.onload = function(){
    document.getElementById("vorige_maand").addEventListener('click', naarVorigeMaand);
document.getElementById("volgende_maand").addEventListener('click', naarVolgendeMaand);
    toonMaand();
    };


function toonMaand(){
datum.setDate(1);
let maand = datum.getMonth();
let jaar = datum.getFullYear();
let maand_naam = maanden[maand];
//console.log("maand :"+maand+"jaar: "+jaar);
document.getElementById("label").innerHTML = (maand_naam + " " + jaar);
let toon_dagen=toonDagen();
let lege_dagen=legeDagen();
return document.getElementById("dagen").innerHTML= lege_dagen+toon_dagen;
}
function toonDagen() {
let dag="";
    let aantalDagen = new Date(datum.getFullYear(), datum.getMonth()+1,0).getDate();
    for(let teller=1; teller<=aantalDagen; teller++) {
        if (teller === new Date ().getDate && datum.getMonth === new Date().getMonth()) {
            dag += '<span class="vandaag">' +teller+'</span>';
        }
        else{
            dag += '<span> '+ teller + '</span>';
        }
       
    }
return dag;
}

function naarVolgendeMaand(){

    let volgende_maand=datum.getMonth();
let volgende_jaar=datum.getFullYear();
    if (volgende_maand==11){
        volgende_maand=0;
        volgende_jaar+=1;
    }
    else{
        volgende_maand++;
    }
datum.setMonth(volgende_maand);
datum.setFullYear(volgende_jaar);

toonMaand();
   
}

function naarVorigeMaand(){
 let vorige_maand=datum.getMonth();
let vorige_jaar=datum.getFullYear();
    if (vorige_maand==0){
        vorige_maand=11;
        vorige_jaar-=1;
    }
    else{
        vorige_maand--;
    }
datum.setMonth(vorige_maand);
datum.setFullYear(vorige_jaar);
toonMaand();
}

function legeDagen () {
let leg_dag="";
    let weekdagEerste = datum.getDay();
    for (teller =1; teller<weekdagEerste; teller++){
        leg_dag+= '<span></span>'
    }
return leg_dag;
}