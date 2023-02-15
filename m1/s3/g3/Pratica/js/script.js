
let arrTask = [];

class Attivita {
    constructor(_nome) {
        this.nome = _nome;
        this.isCompleta = false;
    }

    aggiungiTask() {
        let inputTask = document.querySelector('#to-do');
        let task = new Attivita(inputTask.value);
        arrTask.push(task);
        console.log(arrTask);
        inputTask.value = '';
        let div = document.createElement('div');
        div.textContent = task.nome;
        let button = document.createElement('button'); 
        button.textContent = 'Rimuovi Task'; 
        button.setAttribute('onClick', 'rimuoviTask(this.parentNode)'); 
        div.appendChild(button); 
        document.querySelector('.task').appendChild(div);
    }
}

function aggiungiTask() {
    let attivita = new Attivita();
    attivita.aggiungiTask();
}

function rimuoviTask(div) {
    div.remove(); 
  }
