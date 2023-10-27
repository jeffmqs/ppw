// Classe ContaBancaria
class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false; // Saldo insuficiente
        }
    }

    depositar(valor) {
        this.saldo += valor;
    }
}

// Classe ContaCorrente (Herda de ContaBancaria)
class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, "Conta Corrente", saldo);
        this.cartaoCredito = cartaoCredito;
    }

    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }
}

// Classe ContaPoupanca (Herda de ContaBancaria)
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Poupança", saldo);
    }
}

// Classe ContaUniversitaria (Herda de ContaBancaria)
class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
        super(agencia, numero, "Conta Universitária", saldo);
    }

    sacar(valor) {
        if (valor <= 500 && valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false; // Saque não permitido
        }
    }
}

const contas = [];

function inserirConta() {
    const agencia = document.getElementById("agencia").value;
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;
    const saldo = parseFloat(document.getElementById("saldo").value);

    if (tipo === "Conta Corrente") {
        const cartaoCredito = prompt("Informe o limite do cartão de crédito:");
        const contaCorrente = new ContaCorrente(agencia, numero, saldo, parseFloat(cartaoCredito));
        contas.push(contaCorrente);
    } else if (tipo === "Conta Poupança") {
        const contaPoupanca = new ContaPoupanca(agencia, numero, saldo);
        contas.push(contaPoupanca);
    } else if (tipo === "Conta Universitária") {
        const contaUniversitaria = new ContaUniversitaria(agencia, numero, saldo);
        contas.push(contaUniversitaria);
    }
}

function deletarConta() {
    const numeroConta = prompt("Informe o número da conta a ser deletada:");
    const index = contas.findIndex(conta => conta.numero === numeroConta);
    if (index !== -1) {
        contas.splice(index, 1);
    }
}

function visualizarContas() {
    const listaContas = document.getElementById("listaContas");
    listaContas.innerHTML = "";

    contas.forEach(conta => {
        const item = document.createElement("li");
        item.textContent = `Agência: ${conta.agencia}, Número: ${conta.numero}, Tipo: ${conta.tipo}, Saldo: R$ ${conta.getSaldo().toFixed(2)}`;
        listaContas.appendChild(item);
    });
}

