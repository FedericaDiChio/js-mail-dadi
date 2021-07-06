// console.log("JS OK");

/*
TRACCIA ESERCIZIO: 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
*/


// 1. Generare n. random per un giocatore e per il pc, specificando che sia da 1 a 6; 
var userGamer = Math.floor(Math.random()* 6) + 1;
var cpuGamer = Math.floor(Math.random()* 6) + 1;
console.log("Numero Gamer: ", userGamer);
console.log("Numero Cpu: ", cpuGamer);

// 2. Stabilire chi vince (ed eventuale situazione di pareggio); 

if (userGamer < cpuGamer) {
    console.log("Il computer ha vinto!")
}

else if (userGamer > cpuGamer) {
    console.log ("Gamer, hai vinto!")
}

else {
    console.log("Avete pareggiato!")
}
