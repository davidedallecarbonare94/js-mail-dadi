//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
var userEmail = prompt("Inserisci qui la tua email")
console.log(userEmail);
var registeredEmails = ["davide.dc@gmail.com", "alessandranati@gmail.com", "fabiopacifici@gmail.com", "narutouzumaki@gmail.com", "kakashihatake@gmail.com", "gaimaito@gmail.com"]
console.log(registeredEmails);

switch (userEmail) {
    case registeredEmails[0]:
        alert("Complimenti! Ora puoi accedere al sito!")
        break;
    case registeredEmails[1]:
        alert("Complimenti! Ora puoi accedere al sito!")
        break;
    case registeredEmails[2]:
        alert("Complimenti! Ora puoi accedere al sito!")
        break;
    case registeredEmails[3]:
        alert("Complimenti! Ora puoi accedere al sito!")
        break;
    case registeredEmails[4]:
        alert("Complimenti! Ora puoi accedere al sito!")
        break;
    case registeredEmails[5]:
        alert("Complimenti! Ora puoi accedere al sito!")
            break;
    default:
        alert("Non possiedi le credenziali necessarie.")
        break;
}

//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

var userNumber = Math.floor(Math.random() * 7);
console.log(userNumber);

var computerNumber = Math.floor(Math.random() * 7); 
console.log(computerNumber);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (computerNumber > userNumber) {
    alert("Ha vinto il computer!")
} else if (computerNumber == userNumber) {
    alert("Parità! Ritenta un'altra volta!")
} else 
    alert("Complimenti! Hai vinto!")



//Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

