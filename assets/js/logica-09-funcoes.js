// global
let nome = "";
let quantidade = 0;
let preco = 0.0;
let total = 0.0;

function comprarProduto(){
    solicitarDados();
    calcularTotal();
    apresentarDados();


}

function solicitarDados(){
    // utilizar a variavel global
    nome = prompt("digite o nome do produto");
    quantidade = parseInt(prompt("digite a quantidade"));
    preco = parseFloat(prompt("digite o preco"));


}

function apresentarDados(){
    alert("nome: " + nome + "\nquantidade: " + quantidade +
        "\ntotal: " + total
        

    );

}


function calcularTotal(){
    total = quantidade * preco;

}
