// invoer
let getallen_tabel = [    
    [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10"],
    ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
];

let koppelteken = "-";
let uitvoer = "";

// verwerking
getallen_tabel.forEach(function(lijn){
    uitvoer+= "|" + lijn.join("|") + "|" + "\n";
})

let aantal_streepjes = uitvoer.length/getallen_tabel.length-getallen_tabel.length;
let streep = koppelteken.repeat(aantal_streepjes);

// uitvoer
console.log("┌" + streep + "┐");
console.log(uitvoer);
console.log("└" + streep + "┘");