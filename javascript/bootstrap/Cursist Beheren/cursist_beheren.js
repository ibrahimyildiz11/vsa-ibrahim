const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2MjEzNjI0MTAsImlzcyI6IlpUVXR6Y0F6TG9SUyIsImlhdCI6MTYyMTMyNjQxMH0.1igp5QxFnfIUQ0F0Ui__wAJ0J1zkbbLhpwxoUyrI6Nk";
const project = "ZTUtzcAzLoRS";
const endpoint = "https://dwapi.dev/item"; 

window.addEventListener('load', function(){
    toonCursist();
    document.getElementById('save').onclick = () =>{
        cursistToevoegen();
        
     }
});

//CURSISTEN TONEN
function toonCursist() {
    let read_parameters = {
            "endpoint": endpoint,
            "project": project,
            "entity": "Cursist",

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
    cursist_html += "<tr><td>" + naam + "</td><td>" + adres + "</td><td>"+ "<button type='button' class='btn' data-mdb-toggle='modal' data-mdb-target='#cursistModal'><i class='fas fa-edit' aria-hidden='true'></i></button><button type='button' class='btn btn-primary' data-mdb-toggle='modal' data-mdb-target='#cursistVerwijderenModal'><i class='fa fa-trash' aria-hidden='true'></i></button></td></td></tr></td></tr>";
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