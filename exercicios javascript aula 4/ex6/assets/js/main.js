function calcularStatus() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var peso1 = parseFloat(document.getElementById("peso1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var peso2 = parseFloat(document.getElementById("peso2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var peso3 = parseFloat(document.getElementById("peso3").value);
  
    var media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);
  
    var resultado = '';
  
    if (media >= 9) {
      resultado = "Aprovado com excelência!";
    } else if (media >= 6) {
      resultado = "Aprovado!";
    } else {
      var novaNota = parseFloat(prompt("Você foi reprovado. Insira a nota da prova substitutiva (peso 40%):"));
      var novaMedia = (media * (peso1 + peso2 + peso3) + novaNota * 0.4) / (peso1 + peso2 + peso3 + 0.4);
      
      if (novaMedia >= 6) {
        resultado = "Aprovado após prova substitutiva!";
      } else {
        resultado = "Reprovado após prova substitutiva.";
      }
    }
  
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
  }