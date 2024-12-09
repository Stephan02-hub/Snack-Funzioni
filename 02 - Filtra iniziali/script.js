/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function selectNames(names, letter) {
    let selectedNames = [];
    for (let name of names) {
        if (name[0].toLowerCase() === letter.toLowerCase()) {
            selectedNames.push(name);
        }
    }
    return selectedNames;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(selectNames(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]