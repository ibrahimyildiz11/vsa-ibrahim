//invoer

let e_mail = prompt("Geef een e-mail adres :")

//verwerking
let delen_at = e_mail.split("@");
let delen_punt = e_mail.split(".");
let naam = delen_at[0];
let domein = delen_at[1];
let toplevel_domein = delen_punt[1];

let plaats_at = e_mail.indexOf("@");
let plaats_punt = e_mail.indexOf(".");

// Feedback: goed Ibrahim
// Feedback: probeer nu via "let geldige_email = false" nog even om "verwerking" en 
//      "uitvoer" te scheiden
if (plaats_at>1 && plaats_at<plaats_punt+2 && e_mail.length > plaats_punt+1 ) {
    console.log("e-mail: " + e_mail);
    console.log("naam: " + naam);
    console.log("domein: " + domein);
    console.log("toplevel domein: " + toplevel_domein);
}
else {
    console.log("Ongeldig e-mail adres");
}
