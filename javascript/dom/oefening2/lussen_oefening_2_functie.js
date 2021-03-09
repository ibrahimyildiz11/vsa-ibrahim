
// invoer

function fibonacciGetallen (getal) {
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
        // feedback: getal = aantal?
        let aantal = document.getElementById("getal").value;

        // feedback: aantal_getallen = getallen? 
        // feedback: aantalFibonacciGetallen = fibonacciGetallen?
        let getallen = fibonacciGetallen(aantal);

        document.getElementById("aantal_fibo_getallen").innerHTML = "Fibonacci getalen: " + getallen;
    });
}


//let aantal_getallen = parseInt(prompt("Hoeveel Fibonacci getallen tonen?"));
//let resultaat = aantalFibonacciGetallen(aantal_getallen);

//uitvoer
//console.log(resultaat);
