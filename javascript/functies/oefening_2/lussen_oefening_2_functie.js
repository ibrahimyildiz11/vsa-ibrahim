// feedback: mooi! Zelfde feedback als oefening 1
// invoer

function aantalFibonacciGetallen (getal) {
    let lijst = [0,1];
    let afteller = 2;
    while (afteller < aantal_getallen) {
    lijst.push(lijst[lijst.length-1] + lijst[lijst.length-2] );
    afteller++;
    }
    return lijst.join();
}


let aantal_getallen = parseInt(prompt("Hoeveel Fibonacci getallen tonen?"));
let resultaat = aantalFibonacciGetallen(aantal_getallen);

//uitvoer
console.log(resultaat);
