//invoer
let datum = new Date();


//verwerking

let dagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
let dd = datum.getDate();
let mm = datum.getMonth() +1;
let yyyy = datum.getFullYear();

//uitvoer
console.log("mm-dd-yyyy : " + mm + "-" + dd + "-" + yyyy);
console.log("mm/dd/yyyy : " + mm + "/" + dd + "/" + yyyy);
console.log("dd-mm-yyyy : " + dd + "-" + mm + "-" + yyyy);
console.log("dd/mm/yyyy : " + dd + "/" + mm + "/" + yyyy);
console.log("het is dag " + datum.getDay()+ " van de week");
console.log("dat is een " + dagen[datum.getDay()]);

