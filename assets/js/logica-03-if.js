function exemploBasico() {
    let numero = 1;

    // se o número é igual a 1 faço alguma coisa

    if (numero === 1) {
    //Fazer alguma coisa
        alert("um")
    }
    else {
// else é o SENÃO
        alert("Outro número");
    }
}

function exemploBasico02() {
    let idade = 17;

    if (idade < 18) {
        alert("Menor de idade");
    }

    else if (idade < 60) { // se a idade é menor que 60 anos
       alert ("Adulto")
    }
    else {
// senão eu sei que é maior que 59
    alert ("idoso");
    }
}

function exemploBasico03(){
    let numero = parseInt(prompt("Informe um número"));

    //if (numero <= -1)
    if (numero < 0) {
        alert ("Número negativo");
    }
    else if (numero > 0) {
    alert("Número positivo");
    }
    else {
        alert("Número neutro");
    }
}

function exemploProduto() {
// Produtos|: Maçã 0.80, Pera 1.20, Laranja 2.50, Banana 2.00
// Senão for nenhuma das opções encerra a execução
    let produto = prompt('Digite o nome do produto');
    let quantidade = prompt("Digite a quantidade");

    let precoUnitario = 0;

    if (produto === "Maçã") {
        precoUnitario = 0.80 }

    else if (produto === "Pera") {
        precoUnitario = 1.20 }
    
        else if (produto === "Laranja") {
        precoUnitario = 2.50
        }
    else if (produto === "Banana") {
        precoUnitario = 2.0}
    
    else {// caso o produto não seja um produto válido
// Apresentar uma mensagem de feedback
alert ("Produto não cadastrado")
//encerrar a execução da função
return;
}
// Escopo da variável total é a função exemploProduto
    let total = quantidade *precoUnitario;

alert("produto: " + produto +
    "\nQuantidade: " + quantidade +
    "\nPreço Unitário: R$" + precoUnitario.toFixed(2) +
"\nTotal: R$" + total.toFixed(2)
)
}

let regular = 0; // 1 => 2
let bom = 0;
let otimo = 0;

function avaliarRegular() {
// Incrementando a variável regular em 1
regular = regular + 1;
}

function avaliarBom() {
bom = bom + 1;
}

function avaliarOtimo() {
otimo = otimo + 1;
}

function finalizarAvaliacao() {
alert ("Avaliações : \n Regular: " + regular + "\n Bom: " + bom + "\n Ótimo " + otimo);

regular = 0;
bom = 0;
otimo = 0;
}

function exemploOperadorLogicoE() {
    let idade = parseInt(prompt("digite a senha"));

 // 0,1, 2, 3, 4,..... 17
 if ((idade >= 0) && (idade <= 17)) {
        alert("criaças ou adolescente");
 } else if (idade >= 18) {
    alert("adulta");
 } else {
    alert("idade invalida");
}
 
}

/*
tabela verdade Operador E
V e V =>
V e F =>
F e V =>
F e F =>
*/

function exemploOperadorLogicoUo(){
    let transporte = prompt("Digite o meio de transporte para viajar");

    // pipeline |
    if ((transporte === "moto") || (transporte === "carro")) {
        alert("viajar de boas");
    } else {
        alert("nao vamos viajar");
    }
}

/*
 limpar banheiro ou limpar janelas => pao de queijo com queijo de minas casso contrario ...

    tabela verdade Ou
    V ou V => V
    V ou F => V
    F ou V => V
    F ou F => F
*/

// moba, fps => 10%
// aventura, rpg => 15%
// roguelike, soulslike => 20%

function exemploLoja(){
    let nome1 = prompt ("digite o nome do jogo 1");
    let categoria1 = prompt("digite categoria do jogo"); 
    let precoBase1 = 399.90;

    let precoComDesconto1 = 0;
    let percentualDesconto1 = 0;
    let precoDesconto1n = 0;

    if ((categoria === "moba") || (categoria === "fps")){
        percentualDesconto1 = 0.10;
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = prcoBase1 - precoDesconto1;
    } else if ((categoria1 === "aventura") || (categoria1 === "rpg")) { 
        percentualDesconto1 = 0.15;
        precoDesconto1 = percentualDesconto1 * precoBase1;
        precoComDesconto1 = precoBase1 - precoDesconto1;
    } else if ((categoria1 === "roguelike") || (categoria1 === "soulslike")) { 
        percentualDesconto1 = 0.20;
        precoDesconto1 = precoBase1 * percentualDesconto1;
        precoComDesconto1 = precoBase1 - precoDesconto1;

    }

    let nome2 = prompt("Digite o nome do jogo 2"); 
    let categoria2 = prompt("digite a categoria do jogo");
    let precoBase2 = 190.00;

    let precoComDesconto2 = 0;
    let percentualDesconto2 = 0;
    let precoDesconto2 = 0; 

    if ((categoria2 === "moba") ||(categoria2 === "fps")){
        percentualDesconto2 = 0.10;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    } else if ((categoria2 === "aventura") || (categoria2 === "rpg")) {
        percentualDesconto2 = 0.15;
        precoDesconto2 = percentualDesconto * precoBase2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
    } else if ((categoria2 === "roguelike") || (categoria2 === "soulslike")){
        percentualDesconto2 = 0.20;
        precoDesconto2 = precoBase2 * percentualDesconto2;
        precoComdesconto2 = precoBase2 - precoDesconto2;
    }

    let totalPedido = precoComDesconto1 + precoComDesconto2;

      alert(
        "nome: " + nome1 +
        "\nPreço base: R$ " + precoBase1.toFixed(2) +
        "\nValor do desconto: R$ " + precoDesconto1.toFixed(2) +
        "\nPercentual de desconto: " + percentualDesconto * 100 + "%" +
        "\nPreço do jogo 1: R$ " + precoDesconto1.toFixed(2) +

        "\n\nNome: " + nome2 +
        "\nCategoria: " + categoria2 +
        "\nPreço base: R$ " + precoBase2.toFixed(2) +
        "\nValor do desconto: R$ " + precoDesconto2.toFixed(2) +
        "\nPercentual de desconto: " + percentualDesconto2 *  + "%" +
        "\nPreço do jogo: R$ " + precoComDesconto2.toFixed(2) +
        "\n\nTotal: R$ " + totalPedido.toFixed(2));
  

































}
