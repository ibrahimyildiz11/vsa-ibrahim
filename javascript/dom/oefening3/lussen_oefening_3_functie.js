//invoer
function aantalPriemgetallen(aantal_priemgetallen) {
    let priemgetal_lijst = [];
    for(let volgend_getal = 2; aantal_priemgetallen>0; volgend_getal++){
        let priemgetal = true;
        for(let deler=2; deler<volgend_getal; deler++) {
            if(volgend_getal%deler===0) {
                priemgetal=false;
            }
        }
        if(priemgetal===true){
            priemgetal_lijst.push(volgend_getal);
            aantal_priemgetallen--;
        }
    }
    return priemgetal_lijst;
}

function start () {
    document.getElementById("btn_priemgetal").addEventListener('click' , function(){
        let aantal = document.getElementById("priemgetal").value;
        let aantal_getallen = aantalPriemgetallen(aantal);
        document.getElementById("jouw_priemgetallen").innerHTML =  "Jouw priemgetallen is: " + aantal_getallen;
    })
}

//let resultaat = priemgetalTonen(50);
//console.log(resultaat);