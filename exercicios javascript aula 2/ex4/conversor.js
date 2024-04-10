let n1 = Number(window.prompt("Digite o primeiro número"))
let diferencaTexto = document.querySelector('.conversorTexto')

let dif = (n1 *9/5)+32

diferencaTexto.innerHTML = `${n1} Graus Celsius em fahrenheit é ${dif}`

