
function paswoordMaker(tekens){

    let keuze = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!?%-_&";
    let paswoord="";
    
    for (let teller=0; teller<=tekens; teller++) {
        let random = Math.floor(Math.random() * keuze.length) +1 ;
        let karakter = keuze[random-1];
        paswoord+= karakter; 
    }
    return paswoord;
}

function start () {
    document.getElementById("btn_tekens").addEventListener('click' , function(){
        let aantal = document.getElementById("aantal_tekens").value;
        let paswoord = paswoordMaker(aantal);
        document.getElementById("jouw_paswoord").innerHTML = "Jouw paswoord: " +  paswoord;
    })
}

//let aantal_tekens = parseInt(prompt("Aantal tekens?"));
//let mijn_paswoord = paswoordMaker(aantal_tekens);

//console.log(mijn_paswoord);