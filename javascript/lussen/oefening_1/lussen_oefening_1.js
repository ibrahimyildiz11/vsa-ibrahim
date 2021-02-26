let woord = prompt("Geef een woord");

let index = woord.length-1;
let omgekeerd  = ""



while (index >= 0) {
    omgekeerd += woord.charAt(index);
    index--;
    
}
console.log(omgekeerd);
