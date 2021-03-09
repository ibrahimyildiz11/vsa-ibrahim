//invoer & verwerking
function zinMetEersteLetterUppercase(zin){
    let zin_delen = zin.split(" ");
    let eerste_letter_groot = "";
    zin_delen.forEach(function(woord){
        eerste_letter_groot+= woord[0].toUpperCase() +  woord.substring(1)  + " "
    });
    return eerste_letter_groot;
}

function start () {
    document.getElementById("btn_zin").addEventListener('click' , function(){
        let upperCaseZin = document.getElementById("een_zin").value;
        let resultaat = zinMetEersteLetterUppercase(upperCaseZin);
        document.getElementById("jouw_zin").innerHTML = "Jouw zin: " +  resultaat;
    })
}


//let een_zin_groot_eerste_letter = zinMetEersteLetterUppercase(prompt("Geef een zin: "));

//uitvoer
//console.log(een_zin_groot_eerste_letter)

