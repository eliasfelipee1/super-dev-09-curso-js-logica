function exercicio01(){
    debugger
    let nome = "Robin";
    let anoNascimento = "2005";
    let anoAtual = "2026";
    let altura = "1.73";
    let peso = "60.5";
    
    let imc = peso / (altura * altura);

    let idade = anoAtual - anoNascimento;
     
    let categoria = "desenvolvedor de sites";
    let quantidadeSitesMes = 5;
    let valorPorHora = 120.50;
    let horasPorMes = 100;
    let valorSites =  4000.50;

    let valorBrutoMesTrabalhado = quantidadeSitesMes * valorSites;

    let salarioLiquido = valorPorHora * horasPorMes;

     

    alert("nome: " + nome +
        "\nano Nascimento: " + anoNascimento +
        "\nano Atual: " + anoAtual +
        "\nidade: " + idade +
        "\naltura: " + altura +
        "\npeso: " + peso +
        "\nimc: " + imc.toFixed(2) +
        "\ncategoria: " + categoria +
        "\nquantidade Sites Mes: " + quantidadeSitesMes +
        "\nvalor Por Hora: " + valorPorHora.toFixed(2) +
        "\nhoras Por Mes: " + horasPorMes.toFixed(2) +
        "\nvalor Sites: " + valorSites.toFixed(2) +
        "\nvalorBrutoMesTrabalhado : " + valorBrutoMesTrabalhado.toFixed(2) +
        "\nsalarioLiquido: " + salarioLiquido.toFixed(2)

    );
   
}

function exercicio02(){
    debugger
    let nome = "elias";
    let nota1 = 5.5;
    let nota2 = 7.0;
    let nota3 = 10.00;
    let nota4 = 4.0;
    let numero = 4;

    let somaNotas = nota1 + nota2 + nota3 + nota4;

    let mediaAluno = somaNotas / numero;

    alert("nome: " + nome +
        "\nnota1: " + nota1 +
        "\nnota2: " + nota2 +
        "\nnota3: " + nota3 +
        "\nnota4: " + nota4 +
        "\nnumero: " + numero +
        "\nsomaNotas: " + somaNotas +
        "\nmediaAluno: " + mediaAluno

    );

    
}

function exercicio03() {
    debugger
    let produto = "iphone 17";
    let preco = 7000.00;
    let quantidadeIphones = 5;
    let desconto = 10;

    let valorTotal = quantidadeIphones * preco;

    let valorDesconto = valorTotal - (valorTotal * desconto / 100);

    alert(
        "Produto: " + produto +
        "\nPreço: " + preco.toFixed(2) +
        "\nQuantidade Iphone: " + quantidadeIphones +
        "\nValor Total: " + valorTotal.toFixed(2) +
        "\nValor com Desconto: " + valorDesconto.toFixed(2)
    );
}

function exercicio04(){
    debugger
    let carro = "porsche";
    let anoCarro = 2026;
    let velocidadeMaxima = 350;
    let tempoViagem = 30;

    let distanciaViagem = velocidadeMaxima * tempoViagem;

     alert("carro: " + carro +
        "\nano Carro: " + anoCarro +
        "\nvelocidade Maxima: " + velocidadeMaxima +
        "\ntempo Viagem: " + tempoViagem +
        "\ndistancia Viagem: " + distanciaViagem 

     );

}


function exercicio05(){
    let cidade  = "blumenau";
    let populacao = 400000.00;
    let area = 519.8;

    let densidadeDemografica = populacao / area;



   alert("cidade: " +  cidade +
        "\npopulacao: " + populacao +
        "\narea: " + area +
        "\ndensidade Demografica: " + densidadeDemografica.toFixed(2)

   );

}

function exercicio06(){
    let filme = "tarzan";
    let duracao = 100.11;
    let classificacaoIndicativa = 18;
    let quantidadeVezesAssistido = 5;
    

 
    alert("filme: " + filme +
        "\nduracao: " + duracao +
        "\nclassificacao Indicativa: " + classificacaoIndicativa +
        "\nquantidade Vezes Assistido: " + quantidadeVezesAssistido

    );

}

    
function exercicio07(){
    let funcionario = "elias";
    let salarioBase = 50000.00;
    let horasExtras = 30;
    let valorPorHora = 150.00;


    let totalHorasExtras = horasExtras * valorPorHora;

    let salarioFinal = salarioBase + totalHorasExtras;


    alert("funcionario: " + funcionario + 
        "\nsalario Base: " + salarioBase +
        "\nhoras Extras: " + horasExtras +
        "\nvalor Por Hora: " + valorPorHora +
        "\ntotal Horas Extras: " + totalHorasExtras.toFixed(2) +
        "\nsalario Final: " + salarioFinal.toFixed(2)

    );
}


