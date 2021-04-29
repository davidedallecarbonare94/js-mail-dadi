//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

var userNumber = Math.floor(Math.random() * 7);
document.getElementById("myresult").innerHTML = userNumber;

var computerNumber = Math.floor(Math.random() * 7); 
document.getElementById("pcresult").innerHTML = computerNumber;
//N.B: meglio usare il math.ceil perchè in questo caso viene compreso anche il 0, e 0 arrotondato per essesso da 1

//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (computerNumber > userNumber) {
    document.getElementById("winner").innerHTML = "Ha vinto il pc!"
} else if (computerNumber == userNumber) {
    document.getElementById("winner").innerHTML = "Parità!"
} else 
    document.getElementById("winner").innerHTML = "Complimenti! Hai vinto!"


//correzione


