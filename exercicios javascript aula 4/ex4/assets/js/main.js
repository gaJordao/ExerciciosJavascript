function calcular() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var operacao = document.getElementById("operacao").value;
    var resultado = 0;
  
    switch (operacao) {
      case "adicao":
        resultado = valor1 + valor2;
        break;
      case "subtracao":
        resultado = valor1 - valor2;
        break;
      case "multiplicacao":
        resultado = valor1 * valor2;
        break;
      case "divisao":
        resultado = valor1 / valor2;
        break;
      case "potencia":
        resultado = Math.pow(valor1, valor2);
        break;
      case "raiz":
        resultado = Math.sqrt(valor1);
        break;
      case "porcentagem":
        resultado = (valor1 / 100) * valor2;
        break;
      case "fibonacci":
        resultado = fibonacci(valor1);
        break;
      case "fatorial":
        resultado = fatorial(valor1);
        break;
      default:
        resultado = "Operação inválida";
    }
  
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
  }
  
  function fibonacci(n) {
    if (n <= 1)
      return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function fatorial(n) {
    if (n === 0)
      return 1;
    return n * fatorial(n - 1);
  }