/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initialsOfNames(namesArray) {
    const firstLetter = [];
    for (let i = 0; i < namesArray.length; i++) {
      firstLetter.push(namesArray[i][0]);
    }
    return firstLetter;
  }
const endInitialsOfNames = initialsOfNames(names);


// Invoca la funzione qui e stampa il risultato in console
console.log(endInitialsOfNames);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]