
let priemgetal_lijst = [];


let teller = 2;
let aantal_te_tonen = 30;

while (aantal_te_tonen>0) {

    for(let deler=2; aantal_te_tonen>0; deler++){
        if (teller % deler ==0){
            continue;
        }
        else{
            priemgetal_lijst.push(teller);
            aantal_te_tonen--;
            break;
        }
    }
    teller++;


  /*  if (teller % deler ==0) {
        teller++;
        deler++;
        continue;
    }
    else{
        priemgetal_lijst.push(teller);
        teller++;
    }*/
} 
console.log(priemgetal_lijst);