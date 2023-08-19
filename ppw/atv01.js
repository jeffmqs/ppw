const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarEntrada(entrada) {
  if (typeof entrada === 'number') {
    if (entrada % 2 === 0) {
      console.log('A entrada é um número par.');
    } else {
      console.log('A entrada é um número ímpar.');
    }
  } else if (typeof entrada === 'string') {
    console.log('A entrada é uma string.');
  } else {
    console.log('A entrada não é um número nem uma string.');
  }
}

function lerEntrada() {
  rl.question('Digite um valor: ', (entrada) => {
    if (entrada.trim() === '') {
      console.log('Nenhuma entrada fornecida.');
      rl.close();
    } else if (!isNaN(parseFloat(entrada))) {
      verificarEntrada(parseFloat(entrada));
      rl.close();
    } else {
      verificarEntrada(entrada);
      rl.close();
    }
  });
}

lerEntrada();

  