let n1 = Number(window.prompt("Digite o primeiro número"))
let diferencaTexto = document.querySelector('.parTexto')
let dif = n1 % 2

if (dif == 0) {
    diferencaTexto.innerHTML = `O número é par`
}else{
    diferencaTexto.innerHTML = `O número é impar`
}





