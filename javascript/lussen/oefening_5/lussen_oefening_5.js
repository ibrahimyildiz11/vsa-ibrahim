// invoer
let getallen_tabel = [    
    [" 1", " 2", " 3", " 4", " 5", " 6", " 7", " 8", " 9", "10"],
    ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
    ["21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
];

let koppelteken = "-";
let uitvoer = "";
// feedback: ook hier graag een for(each) lus gebruiken
/*let lijn_een = getallen_tabel[0];
let lijn_twee = getallen_tabel[1];
let lijn_drie = getallen_tabel[2];*/

// verwerking

getallen_tabel.forEach(function(lijn){
    uitvoer+= "|" + lijn.join("|") + "|" + "\n";
})

// uitvoer
// feedack: het is dynamisch maar nog steeds is 3 niet dynamisch... wat met meer rijen?
console.log("┌" + koppelteken.repeat(uitvoer.length/3-3) + "┐");
console.log(uitvoer);
console.log("└" + koppelteken.repeat(uitvoer.length/3-3) + "┘");

// feedback: repeat() is goed, maar probeer 29 dynamisch te bepalen
/*console.log("┌" + koppelteken.repeat(29) + "┐");
console.log("|" + lijn_een.join("|")+ "|");
console.log("|" + lijn_twee.join("|")+ "|");
console.log("|" + lijn_drie.join("|")+ "|");
// feedback: repeat() is goed, maar probeer 29 dynamisch te bepalen
console.log("└" + koppelteken.repeat(29) + "┘");*/