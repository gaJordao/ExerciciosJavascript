const resultado = document.querySelector('#resultado')
let somaCubos = 0;

for (let i = 1; i <= 10; i++) {
    somaCubos += Math.pow(i, 3);
    let li = document.createElement('li')
    li.innerHTML = somaCubos
    resultado.appendChild(li)
}

