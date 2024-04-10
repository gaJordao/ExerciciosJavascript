const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

calcular.addEventListener('click',quadrado)

function quadrado(){
    const number = document.querySelector('#number').value
    let quadrado = number * number
    resultado.innerHTML = `${number} ² = ${quadrado}`
}
