resultado = document.getElementById("resultados")
function calcularDobro() {
    var valoresInput = document.getElementById("valores").value;
    var valores = valoresInput.split(',').map(function(item) {
      return parseInt(item.trim(), 10);
    });
  
    var resultados = "";
  
    for (var i = 0; i < valores.length; i++) {
      var dobro = valores[i] * 2;
      resultados += "O dobro de " + valores[i] + " é " + dobro + "<br>";
    }
  
    resultado.innerHTML = resultados;
  }