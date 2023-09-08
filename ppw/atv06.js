// Inicialização da conta bancária
let saldo = 1000; // Saldo inicial
let transacoes = []; // Array de transações

function exibirMenu() {
    return prompt(`Escolha uma opção:
1. Depositar
2. Sacar
3. Ver Saldo
4. Ver Histórico de Transações
5. Sair`);++
}

function depositar(valor) {
    saldo += valor;
    transacoes.push({ tipo: "Depósito", valor, data: new Date().toLocaleString() });
    return `Depósito de R$${valor.toFixed(2)} realizado com sucesso.`;
}

function sacar(valor) {
    if (valor > saldo) {
        return "Saldo insuficiente para saque.";
    } else {
        saldo -= valor;
        transacoes.push({ tipo: "Saque", valor, data: new Date().toLocaleString() });
        return `Saque de R$${valor.toFixed(2)} realizado com sucesso.`;
    }
}

function verSaldo() {
    return `Saldo atual: R$${saldo.toFixed(2)}`;
}

function verHistorico() {
    let historico = "Histórico de Transações:\n";
    for (const transacao of transacoes) {
        historico += `${transacao.data} - ${transacao.tipo}: R$${transacao.valor.toFixed(2)}\n`;
    }
    return historico;
}

function main() {
    while (true) {
        const opcao = exibirMenu();

        switch (opcao) {
            case '1':
                const deposito = parseFloat(prompt("Digite o valor a ser depositado:"));
                if (!isNaN(deposito) && deposito > 0) {
                    alert(depositar(deposito));
                } else {
                    alert("Valor de depósito inválido.");
                }
                break;
            case '2':
                const saque = parseFloat(prompt("Digite o valor a ser sacado:"));
                if (!isNaN(saque) && saque > 0) {
                    alert(sacar(saque));
                } else {
                    alert("Valor de saque inválido.");
                }
                break;
            case '3':
                alert(verSaldo());
                break;
            case '4':
                alert(verHistorico());
                break;
            case '5':
                alert("Obrigado por usar nosso sistema!");
                return;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    }
}

main();
