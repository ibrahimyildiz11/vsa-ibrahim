

// READ
/*
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
*/


// CREATE
/*
async function dwapiCreate(parameters) {   
    let url = parameters.endpoint + 
        "?project=" + parameters.project + 
        "&entity=" + parameters.entity;

    const response = await fetch(url, {
        method: 'POST',
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
*/

// UPDATE
/*
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
*/

// DELETE
/*
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
*/