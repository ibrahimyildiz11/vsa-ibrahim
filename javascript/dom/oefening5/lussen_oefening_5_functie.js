
// invoer & verwerking

function tabelMetGetallen(getallen_tabel){
    let koppelteken = "-";
    let uitvoer = "";
    getallen_tabel.forEach(function(lijn){
        uitvoer+= "|" + lijn.join("|") + "|" + "\n";
    })
    
    let aantal_streepjes = uitvoer.length/getallen_tabel.length-getallen_tabel.length;
    let streep = koppelteken.repeat(aantal_streepjes);
    let resultaat = ("┌" + streep + "┐") + "\n" + uitvoer + ("└" + streep + "┘");

    return resultaat;
}

let een_getallen_tabel = [    
    [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10"],
    ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
];

function start () {
    document.getElementById("btn_tabel").addEventListener('click' , function(){
        let resultaat = tabelMetGetallen(een_getallen_tabel);
        document.getElementById("jouw_tabel").innerHTML =  resultaat;
        //console.log(resultaat);
    })
    
}



//let een_tabel = tabelMetGetallen(een_getallen_tabel);

// uitvoer
//console.log(een_tabel);