//Variabili
let newOp
let symbol = false
let error

//Funzione 
function writeToOutput(element) {
  if (document.getElementById('output').innerHTML == 'ERROR') {
    console.log('errore')
    document.getElementById('output').innerHTML = ''

  }
  if (symbol == true && element == '*' || symbol == true && element == '/' || symbol == true && element == '+' || symbol == true && element == '-') {
    document.getElementById('output').innerHTML = 'ERROR'
    symbol = false
  }
  else {
    if (element == '*' || element == '/' || element == '+' || element == '-') {
      newOp = false
      symbol = true
    }
    if (newOp == true) {
      document.getElementById('output').innerHTML = ''
      document.getElementById('output').innerHTML += element
      newOp = false
    }
    else {
      document.getElementById('output').innerHTML += element
    }
  }
  console.log(symbol)
  console.log(newOp)
}

//Resultato
function showResults() {
  newOp = true
  symbol = false
  let result = eval(document.getElementById('output').innerHTML)
  console.log(result)
  console.log(typeof result)


  if (isNaN(result) == true) {
    document.getElementById('output').innerHTML = 'ERROR'
  }
  else {
    document.getElementById('output').innerHTML = result
  }
}

function deleteOutput() {
  document.getElementById('output').innerHTML = ''
} 
// Fine


//Collor Flipper - Extra
const colorsArray = ['red','rgb(28, 26, 32)', 'orange', 'yellow', 'green', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colorsArray [randomNumber];
  color.innerHTML = colorsArray [randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colorsArray.length);
  ;
}
