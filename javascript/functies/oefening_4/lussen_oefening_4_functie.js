// invoer
function rasterMaker (raster) {
    let uitvoer = "";
    raster.forEach(function(lijn) {
        uitvoer+= lijn.join("") + "\n"
    });
    return uitvoer;
}

// verwerking
let een_raster = [
    [" ", "_" ,"_"],
    [" ", "\\", " ", " ", "\\", " ", " ", " ", " ", " ", "_", " ", "_"],
    [" ", " ", "\\", "*", "*", "\\", " ", "_", "_", "_", "\\", "/", " ", "\\"],
    ["X", "*", "#", "#", "#", "#", "#", "*", "+", "^", "^", "\\", "_", "\\"],
    [" ", " ", "o", "/", "\\", " ", " ", "\\"],
    [" ", " ", " ", " ", " ", "\\", "_", "_", "\\"]
];

let resultaat = rasterMaker(een_raster);
//uitvoer
console.log(resultaat);