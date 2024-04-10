function criarVetorC() {
    const inputA = document.getElementById('vetorA').value.trim();
    const inputB = document.getElementById('vetorB').value.trim();
    const vetorA = inputA.split(',').map(Number);
    const vetorB = inputB.split(',').map(Number);

    if (vetorA.length !== 5 || vetorB.length !== 5) {
        alert('Por favor, insira 5 números inteiros separados por espaço para ambos os vetores A e B.');
        return;
    }

    const vetorC = [];

    for (let i = 0; i < 5; i++) {
        vetorC.push(vetorA[i]);
        vetorC.push(vetorB[i]);
    }

    document.getElementById('resultado').innerHTML = `
        <p>Vetor C: [${vetorC.join(', ')}]</p>
    `;
}