//invoer & verwerking
function zinMetEersteLetterUppercase(zin){
    let zin_delen = zin.split(" ");
    let uitvoer = "";
    zin_delen.forEach(function(woord){
        uitvoer+= woord[0].toUpperCase() +  woord.substring(1)  + " "
    });
    return uitvoer;
}

let een_zin = zinMetEersteLetterUppercase(prompt("Geef een zin: "));

//uitvoer
console.log(een_zin)
