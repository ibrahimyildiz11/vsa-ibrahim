// feedback: "fibonacci"? "aantal_getallen" lijkt mee beter
let aantal_getallen = parseInt(prompt("Hoeveel Fibonacci getallen tonen?"));

let lijst = [0,1];
// feedback: "x" vervangen door een nuttigere naam
let afteller = 2;
while (afteller < aantal_getallen) {
    lijst.push(lijst[lijst.length-1] + lijst[lijst.length-2] );
    afteller++;
}

console.log(lijst.join());
