/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 
// Il principali datatypes javascript sono:

//String
let luogo = 'roma'; // Questa è una stringa (una variabile che contiene un insieme di caratteri alfanumerici)
console.log('Il tipo di dado contenuto nella variabile luogo è ' + typeof luogo); // contiene caratteri nuemerici

//Number
let numero = 10;
console.log('Il tipo di dado contenuto nella variabile numero è ' + typeof numero); 

// Boolean
let condizione = true; //
console.log('Il tipo di dado contenuto nella variabile condizione è ' + typeof condizione + 'questo tipo di variabile consente solo valori true o false che possono  essere codificati anche con 0 e 1 '); 

// Object
let persona = {
    nome: 'Andrea', 
    cognome: 'rossi'
}
console.log(persona);
console.log('Il tipo di dado contenuto nella variabile persona è ' + typeof persona);

// Date
let giorni_della_settimana = [
  'lunedi', 
  'martedi', 
  'mercoledi', 
  'giovedi', 
  'venerdi',
  'sabato',
  'domenica'
];
console.log('Il tipo di dado contenuto nella variabile giorni_della_settimana è ' + typeof giorni_della_settimana);


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Joao";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let a = 12;
let b = 20;
let c = a + b;

console.log(c);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// name = 'Lopes';


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let p = 4;
let y = p - x;
console.log(y);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John'; 

console.log(name1 != name2);

console.log(name1 == name2.toLowerCase());

