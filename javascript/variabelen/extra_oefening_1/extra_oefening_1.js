//invoer

let a = parseInt(prompt("Gaaf lengte a: "));
let b = parseInt(prompt("Gaaf lengte b: "));
let c = parseInt(prompt("Gaaf lengte c: "))

//verwerking
let u = (a+b+c) / 2 ;

let oppervlakte = Math.sqrt((u) * (u-a) * (u-b) * (u-c)); ;

//uitvoer
console.log("De oppervlakte van de driehoek = " + oppervlakte);