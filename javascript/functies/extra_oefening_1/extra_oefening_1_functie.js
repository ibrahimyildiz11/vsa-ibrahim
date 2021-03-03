//invoer & verwerking
function zinMetEersteLetterUppercase(zin){
    let zin_delen = zin.split(" ");
    let eerste_letter_groot = "";
    zin_delen.forEach(function(woord){
        eerste_letter_groot+= woord[0].toUpperCase() +  woord.substring(1)  + " "
    });
    // feedback: "uitvoer" is wat algemeen.
    return eerste_letter_groot;
}

// feedback: voor nu is een_zin goed maar kan misschien iets specifieker
let een_zin_groot_eerste_letter = zinMetEersteLetterUppercase(prompt("Geef een zin: "));

//uitvoer
console.log(een_zin_groot_eerste_letter)

