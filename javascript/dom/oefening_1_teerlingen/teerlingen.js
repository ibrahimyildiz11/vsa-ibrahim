

window.addEventListener('load', function(){
    document.getElementById("rol_teerlingen").addEventListener('click', function() {
          let aantal = document.getElementById("aantal_teerlingen").value;
          let teerlingen = maakTeerlingen(aantal);
          document.getElementById("teerlingen").innerHTML =teerlingen; 
        });
      });




function maakTeerlingen (aantal) {
    let boodschap = "";

    for (let teller=1; teller<=aantal; teller++) {
        boodschap+= rolTeerlingen ();
    }

    return boodschap;
}

function rolTeerlingen() {
    let random_ogen = Math.floor(Math.random() * 6 + 1);
    let ogen = "";

    for (let teller = 0; teller < random_ogen; teller++) {
        ogen+= '<span class="oog"></span>'
    }
    let teerling = '<div class="teerling">' + ogen + '</div>';
    return teerling;
}



