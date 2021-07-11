/*
Traccia esercizio:
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// Recuperare elemento HTML 
var logIn = document.getElementById("log-in"); 

// Creare lista di email che hanno un permesso
var emailAllowed = ["marty55@gmail.com", "Emmett85@gmail.com", "Clara85@gmail.com", "Jenny80@gmail.com", "biff.T@gmail.com"];


// Chiedere all'utente la sua mail
var userEmail;

do {
    userEmail = prompt("Inserisci la tua e-mail").trim();
} while (!userEmail)

// controllare se la mail dell'utente rientra tra le autorizzazioni 

var isAllowed = false;

i = 0;
while (!isAllowed && i < emailAllowed.length) {
    if (userEmail === emailAllowed[i]) {
        isAllowed = true;
    }
    else {
        isAllowed;
    }
    i++
}

// Stampiamo in pagina 
if (isAllowed) {
    logIn.innerHTML = "Hai l'autorizzazione per entrare"
} else {
    logIn.innerHTML ="Non hai l'autorizzazione per entrare"
}
