function dividirVetor() {
    const numInput = document.getElementById('numInput').value.trim();
    const numeros = numInput.split(',').map(Number);

    if (numeros.length !== 6) {
        alert('Por favor, insira 6 números inteiros separados por espaço.');
        return;
    }

    const vetorA = [];
    const vetorB = [];

    for (let i = 0; i < 6; i++) {
        vetorA.push(numeros[i]);
        vetorB.push(numeros[i] / 2);
    }

    document.getElementById('resultado').innerHTML = `
        <p>Vetor A: [${vetorA.join(', ')}]</p>
        <p>Vetor B: [${vetorB.join(', ')}]</p>
    `;
}