
// invoer

function aantalFibonacciGetallen (getal) {
    let lijst = [0,1];
    let afteller = 2;
    while (afteller < getal) {
    lijst.push(lijst[lijst.length-1] + lijst[lijst.length-2] );
    afteller++;
    }
    return lijst.join();
}

function start() {
    document.getElementById("btn_getallen").addEventListener('click' , function() {
        let getal = document.getElementById("getal").value;

        let aantal_getallen = aantalFibonacciGetallen(getal);

        document.getElementById("aantal_fibo_getallen").innerHTML = "Fibonacci getalen: " + aantal_getallen;
    });
}


//let aantal_getallen = parseInt(prompt("Hoeveel Fibonacci getallen tonen?"));
//let resultaat = aantalFibonacciGetallen(aantal_getallen);

//uitvoer
//console.log(resultaat);
