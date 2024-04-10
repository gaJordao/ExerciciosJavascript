const resultadoElement = document.getElementById("resultado");

function verTamanho(){
    resultadoElement.innerHTML = ""
    let numerosArray = []
    const numerosInput = document.getElementById("idadesInput").value;
    numerosArray = numerosInput.split(",").map(Number)
    numerosCertos = []

    for (i in numerosArray) {
        if (!(numerosArray[i] >= 100 && numerosArray[i] <= 200)){
            resultadoElement.innerHTML = "Número inválido"
    }  else {
        numerosCertos.push(numerosArray[i]) 
        continue
    }
    }
    resultadoElement.innerHTML = "numeros: " + (numerosCertos.length > 0 ? numerosCertos.join(", ") : "Nenhum");
}