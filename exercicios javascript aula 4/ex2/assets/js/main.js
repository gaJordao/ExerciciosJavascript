const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

calcular.addEventListener('click',parImpar)

function parImpar(){
    const number = document.querySelector('#number').value
    let divisao = number % 2
    if (divisao == 0){
        resultado.innerHTML = 'O Número é par'
    }else{
        resultado.innerHTML = 'O Número é impar'
    }
}
