let nomesArray = ['Cassio', 'Rodrigo', 'Igor', 'Ana', 'Isa', 'Pedro', 'Yuri'];
const resultado = document.querySelector('#resultado');
let chance = 5;

function validarNome() {
    resultado.innerHTML = '';
    let nomeInput = document.querySelector('#nomeInput').value;
    let encontrado = false;
    chance--

    for (let i = 0; i < nomesArray.length; i++) {
        if (nomeInput === nomesArray[i]) {
            resultado.innerHTML = `O Nome ${nomeInput} está na lista, e está na posição ${i}`;
            encontrado = true;
            break; 
        }
    }

    if (!encontrado) {
        if (chance >= 0) {
            resultado.innerHTML = `O Nome ${nomeInput} não foi encontrado! Você tem ${chance} chances`;
        }else{
            reload()
        }
    }
}