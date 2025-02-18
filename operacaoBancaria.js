//Variavel que armazena o saldo inicak da conta

let saldo = 0

//função para atualizar o saldo na tela

function atualizarSaldo() {
    //selecionar o elemento do saldo e atualize o texto com o valor formatado

    document.getElementById('saldo').textContent = saldo.toFixed (2)
}

//função que a realiza deposito

function depositar () {
    //obtem o valor digitado pelo usuario e  converter para numero decimal

    valor = parseFloat (document.getElementById('valor').value)
    
    // verifica se o valor valido é maior que 0 e é numerico

    if (isNaN(valor) || valor <= 0) {
        //Exibe alerta se o valor for invalido
        alert("Verifique o valor digitado, seu animal")

        return //Interrompe a execução do valor
    }

    //adicionar valor ao saldo
    saldo += valor 
    //atualizar o saldo na tela
    
    atualizarSaldo()
    //exibir uma menssagem confirmando o deposito

    alert("Depostio realizado com sucesso, no valor de R$" + valor.toFixed (2))
}

//função que a realiza o saque

function sacar() {
    //Obtem o valor digitado pelo usuario e converte para o valor decimal

    valor = parseFloat (document.getElementById('valor'). value)
    // verificar se o valor e valido
    if (isNaN(valor) || valor <-0) {
        alert ("Por favor, insira um valor valido!")
        return
    }

    // verifica se o saldo é suficiente
    if (valor > saldo) {
        alert ("Saldo Insuficiente")
        return
    }

    //subtrai o valor do saldo
    saldo -= valor
    //atualizar o saldo
    atualizarSaldo ()
    alert ("Saque de R$ "+valor.toFixed(2) + "realizado com sucesso")
    }
