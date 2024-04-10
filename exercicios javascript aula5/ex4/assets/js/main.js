function lerNumeros(){
    let idadesArray = []
    const numerosInput = document.getElementById("idadesInput").value;
    idadesArray = numerosInput.split(",").map(Number)
    idadesPares = []

    for (i in idadesArray) {
        if (idadesArray[i] % 2 == 0 ){
            idadesPares.push(idadesArray[i])
    }  else continue
    }

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "numeros pares: " + (idadesPares.length > 0 ? idadesPares.join(", ") : "Nenhum");    

}