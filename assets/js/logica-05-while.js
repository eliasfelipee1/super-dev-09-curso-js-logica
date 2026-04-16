function exemplo01() {
    debugger
    // mostrar uma mensagem 4 vezes
    let indice = 0;  // indice e um contador

    while (indice < 4) {
        console.log("oie");
        indice = indice + 1;
    }
}

function exemploSolictarNumeros() {
    // modo antigo, sem while 
    // let numero1 = parseInt(prompt("digite o numero:  "));
    // let numero1 = parseInt(prompt("digite o numero:  "));
    // let numero1 = parseInt(prompt("digite o numero:  "));

    debugger
    //solicitar 3 numeros
    let indice = 0;

    //while: utilizamos para repetir codigo
    //while(indice < 3) { 
    while (indice <= 2) {
     let numero = parseInt(prompt("Digite o codigo:   "));
     indice = indice + 1;

    }
     
    alert("muito obrigado");
}

function solicitarDadosPacientes(){
    // solictar os dados de 3 pacientes, nome e idade
    let indice = 0;

    while(indice < 3){
        let nome = prompt("digite o seu nome").trim();
        let idade = parseInt(prompt("Digite sua idade"));

        let anoDeNascimento = 2026 - idade;

        alert(nome + " nasceu em " + anoDeNascimento);

        // incrementar
        indice = indice + 1;

    }
}

function contagemRegressiva(){ 
    let indice = 10;

    while (indice >= 0) {
        alert(indice);
        indice = indice - 1;  
   }


}


function calcularPrecoJogos(){
    let indice = 0;
    debugger
 
    let total = 0;

    // solicitar preço de 3 jogos
    while (indice <= 2) {
        let nome = prompt("nome do jogo"); 
        let preço = parseFloat(prompt("digite o preço"));

        // somando: o total recebe ele mesmo, ou seja o valor inicial da variavel totaç
        // mais o preço do jogo
        // total = 0 + preço;
        total = total + preco;

        indice = indice - 1;
    }
    alert("total dos jogos: " + total);
}


function descobrirQuantidade(){
    //solicitaR nome, idade de  de 3 pessoas e apresentar a quantidade de menores de idade
    let indice = 0;
    let quantidadeMenoresIdade = 0;
    debugger

    while (indice < 3) {
        let nome = prompt("digite o nome");
        let idade = parseInt(prompt("Digite a idade"));

        if (idade <= 17) {
            // incrementar a variavel quantidadeMenoresIdade em 1 
            quantidadeMenoresIdade = quantidadeMenoresIdade +1;

        }
        indice = indice + 1;
    }

    alert("quantidade de pessoas menores de 18 anos: " + quantidadeMenoresIdade);
}

function descobrirMaiorAltura(){ 
    // descobrir maior altura
    let indice = 0;
    let maiorAltura = 0;

    while(indice < 4){
        let altura = parseFloat(prompt("digite a altura")); // 2

        if(altura > maiorAltura){
            maiorAltura = altura;

        }
        indice = indice + 1;
}
     alert("maior altura: " + maiorAltura);

}

function descobrirMenorVitorias(){
    let indice = 0;
    let menorQuantidadeVitorias = 999999999999;

    while (indice < 3) {
        let personagem = prompt("Digite o nick"); 
        let quantidadeVitorias = parseInt(prompt("digite a quantidade de vitorias"));

        if(quantidadeVitorias < menorQuantidadeVitorias){
            menorQuantidadeVitorias = quantidadeVitorias;
        }
        indice = indice + 1;
    }
    alert("Menor quantidade de vitorias: " + menorQuantidadeVitorias);
}


function descobrirColaboradorComMenorNome(){
    let indice = 0;
    let maiorBonificacao = 0;
    let colaboradorMaiorBonificacao = "";

    while (indice < 3){
        let colaborador = prompt("digite o nome do colab");
        let bonificacao = parseFloat(prompt("digite o valor da bonificacao"));

        if(bonificacao > maiorbonificacao){
            maiorBonificacao = bonificacao;

            colaboradorMaiorBonificacao = colaborador;
        }

        indice = indice + 1;
    }

    alert(colaboradorMaiorBonificacao + " tem a maior bonificacao: " + maiorBonificacao);
}


function descobrirMenorNome(){
    let indice = 0;
    let menorNome = "329479357283557845784356943563498562";
     debugger
    let quantidadeDesejada = parseInt(prompt("digite a quantidade desejada para cadastrar"));

    while (indice < quantidadeDesejada){
        let nome = prompt("digite o nome").trim();

        if (nome.length < menorNome.length) {
            menorNome = nome;

            indice = indice + 1;
        }
        
    }
        alert("Menor nome: " + menorNome + "\nQuantidade de caracteres: " + menorNome.length)
}

function repetirEnquantoUsuarioDesejaContinuar(){
    let desejaContinuar = "";

    alert("bem vindo ao sistema de cadastro de fila de atendimento do SOS")

    while (desejaContinuar != "nao") {

        let nomePaciente = prompt("digite o nome do paciente");

        desejaContinuar = prompt("deseja continuar? [sim\nao]").toLowerCase();
    }
}


function repetirEnquantoUsuarioDesejaContinuarComfirm(){
    
    let desejaContinuar = true;
    let quantidadePacientesCadastrados = 0;

    alert("bem vindo ao sistema de cadastro de fila do SOS");

    while (desejaContinuar != false) {
        quantidadePacienteCadastrados = quantidadePacientesCadastrados

        desejaContinuar = confirm("deseja continuar?");

    }

    alert("quantidade de pacientes que foram cadastrados: " + quantidadePacientesCadastrados)
}


 

 



















