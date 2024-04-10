const resutlado = document.querySelector('#resutlado')

function fibonacci() {
    var fibonacciSequence = [0, 1]; 
    for (var i = 2; i < 10; i++) { 
      fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]; 
    }
    resutlado.innerHTML = fibonacciSequence;
}

fibonacci()