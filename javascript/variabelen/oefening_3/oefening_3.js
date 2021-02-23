//invoer
let bestandsNaam = prompt("Bestandsnaam?");


//verwerking
let deel = bestandsNaam.split(".");

//uitvoer

console.log("De extensie van bestandsnaam " +"'"+ bestandsNaam  + "' = '" + deel.pop() +"'" );