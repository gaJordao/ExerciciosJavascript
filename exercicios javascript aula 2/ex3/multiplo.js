let n1 = Number(window.prompt("Digite o primeiro número"))
let n2 = Number(window.prompt("Digite o segundo número"))
let diferencaTexto = document.querySelector('.multiploTexto')

let dif = n1 % n2

if (dif == 0) {
    diferencaTexto.innerHTML = `O ${n1} é multiplo de ${n2}`
}else{
    diferencaTexto.innerHTML = `O ${n1} não é multiplo de ${n2}`
}



