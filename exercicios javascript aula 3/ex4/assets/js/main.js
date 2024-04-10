const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

calcular.addEventListener('click', tabuada)

function tabuada() {
    const number = document.querySelector('#number').value
    resultado.innerHTML = ""
    for (let index = 1; index < 11; index++) {
        result = number * index
        let li = document.createElement('li')
        li.innerHTML = result
        resultado.appendChild(li)
    }
    
}