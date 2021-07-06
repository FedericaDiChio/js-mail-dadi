// console.log("JS OK")

/*
Traccia esercizio:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


// Creare messaggio di negato accesso

var message = "La tua e-mail non ha l'autorizzazione per entrare";
var logIn = document.getElementById("log-in"); 

// Creare lista di email che hanno un permesso
var emailAllowed = ["marty55@gmail.com", "Emmett85@gmail.com", "Clara85@gmail.com"];
console.log(emailAllowed);


// Chiedere all'utente la sua mail
var userEmail = prompt("Inserisci la tua e-mail");
console.log(userEmail);


// controllare se la mail dell'utente rientra tra le autorizzazioni 