// Feedback: Mooi Ibrahim!
let woord = prompt("Geef een woord");

// "index" is misschien "afteller"?
let afteller = woord.length-1;
let omgekeerd  = ""



while (afteller >= 0) {
    omgekeerd += woord.charAt(afteller);
    afteller--;
    
}
console.log(omgekeerd);
