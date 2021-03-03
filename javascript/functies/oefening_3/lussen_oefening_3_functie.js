// feedback: "tonen" in een functie doet vermoeden dat je ook iets toont... 
function priemgetalTonen(aantal_te_tonen) {
    let priemgetal_lijst = [];
    for(let volgend_getal = 2; aantal_te_tonen>0; volgend_getal++){
        let priemgetal = true;
        for(let deler=2; deler<volgend_getal; deler++) {
            if(volgend_getal%deler===0) {
                priemgetal=false;
            }
        }
        if(priemgetal===true){
            priemgetal_lijst.push(volgend_getal);
            aantal_te_tonen--;
        }
    }
    return priemgetal_lijst;
}

let resultaat = priemgetalTonen(50);
console.log(resultaat);