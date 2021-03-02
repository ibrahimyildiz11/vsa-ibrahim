// invoer
let getallen_tabel = [    
    [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10"],
    ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
];

let koppelteken = "-";
let lijn_een = getallen_tabel[0];
let lijn_twee = getallen_tabel[1];
let lijn_drie = getallen_tabel[2];

// verwerking

// uitvoer
console.log("┌" + koppelteken.repeat(29) + "┐");
console.log("|" + lijn_een.join("|")+ "|");
console.log("|" + lijn_twee.join("|")+ "|");
console.log("|" + lijn_drie.join("|")+ "|");
console.log("└" + koppelteken.repeat(29) + "┘");