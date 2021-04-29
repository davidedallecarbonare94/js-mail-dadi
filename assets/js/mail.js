/* usando il for */

//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
var userEmail = prompt("Inserisci qui la tua email")
console.log(userEmail);
var registeredEmails = ["davide.dc@gmail.com", "alessandranati.an@gmail.com", "fabiopacifici@gmail.com", "narutouzumaki@gmail.com", "kakashihatake@gmail.com", "gaimaito@gmail.com"]
console.log(registeredEmails);
invited = false

for (var i = 0; i < registeredEmails.length; i++) {
    console.log(registeredEmails[i])
    var email = registeredEmails[i];
    if (email == userEmail) {
        invited = true;
    }
}
console.log(invited);

if (invited) {
    alert("Benvenuto! Puoi accedere al sito!");
} else {
    alert("Peccato! Non puoi accedere al sito");
}


/* correzione */

/* var user_email = prompt("Inserisci la tua email");
var email_list = ["davide.dc@gmail.com", "alessandranati.an@gmail.com", "fabiopacifici@gmail.com", "narutouzumaki@gmail.com", "kakashihatake@gmail.com", "gaimaito@gmail.com"]
var invitato = false;
var message;

for (var i = 0; i < email_list.length; i++) {
    var email = email_list[i];
    if (email == user_email) {
        invitato = true;
    }
}
console.log(invitato);

//stampa un messaggio appropriato
if (invitato) {
    message = "Benvenuto!";
} else {
    message = "Non puoi accedere al sito";
}
console.log(message);
 */
/* usando lo switch */

/* switch (userEmail) {
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
} */