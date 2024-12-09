/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const hour = 16;
const greeting = getGreeting(name, hour);
console.log(greeting);
function getGreeting(name, hour) {
    if (hour < 17) {
        return `Buon pomeriggio ${name}`;
        }
}

// Dichiara la funzione qui.
function getGreeting(name, hour) {
    if (hour < 17) {
        return `Buon pomeriggio ${name }`;
    }
}


// Invoca la funzione qui e stampa il risultato in console
console.log(greeting);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.