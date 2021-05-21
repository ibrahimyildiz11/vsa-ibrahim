const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2MjEzNjI0MTAsImlzcyI6IlpUVXR6Y0F6TG9SUyIsImlhdCI6MTYyMTMyNjQxMH0.1igp5QxFnfIUQ0F0Ui__wAJ0J1zkbbLhpwxoUyrI6Nk";
const project = "ZTUtzcAzLoRS";
const endpoint = "https://dwapi.dev/item"; 

window.addEventListener('load', function(){
    toonCursist();
    document.getElementById('save').onclick = () =>{
        cursistToevoegen();
        
     }
});



//READ
async function dwapiRead(parameters) {   
    let url = parameters.endpoint + 
        "?project=" + parameters.project + 
        "&entity=" + parameters.entity;
    
    if (typeof parameters.filter !== "undefined") {
        url = url + "&filter=" + encodeURIComponent(JSON.stringify(parameters.filter))
    }

    let response = await fetch(url, {
        method: 'GET'
    });

    return response.json()
        .then(data => {             
            return data; 
        });
} 

// CREATE
async function dwapiCreate(parameters) {   
    let url = parameters.endpoint + 
        "?project=" + parameters.project + 
        "&entity=" + parameters.entity;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify(parameters.values)
    });

    return response.json()
        .then(data => {             
            return data; 
        }); 
}

// UPDATE
async function dwapiUpdate(parameters) {   
    let url = parameters.endpoint + 
        "?project=" + parameters.project + 
        "&entity=" + parameters.entity + 
        "&filter=" + encodeURIComponent(JSON.stringify(parameters.filter));

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parameters.token,
        },
        body: JSON.stringify(parameters.values)
        
    });

    return response.json()
        .then(data => {             
            return data; 
        }); 
}


// DELETE
async function dwapiDelete(parameters) {   
    let url = parameters.endpoint + 
        "?project=" + parameters.project + 
        "&entity=" + parameters.entity;
 
    const response = await fetch(url, {
        method: 'DELETE',
        mod: 'cors',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parameters.token,
        },
        body: JSON.stringify({"filter": parameters.filter})
    }); 

    return response.json()
        .then(data => {             
            return data; 
        }); 
}

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
function verwijderenCursist() {
    let read_parameters = {
            "endpoint": endpoint,
            "project": project,
            "entity": "Cursist",
            "values": values,
            "token": token

        };

    let read_request = dwapiDelete(parameters);
        request.then(data => {
        console.log(data);
        });
}




