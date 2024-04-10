let numero = Number.parseInt(Math.random() * (10 - 1) + 1)
const p = document.querySelector('.resp')
contador = 10

function numeroPensado(){
const input = document.querySelector('#numero').value 
p.innerHTML = ''

if (contador <= 10 && contador > 1) {
    if (input == numero) {
        console.log("numero certo")
        p.innerHTML = 'Numero Certo'
    }

    else{
        console.log('numero errado'+numero)
        contador--
        p.innerHTML = `Numero Errado, Você tem ${contador} tentativas!`
    }
}else{
    p.style.color = 'red'
    p.innerHTML = 'Tentativas Esgotadas'
}

    
}




