function Retangulo(x, y){
    this.x = x;
    this.y = y;

    this.calculaArea = () => {
        return x * y / 2;
    };
}

function Conta(){
    this.nomeCorrentista = "";
    this.banco = "";
    this.conta = "";
    this.saldo = 0.0;

    this.getNomeCorrentista = () => this.nomeCorrentista;
    this.setNomeCorrentista = nomeCorrentista => this.nomeCorrentista = nomeCorrentista;

    this.getBanco = () => this.banco;
    this.setBanco = banco => this.banco = banco;

    this.getConta = () => this.conta;
    this.setConta = conta => this.conta = conta;

    this.getSaldo = () => this.saldo;
    this.setSaldo = saldo => this.saldo = saldo;
        
}

function Corrente(){
    Conta.apply(this);
    this.saldoEspecial = "";

    this.getSaldoEspecial = () => this.saldoEspecial;
    this.setSaldoEspecial = saldoEspecial => this.saldoEspecial = saldoEspecial;
}

function Poupanca(){
    Conta.apply(this);
    this.juros = "";
    this.dataVencimento = "";

    this.getJuros = () => this.juros;
    this.setJuros = juros => this.juros = juros;

    this.getDataVencimento = () => this.dataVencimento;
    this.setDataVencimento = dataVencimento => this.dataVencimento = dataVencimento;
}

const ret = new Retangulo(5, 3);
console.log(`Área do retângulo: ${ret.calculaArea()}`);

const contaCorrente = new Corrente();
contaCorrente.setNomeCorrentista("João Silva");
contaCorrente.setBanco("Banco Itaú");
contaCorrente.setConta("123-4");
contaCorrente.setSaldo(351.13);
contaCorrente.setSaldoEspecial(50);

const contaPoupanca = new Poupanca();
contaPoupanca.setNomeCorrentista("Maria da Silva");
contaPoupanca.setBanco("Banco Bradesco");
contaPoupanca.setConta("432-1");
contaPoupanca.setSaldo(715.83);
contaPoupanca.setJuros(0.65);
contaPoupanca.setDataVencimento(13);

console.log(contaCorrente);
console.log(contaPoupanca);