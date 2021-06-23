const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2MjEzNjI0MTAsImlzcyI6IlpUVXR6Y0F6TG9SUyIsImlhdCI6MTYyMTMyNjQxMH0.1igp5QxFnfIUQ0F0Ui__wAJ0J1zkbbLhpwxoUyrI6Nk";
const project = "ZTUtzcAzLoRS";
const endpoint = "https://dwapi.dev/item"; 

let huidige_cursist_actie;
let huidige_cursist_id;
let huidige_filter_waardes = []; //1 of meerdere
let huidige_sorteer_waarde = ["naam", "ASC"]; //enkel 1

window.addEventListener('load', function(){
    toonCursist();
    document.getElementById('save').onclick = () =>{
        cursistToevoegen();
        
    }
    
    eventListenersVoorStatischeElementen();
});

//CURSISTEN TONEN
function toonCursist() {
    let read_parameters = {
            "endpoint": endpoint,
            "project": project,
            "entity": "Cursist",
            "filter": huidige_filter_waardes, // array met 1 of meerdere array's (veld naam, operator, waarde)
            "sort": huidige_sorteer_waarde,  // array met 2 elementen (veld naam, richting)

        };

    let read_request = dwapiRead(read_parameters);
    read_request.then(data => {
        console.log(data);
        
        let cursist_html =  "<table>";
        data.result.items.forEach(function(rij) {
            cursist_html += "<tr><td>" + rij.Naam + "</td><td>" + rij.Adres + "</td><td>" + 
            "<button type='button' class='btn' data-mdb-toggle='modal' data-mdb-target='#cursistModal'><i class='fas fa-edit' aria-hidden='true'></i></button><button type='button'  class='btn btn-primary' data-mdb-toggle='modal' data-mdb-target='#cursistVerwijderenModal'><i class='fa fa-trash' aria-hidden='true'></i></button></td></td></tr>";
        });
        cursist_html += "</table>";

        document.getElementById("cursist").innerHTML = cursist_html;
    });
}

//NIEUWE CURSIST TOEVOEGEN
function cursistToevoegen(naam,adres){
    naam= document.getElementById("naam").value;
    adres= document.getElementById("adres").value;
    let values = {"Naam": naam, "Adres": adres};

    let create_parameters = {
        "endpoint": endpoint,
        "project": project,
        "entity": "Cursist",
        "values": values,
        "token": token

    };

let create_request = dwapiCreate(create_parameters);
create_request.then(data => {
    console.log(data);
    
    let cursist_html =  "<table>";
    cursist_html += "<tr><td>" + naam + "</td><td>" + adres + "</td><td>"+ "<button type='button' class='btn' data-mdb-toggle='modal' data-mdb-target='#cursistModal'><i class='fas fa-edit' aria-hidden='true'></i></button><button type='button'  class='btn btn-primary' data-mdb-toggle='modal' data-mdb-target='#cursistVerwijderenModal'><i class='fa fa-trash' aria-hidden='true'></i></button></td></td></tr></td></tr>";
    cursist_html += "</table>";


    document.getElementById("cursist").innerHTML += cursist_html;
});
};

//CURSIST VERWIJDEREN
function cursistVerwijderen(cursist_id) {
    // INVOER
    let parameters = {
        "endpoint": endpoint, 
        "project": project,
        "token": token, 
        "entity": "Cursist",
        "filter": ["id", "=", cursist_id]}

    // VERWERKING
    dwapiDelete(parameters).then(
        resultaat => {
            //verwerkResultaatNaProductActie(resultaat, "modal_product_verwijderen");
        }
    )
}


function cursistenSorteren(link_object) {

    // INVOER
    let sorteer_op = link_object.dataset.sorteerOp;  //naame of prijs
    console.log(sorteer_op);
    // VERWERKING    
    let sorteer_richting = "ASC";
    if (huidige_sorteer_waarde[0] == sorteer_op && huidige_sorteer_waarde[1] == "ASC") {
        sorteer_richting = "DESC";
    }
    
    huidige_sorteer_waarde = [sorteer_op, sorteer_richting];    //name /prijex, asc/desc
    
    // UITVOER
    toonCursist();
    toonSorteerRichting();
}

function toonSorteerRichting() {
    // De arrow-up en arrow-down class van alle sorteer links verwijderen
    let alle_sorteer_links = document.querySelectorAll('.link-cursisten-sorteren');
    for (var i = 0; i < alle_sorteer_links.length; i++) {
        let icon = alle_sorteer_links[i].getElementsByTagName("i")[0];
        icon.classList.remove("fa-arrow-up");
        icon.classList.remove("fa-arrow-down");
    }

    // Op de link van de huidige sortering de arrow-up of arrow-down class toevoegen
    let link = document.getElementById("link_sorteer_op_" + huidige_sorteer_waarde[0]);
    let icon = link.getElementsByTagName("i")[0];
    if (huidige_sorteer_waarde[1] == "ASC") {
        icon.classList.add("fa-arrow-down");
    }
    else {
        icon.classList.add("fa-arrow-up");
    }
}

function eventListenersVoorStatischeElementen() {
    let sorteer_links;
    sorteer_links = document.querySelectorAll('.link-cursisten-sorteren');
    for (var i = 0; i < sorteer_links.length; i++) {
        sorteer_links[i].addEventListener('click', function() {            
            cursistenSorteren(sorteer_links[i]);
        })
    }
}