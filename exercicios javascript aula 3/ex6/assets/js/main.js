const result = document.querySelector('#resultado')
const button = document.querySelector('#button')

button.addEventListener('click', calcularFatorial)

function calcularFatorial() {
    const numero = document.querySelector('#number').value
    result.innerHTML = ""
    if (numero === 0 || numero === 1) {
        result.innerHTML = 1
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        let li = document.createElement('li')
        li.innerHTML = resultado
        result.appendChild(li)
    }
}

