function exemploForBasico(){
      /*
    // declaracao da variavel
    let indice = 0;
    // condicao
    while(indice < 4){
        alert(indice);
    // incrementar
       indice = indice + 1;
        }
 }
*/
}
    
// for (declaracao da variavel; condicao; incrementar) {
for (let indice = 0; indice < 4; indice = indice + 1) {
    alert(indice)
} 

// todo while pode virar um for? depende, e possivel converter
// quando tem repeticoes definidas (repetira 10 vezes por)
// todo for pode virar um while?
// for => 0.3 => while

function  exemploForJogos(){
    let total = 0;

    for(let  indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("digite o nome do jogo");

        let preço = parseFloat(prompt("digite o preço"));

        // variavel recebe ela mesma mais o que deseja somar
        total = total + preço;

    } 

    alert("total: " + total);
} 

function exemploForProduto(){ 
    // padaria, utensilios, carnes

    let quantidadePadaria = 0; quantidadeUtensilios = 0, quantidadeCarnes = 0;

for(let indice = 0; indice < 6; indice = indice + 1){
    let produto = prompt("digite o nome do produto");
    let categoria = prompt("digite a categoria do produto:  [carnes, padaria, utensilios]:");

    // validar que o usuario digitou uma categoria valida
    while ((categoria.toLowerCase() !== "carnes") &&
           (categoria.toLowerCase() !== "padaria") &&
           (categoria.toLoweCase() !== "utensilios")) {
            categoria = prompt(
                "Categoria invalida.\nDigite a categoria do produto [carnes, padaria, utensilios]:").trim();
           }

    let preco = parseFloat(prompt("digite o preco do produto"));    

    if(categoria.tolowerCase() === "padaria"){
        quantidadePadaria = quantidadePadaria + 1;
    } 

}

alert("quantidade padaria:" + quantidadePadaria)

}

function exemploContagemRegressiva(){
    // for (variavel; condicao; incremento/decremento)
    for(let indice = 10; indice > 0; indice = indice - 1){
        alert(indice);

    }
}

function exemploDescobrirQuantidadePar(){
    let quantidadePares = 0;

    let quantidadeNumeros = ParseFloat(prompt("digite a quantidade de numeros a validar"))

    for(let indice = 0; indice < quantidadeNumeros; indice = indice + 1){
    let numero = parseFloat(prompt("digite o numero"));

    if (numero % 2 === 0){ 
        quantidadePares = quantidadePares + 1; 
    }

         // descobrir impar (numero % 2 !== 0)
} 

alert("quantidade de numeros pares: " + quantidadePares);

}