
function omgekeerdWoord (woord) {
    let afteller = woord.length-1;
    let omgekeerd  = ""
    while (afteller >= 0) {
        omgekeerd += woord.charAt(afteller);
        afteller--;  
    }
    return omgekeerd;
}

function start() {
    document.getElementById("btn_omdraaien").addEventListener('click' , function() {
        woord = document.getElementById("woord").value;

        let omgekeerd = omgekeerdWoord(woord);

        document.getElementById("omgedraaid_woord").innerHTML = "Omgedraaid woord: " + omgekeerd;
    });
}
