// feedback: mooi!

//invoer
let zin = prompt("Geef een zin: ");
let zin_delen = zin.split(" ");
let uitvoer = "";


//verwerking
zin_delen.forEach(function(woord){
    uitvoer+= woord[0].toUpperCase() +  woord.substring(1)  + " "
});

//uitvoer
console.log(uitvoer)

