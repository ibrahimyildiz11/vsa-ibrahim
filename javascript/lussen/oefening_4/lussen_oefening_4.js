// invoer
let raster = [
    [" ", "_" ,"_"],
    [" ", "\\", " ", " ", "\\", " ", " ", " ", " ", " ", "_", " ", "_"],
    [" ", " ", "\\", "*", "*", "\\", " ", "_", "_", "_", "\\", "/", " ", "\\"],
    ["X", "*", "#", "#", "#", "#", "#", "*", "+", "^", "^", "\\", "_", "\\"],
    [" ", " ", "o", "/", "\\", " ", " ", "\\"],
    [" ", " ", " ", " ", " ", "\\", "_", "_", "\\"]
  ];
  
  // verwerking
  let lijn_een = raster[0];
  let lijn_twee = raster[1];
  let lijn_drie = raster[2];
  let lijn_vier = raster[3];
  let lijn_vijf = raster[4];
  let lijn_zes = raster[5];

  let vliegtuig_deel_een = lijn_een.join("");
  let vliegtuig_deel_twee = lijn_twee.join("");
  let vliegtuig_deel_drie = lijn_drie.join("");
  let vliegtuig_deel_vier = lijn_vier.join("");
  let vliegtuig_deel_vijf = lijn_vijf.join("");
  let vliegtuig_deel_zes = lijn_zes.join("");
  
  // uitvoer
  console.log(vliegtuig_deel_een);
  console.log(vliegtuig_deel_twee);
  console.log(vliegtuig_deel_drie);
  console.log(vliegtuig_deel_vier);
  console.log(vliegtuig_deel_vijf);
  console.log(vliegtuig_deel_zes);