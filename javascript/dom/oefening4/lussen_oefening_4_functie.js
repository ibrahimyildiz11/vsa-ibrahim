// invoer



function rasterMaker (raster) {
    let uitvoer = "";
    raster.forEach(function(lijn) {
        uitvoer+= lijn.join("") + "</br>"
    });
    return uitvoer;
}

let een_raster = [
    [" ", "_" ,"_"],
    [" ", "\\", " ", " ", "\\", " ", " ", " ", " ", " ", "_", " ", "_"],
    [" ", " ", "\\", "*", "*", "\\", " ", "_", "_", "_", "\\", "/", " ", "\\"],
    ["X", "*", "#", "#", "#", "#", "#", "*", "+", "^", "^", "\\", "_", "\\"],
    [" ", " ", "o", "/", "\\", " ", " ", "\\"],
    [" ", " ", " ", " ", " ", "\\", "_", "_", "\\"]
];

function start () {
    document.getElementById("btn_vliegtuig").addEventListener('click' , function(){
        let resultaat = rasterMaker(een_raster);
        document.getElementById("jouw_raster").innerHTML =  resultaat;
    })
}

// verwerking


//let resultaat = rasterMaker(een_raster);
//uitvoer
//console.log(resultaat);