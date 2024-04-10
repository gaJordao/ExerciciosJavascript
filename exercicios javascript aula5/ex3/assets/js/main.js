function calcularMedia(idades) {

    let soma = 0;
    for (let i = 0; i < idades.length; i++) {
        soma += idades[i];
    }
    return soma / idades.length;
}

function idadesAcimaDaMedia(idades) {

    const media = calcularMedia(idades);
    const idadesAcima = [];

    for (let i = 0; i < idades.length; i++) {
        if (idades[i] > media) {
            idadesAcima.push(idades[i]);
        }
    }

    return idadesAcima;
}

function calcularIdadesAcimaDaMedia() {

    const idadesInput = document.getElementById("idadesInput").value;
    const idadesArray = idadesInput.split(",").map(Number);

    const acimaDaMedia = idadesAcimaDaMedia(idadesArray);
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Idades acima da média: " + (acimaDaMedia.length > 0 ? acimaDaMedia.join(", ") : "Nenhuma");
}
