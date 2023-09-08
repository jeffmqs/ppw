//função para saber a hora da transação
function obterHoraAtualBrasil() {
    const fusoHorarioBrasil = 'America/Sao_Paulo'; // Fuso horário do Brasil
    const data = new Date().toLocaleString('pt-BR', { timeZone: fusoHorarioBrasil });
    
    return data;
}

//objeto classe
class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
        this.historicoTransacoes = [];
    }
    
    depositar(valor) {
        // this referencia a "funcao" depositar
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado\n`);
        console.log(`Saldo atual: R$${this.saldo}`);
        this.registrarTransacao('Depósito', valor);
    }

    sacar(valor) {
        // negar a única possibilidade
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente`);
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado \n`);
        console.log(`Saldo atual: R$${this.saldo}`);
        this.registrarTransacao('Saque', valor);
    }
    
    extrato() {
        console.log(`O seu extrato é: R$${this.saldo}`);
    }
    
    historico() {
        console.log("Histórico de transações: ");
        for (const transacao of this.historicoTransacoes) {
            console.log(`Tipo: ${transacao.tipo}, Valor: R$${transacao.valor}, Data: ${transacao.data}`);
        }
    }
    
    registrarTransacao(tipo, valor) {
        this.historicoTransacoes.push({ tipo: tipo, valor: valor, data: obterHoraAtualBrasil() });
    }
    
    menu(opcao, valor) {
        switch (opcao) {
            case '1':
                this.depositar(valor);
                break;
            case '2':
                this.sacar(valor);
                break;
            case '3':
                this.extrato();
                break;
            case '4':
                this.historico();
                break;
            case '5':
                console.log('Até logo!');
                process.exit(0);
            default:
                console.log('Opcao invalida');
        }
    }
}

const valorInicial = parseFloat(prompt("Digite o valor inicial: "));
const minhaConta = new ContaBancaria(valorInicial);

while (true) {
    console.log("Bem-vindo ao Sistema de Conta Bancária! Escolha uma opção:\n 1. Depositar \n 2. Sacar \n 3. Ver Saldo \n 4. Ver Histórico de Transações \n 5. Sair");
    const opcao = prompt("Digite o numero da opcao desejada: ");
    let valor;
    if (opcao == '1' || opcao == '2') {
        valor = parseFloat(prompt("Digite o valor: "));
    }
    minhaConta.menu(opcao, valor);
}