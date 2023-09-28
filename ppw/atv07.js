class ContaBancaria {
    constructor(agencia, numero, tipo = 'Conta Corrente', saldo = 0) {
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this._saldo = saldo;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    set saldo(novoSaldo) {
      this._saldo = novoSaldo;
    }
  
    sacar(valor) {
      if (valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso.`);
      } else {
        console.log('Saldo insuficiente.');
      }
    }
  
    depositar(valor) {
      this._saldo += valor;
      console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
      super(agencia, numero, 'Conta Corrente');
      this.cartaoCredito = cartaoCredito;
    }
  
    get cartaoCredito() {
      return this._cartaoCredito;
    }
  
    set cartaoCredito(novoCartaoCredito) {
      this._cartaoCredito = novoCartaoCredito;
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
      super(agencia, numero, 'Conta Poupança');
    }
  }
  
  class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
      super(agencia, numero, 'Conta Universitária');
    }
  
    sacar(valor) {
      if (valor <= 500 && valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso.`);
      } else {
        console.log('Valor de saque excede o limite de R$ 500 ou saldo insuficiente.');
      }
    }
  }
  
  // Exemplo de uso das classes
  const contaCorrente = new ContaCorrente('001', '12345', 1000);
  const contaPoupanca = new ContaPoupanca('002', '67890', 500);
  const contaUniversitaria = new ContaUniversitaria('003', '54321', 300);
  
  console.log('Conta Corrente:');
  console.log(contaCorrente);
  contaCorrente.depositar(200);
  contaCorrente.sacar(400);
  console.log(`Saldo: R$ ${contaCorrente.saldo}`);
  
  console.log('\nConta Poupança:');
  console.log(contaPoupanca);
  contaPoupanca.depositar(100);
  contaPoupanca.sacar(700);
  console.log(`Saldo: R$ ${contaPoupanca.saldo}`);
  
  console.log('\nConta Universitária:');
  console.log(contaUniversitaria);
  contaUniversitaria.depositar(50);
  contaUniversitaria.sacar(700);
  console.log(`Saldo: R$ ${contaUniversitaria.saldo}`);
  