const maanden_voluit = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
const dagen_kort = ["ma", "di", "wo", "do", "vr", "za", "zo"];

function bouwHoofding() {
    // verwerking
    let hoofding = "";
    dagen_kort.forEach(function(dag_kort) {
        hoofding += " " + dag_kort;
        if (dag_kort != "zo") { hoofding += " |"; }
    });

    // uitvoer
    return hoofding;
}

function bouwKalender() {
    // verwerking
    let kalender = "";
    let dagen_in_maand = new Date(jaar, maand, 0).getDate();

    for( let dag_nummer = 1; dag_nummer <= dagen_in_maand; dag_nummer++) {
        let dag_van_week = new Date(jaar, maand-1, dag_nummer).getDay();
        if (dag_van_week == 0) { dag_van_week = 7; }
        
        // wanneer 1ste dag van de maand eventueel "dag_van_week - 1" lege dagen toevoegen
        if (dag_nummer == 1) {   
            for(let teller = 0; teller < dag_van_week - 1; teller++) {
                kalender += " ".repeat(5);            
            }
        }

        if (dag_nummer < 10) { kalender += " "; }
        kalender += " " + dag_nummer + " ";
        if (dag_van_week < 7 && dag_nummer < dagen_in_maand) { kalender += "|";  }
        if (dag_van_week == 7) { kalender += "\n"; }
    }

    // uitvoer
    return kalender;
}

// invoer
let jaar = parseInt(prompt("Jaar?"));
let maand = parseInt(prompt("Maand (1-12)?"));

let uitvoer = maanden_voluit[maand - 1] + " " + jaar + "\n\n";
uitvoer += bouwHoofding() + "\n" + bouwKalender();

// uitvoer
console.log(uitvoer);