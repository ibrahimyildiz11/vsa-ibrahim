
/*
let kleine_letter = "abcdefghijklmnopqrstuvwxyz";
let hofd_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let cijfers = "1234567890";
let symbool = "-&%$!-|*";
*/




/*function paswoordControl () {
    let cijfers = 0;
    let hofd_letter = 0;
    let kleine_letter = 0;

    let pas_length = paswoord.length;
    let last_karakter = paswoord[pas_length-1];

    for (let teller =1; teller<= pas_length; teller++ ) {
        let a = paswoord[pas_length-1];
        if (a>='0' && a<='9') {
            cijfers++;
        }
        if(a>='A' && a<='Z') {
            hofd_letter++;
        }
        if(a>='a' && a<='z') {
            kleine_letter++;
        }
    }

    if (cijfers>0 && hofd_letter>0 && kleine_letter>0) {
        let resultaat_juist = "Geldig paswoord"
        return resultaat_juist;
    }
    else {
        let resultaat_fout = "fout"
        return resultaat_fout;
    }
}
let pas = paswoordControl(paswoord);

console.log(pas); */


let paswoord= prompt("Paswoord?");
function paswoordControl () {
    let symbool = "-&%$!-|*";

    let fout = new Array();

    if(paswoord.length<10) {
        console.log("Paswoord moet minstens 10 karakter tellen.")
    }

    for (let teller =0; teller<paswoord.length; teller++) {
        if(symbool.indexOf(paswoord.charAt(teller))== -1) {
            fout.push("Een geldig paswoord moet minstens 1 symbool bevatten (-&%$!-|*)")
            break;
        }
    }

    if (paswoord.search(/[a-z]/) < 0) {
        fout.push("Een geldig paswoord moet minstens 1 kleine letter bevatten (a-z)");
    }
    else if (paswoord.search(/[A-Z]/) <0) {
        fout.push("Een geldig paswoord moet minstens 1 hoofdletter bevatten (A-Z)")
    }
    else if (paswoord.search(/[0-9]/) <0) {
        fout.push("Een geldig paswoord moet minstens 2 cijfers bevatten (0-9)")
    }

    if(fout.length>0) {
        let resultaat = fout.join("\n");
        return resultaat;
    }
    else {
        let resultaat_twee = "Geldig paswoord";
        return resultaat_twee;
    }
}

let pas = paswoordControl(paswoord);
console.log(pas); 

