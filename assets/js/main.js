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
