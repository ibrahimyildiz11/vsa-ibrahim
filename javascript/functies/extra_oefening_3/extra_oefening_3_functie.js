const maanden_voluit = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
const dagen_voluit = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];

function toonDagen(jaar) {
    let dagen = "";
    for(let maand_teller = 1; maand_teller <= 12; maand_teller++) {
        let maand = new Date(jaar, maand_teller, 0);
        let dagen_in_maand = maand.getDate();
        for( let dagen_teller = 1; dagen_teller <= dagen_in_maand; dagen_teller++) {
            let dag = new Date(jaar, maand_teller - 1, dagen_teller);        
            let dag_van_week = dag.getDay();
            dagen += dagen_voluit[dag_van_week] + " " + dagen_teller + " " + maanden_voluit[maand_teller-1] + " " + jaar + "\n";
        }
    }
    return dagen;
} 

// invoer
let jaar = parseInt(prompt("Jaar?"));

// verwerking
let dagen = toonDagen(jaar);

// uitvoer
console.log(dagen);