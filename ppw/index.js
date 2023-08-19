function executar(fn, num1 = 0, num2 = 0) {
    if (typeof fn === 'function') {
      return fn(num1, num2);
    }
  }
  
  function somar(a, b) {
    return a + b;
  }
  
  function subtrair(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Erro: Divisão por zero!";
    }
  }
  
  document.getElementById('calcular').addEventListener('click', function() {
    const operacao = parseInt(document.getElementById('operacao').value);
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    let resultado = '';
  
    switch (operacao) {
      case 1:
        resultado = executar(somar, num1, num2);
        break;
      case 2:
        resultado = executar(subtrair, num1, num2);
        break;
      case 3:
        resultado = executar(multiplicar, num1, num2);
        break;
      case 4:
        resultado = executar(dividir, num1, num2);
        break;
      case 0:
        resultado = "Calculadora encerrada.";
        break;
      default:
        resultado = "Operação inválida.";
        break;
    }
  
    document.getElementById('resultado').textContent = resultado;
  });
  