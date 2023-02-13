/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..*/

let area = function (l1, l2) {
    return l1 * l2;
}
console.log(area(2,3));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

let somma = function crazySum(a, b) {
    if (a == b) {
        return (a + b) * 3;
    } else {
        return a + b;}
}
console.log(somma(2,3));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

let differenza = function crazyDiff(a) {
    let risultato = a - 19;
        if (risultato > 19){
            risultato = risultato * 3;
                return risultato;
        } else {
            return risultato;
    }
}
console.log(differenza(55));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let parametro = function boundary(n) {
    if ((n >= 20 && n <= 100) || n == 400) {
        return true;
        }else {
        return false;
    }
}

console.log(parametro(400));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str){
    if(str == 'EPICODE'){
        return str;
    }else{
        if(str.substring(0,7) == 'EPICODE'){
            str=str.replace('EPICODE','');
            console.log(str);
            str = 'EPICODE' + str;
            return str;
        }
    }
}
console.log(epify('EPICODE domani'));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let risultato = function check3and7(n){
    if(n % 3 == 0) {
        return true;
    }else if(n % 7 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(risultato(88));


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let para = function reverseString(a){
    return a.split("EPICODE").reverse().join("EDOCIPE");
}
console.log(para("EPICODE"))


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function UpperFirst(text) {
    var loweredText = text.toLowerCase();
    var words = loweredText.split(" ");
    for (var a = 0; a < words.length; a++) {
        var w = words[a];

        var firstLetter = w[0];
        w = firstLetter.toUpperCase() + w.slice(1);

        words[a] = w;
    }
    return words.join(" ");
}

    console.log(UpperFirst("corso per sviluppatori front-end"));


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
    return str.slice(1, -1);
}
console.log(cutString("EPICODE"));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n){
    let num = [012345678910];
    let chars = num + n;
    let risultato = '';

    for(var i = 0; i < n; i++){
        let random = Math.floor(Math.random() * chars.length);
        risultato += chars [random];
    }
    return risultato;


}
let strin = giveMeRandom();
console.log ([strin]);
