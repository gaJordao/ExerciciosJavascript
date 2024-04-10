const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

calcular.addEventListener('click',maior)

function maior(){
    const number1 = document.querySelector('#number1').value
    const number2 = document.querySelector('#number2').value
    const number3 = document.querySelector('#number3').value

    let maior = Math.max(number1, number2, number3)
    resultado.innerHTML = `O maior número é o ${maior}`
}