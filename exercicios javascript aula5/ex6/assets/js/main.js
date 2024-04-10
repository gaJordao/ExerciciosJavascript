let nomesArray = ['Cassio', 'Rodrigo', 'Igor', 'Ana', 'Isa', 'Pedro', 'Yuri']
const resultado = document.querySelector('#resultado')

function validarNome(){
    resultado.innerHTML = ''
    nomeInput = document.querySelector('#nomeInput').value


    for (let i = 0; i < nomesArray.length; i++) {
        if (nomeInput === nomesArray[i]) {
            resultado.innerHTML = `O Nome ${nomeInput} está na lista, e está na posição ${i+1}`
            break;
        }else{
            resultado.innerHTML = `O Nome ${nomeInput} não foi encontrado!`
            console.log(nomeInput, nomesArray[i])
        }                                                                                                                      
    }

}