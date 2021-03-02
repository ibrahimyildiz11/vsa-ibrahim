
let priemgetal_lijst = [];

let aantal_te_tonen = 30;

for(let volgend_getal = 2; aantal_te_tonen>0; volgend_getal++){
    let niet_priemgetal = false;
    for(let deler=2; deler<volgend_getal; deler++) {
        if(volgend_getal%deler===0) {
            niet_priemgetal=true;
        }
    }
    if(niet_priemgetal===false){
        priemgetal_lijst.push(volgend_getal);
        aantal_te_tonen--;
    }
}
console.log(priemgetal_lijst);