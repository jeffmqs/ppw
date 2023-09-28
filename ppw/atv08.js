function isQuadradoMagico(matriz) {
    const n = matriz.length;
    
    // Verificar se a matriz é quadrada (mesmo número de linhas e colunas)
    for (let i = 0; i < n; i++) {
      if (matriz[i].length !== n) {
        return false;
      }
    }
  
    // Calcular a soma do primeiro elemento da primeira linha para comparar
    const somaMagica = matriz[0].reduce((acc, num) => acc + num, 0);
  
    // Verificar as somas das linhas
    for (let i = 0; i < n; i++) {
      const somaLinha = matriz[i].reduce((acc, num) => acc + num, 0);
      if (somaLinha !== somaMagica) {
        return false;
      }
    }
  
    // Verificar as somas das colunas
    for (let j = 0; j < n; j++) {
      let somaColuna = 0;
      for (let i = 0; i < n; i++) {
        somaColuna += matriz[i][j];
      }
      if (somaColuna !== somaMagica) {
        return false;
      }
    }
  
    // Verificar a soma da diagonal principal
    let somaDiagonalPrincipal = 0;
    for (let i = 0; i < n; i++) {
      somaDiagonalPrincipal += matriz[i][i];
    }
    if (somaDiagonalPrincipal !== somaMagica) {
      return false;
    }
  
    // Verificar a soma da diagonal secundária
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < n; i++) {
      somaDiagonalSecundaria += matriz[i][n - 1 - i];
    }
    if (somaDiagonalSecundaria !== somaMagica) {
      return false;
    }
  
    // Se passou por todas as verificações, é um quadrado mágico
    return true;
  }
  
  // Teste com uma matriz
  const matriz = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ];
  
  console.log(isQuadradoMagico(matriz)); // Deve retornar true
  