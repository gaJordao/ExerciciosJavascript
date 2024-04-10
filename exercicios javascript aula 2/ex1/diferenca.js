let n1 = Number(window.prompt("Digite o primeiro número"))
let n2 = Number(window.prompt("Digite o segundo número"))
let diferencaTexto = document.querySelector('.diferencaTexto')

let dif = n1 / n2

diferencaTexto.innerHTML = `A diferença entre os dois números é ${dif}`

