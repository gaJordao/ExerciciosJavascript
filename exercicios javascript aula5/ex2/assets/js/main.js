resultado = document.getElementById("resultado")

function calcularMedia() {
    var valoresInput = document.getElementById("valores").value;
    var valores = valoresInput.split(',').map(function(item) {
      return parseInt(item.trim(), 10);
    });
  
    var soma = 0;
  
    for (var i = 0; i < valores.length; i++) {
      soma += valores[i];
    }
  
    var media = soma / valores.length;
  
    resultado.innerHTML = "A média dos valores é: " + media;
  }