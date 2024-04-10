let n1 = Number(window.prompt("Digite a base"))
let n2 = Number(window.prompt("Digite a altura"))

let diferencaTexto = document.querySelector('.areaTexto')

let dif = n1 * n2

diferencaTexto.innerHTML = `A área é ${dif}`

