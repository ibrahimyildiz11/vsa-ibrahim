let fibonacci = parseInt(prompt("Hoeveel Fibonacci getallen tonen?"));

let lijst = [0,1];
let x = 2;
while (x < fibonacci) {
    lijst.push(lijst[lijst.length-1] + lijst[lijst.length-2] );
    x++;
}

console.log(lijst.join());
