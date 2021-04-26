//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

var userNumber = Math.floor(Math.random() * 7);
document.getElementById("myresult").innerHTML = userNumber;

var computerNumber = Math.floor(Math.random() * 7); 
document.getElementById("pcresult").innerHTML = computerNumber;


//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (computerNumber > userNumber) {
    document.getElementById("winner").innerHTML = "Ha vinto il pc!"
} else if (computerNumber == userNumber) {
    document.getElementById("winner").innerHTML = "Parità!"
} else 
    document.getElementById("winner").innerHTML = "Complimenti! Hai vinto!"

//Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

