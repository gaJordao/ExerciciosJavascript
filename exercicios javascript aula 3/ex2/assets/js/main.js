const enviar = document.querySelector('#enviar')
const resultado = document.querySelector('#resultado')

enviar.addEventListener('click', random)

function random() {
    event.preventDefault();
    const select = document.querySelector('#select').value
    console.log(select)
    lista = ['pedra', 'papel', 'tesoura']
    let sorteado = Math.floor(Math.random() * 3)
    if (select === lista[sorteado]) {
        resultado.innerHTML = `Empate <br>Você jogou ${select}<br> e a máquina jogou ${lista[sorteado]}`
        resultado.style.color = 'orange'
      } else if (
        (select === 'pedra' && lista[sorteado] === 'tesoura') ||
        (select === 'papel' && lista[sorteado] === 'pedra') ||
        (select === 'tesoura' && lista[sorteado] === 'papel')
      ) {
        resultado.innerHTML = `Você Ganhou <br>Você jogou ${select}<br>A máquina jogou ${lista[sorteado]}`
        resultado.style.color = 'green'
      } else {
        resultado.innerHTML = `Você Perdeu <br>Você jogou ${select}<br>A máquina jogou ${lista[sorteado]}`
        resultado.style.color = 'red'
      }
    
}

