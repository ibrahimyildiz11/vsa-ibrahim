let url = "https://dwapi.dev/item?project=LluG3gwZKPzC&entity=Werken";

window.onload = function(){
    experiment();
};

async function experiment(){
    let x = await fetch(url);
    let y = await x.json();
    let z = y.result.items;
    z.forEach(item=>{
        console.log(item.Titel);
        console.log(item.auteur_id);
    });
    console.log(z);
};

