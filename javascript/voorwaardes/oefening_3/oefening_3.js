//invoer

let e_mail = prompt("Geef een e-mail adres :")

//verwerking
let delen_at = e_mail.split("@");
let delen_punt = e_mail.split(".");
let naam = delen_at[0];
let domein = delen_at[1];
let toplevel_domein = delen_punt[1];

//uitvoer
if (e_mail.includes("@") && e_mail.includes(".")) {
    console.log("e-mail: " + e_mail);
    console.log("naam: " + naam);
    console.log("domein: " + domein);
    console.log("toplevel domein: " + toplevel_domein);
}
else {
    console.log("Ongeldig e-mail adres");
}
