// Feedback: Mooi Ibrahim!
let woord = prompt("Geef een woord");

// "index" is misschien "afteller"?
let index = woord.length-1;
let omgekeerd  = ""



while (index >= 0) {
    omgekeerd += woord.charAt(index);
    index--;
    
}
console.log(omgekeerd);
