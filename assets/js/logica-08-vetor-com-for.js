function exemplo01(){
    //solicitar o nome de 3 pessoas e apresentar

    let nomes = [];

    // i = i + 1;
    // i += 1;
    // i++;

    for (let i = 0; i < 3; i += 1) {
        nomes.push(prompt("Digite o nome"));
    }

    for(let i = 0; i < 3; i += i) {
        alert(nomes[i]);
    }
}

function exemplo02() {
    let alunos = [];
    let notas1 = [];
    let notas2 = [];

    for (let i = 0; i < 3; i += 1) {
        let nomeAluno = prompt("Digite o nome do aluno: ");
        let notas1 = parseFloat(prompt("Digite a nota 1"));
        let notas2 = parseFloat(prompt("Digite a nota 2"));

        alunos.push(nomeAluno);
        notas1.push(notas1);
        notas2.push(notas2);
    }

    // apresentar a média de cada aluno

    for (let i = 0; i < 3; i += 1) {
        let notas1 = notas1[i];
        let notas2 = notas2[i];
        let media = (notas1 + notas2) / 2;

        let status = "";
        if (media < 7) {
            status = "Reprovado";
        } else {
            status = "Aprovado";
        }

        alert(alunos[i] + " tem a média: " + media + " status é: " + status);
    }
}

function exemplo03(){
    // solicitar colaborador, quantidade horas, valor hora
    // qual a mior valor hora pago
    // colaborador com maior  salario
    // colaborador menor nome

    let colaboradores = [];
    let horas = [];
    let valores = [];
    let salarios = [];

    let Quantidade = parseInt(prompt("digite a quantidade de colaboradores"));

    // solicitando os dados dos colaboradores
      for (let i = 0; i < Quantidade; i += 1){
        let colaborador = prompt("digite o nome do colabirador");
        let quantidadeHoras = parseInt(prompt("digite a quantidade de horas"));
        let valorHora = parseFloat(prompt("digite o valor"));

        colaboradores.push(colaborador);
        horas.push(quantidadeHoras);
        valores.push(valorHora);

        //calcular o salario
        let salario = quantidadeHoras * valorHora;
        // armazenar o salario que foi calculado
        salarios.push(salario);

      }

     // descobrir o maior valor hora entre os colaboradores
     debugger
     let maiorValorHora = 0;
     for (let i = 0; i < quantidade; i += 1) {
        // pegando do vetor de horas o elemento que esta na posicao do indice percorrido
        let valorHora = valores[i];

        if(valorHora > maiorValorHora) {
            maiorValorHora = valorHora;
        }

     }

     // descobrir colaborador com maior salario
     let maiorSalario = 0;
     let nomeMaiorSalario = "";
     // percorrer o vetor de salarios para descobrir o maior salario
     // armazenando na variavel o maior salario e nome de quem possui o maior salario
     for (let i = 0; i < quantidade; i += 1) {
        let salario = salarios[i];
        let colaborador = colaboradores[i];
        //
        if (salario > maiorSalario) {
            maiorSalario = salario;
            nomeMaiorSalario = colaborador;

        }

        // forma alternativa
        // if (salarios[i] > maiorSalario){
        //     maiorSalario = salarios[i];
        //     nomeMaiorSalario = colaboradores[i];
        // }

     }


     // descobrir quem tem o menor nome
     let colaboradorMenorNome = "ksjfhesfhekwfhrehgreghrekgrekgrhguerhrhrue";
     for (let i = 0; i < Quantidade; i += 1){
        let colaborador = colaboradores[i];


        if(colaborador.length < colaboradorMenorNome.length) {
            colaboradorMenorNome = colaborador;
        }
     }
   
     alert("o maior valor hora pago: " + maiorValorHora +
        "\nColaborador com maior salario: " + nomeMaiorSalario +
        "\nColaborador menor nome: " + colaboradorMenorNome

     );
}


function exemploMenu(){  
    let numeros = [];

    let opcaoMenu = parseInt(prompt('1 - cadastrar   2 - listar todos 3 - apresentar maior 10 - sair'));

    while (opcaoMenu !== 10){
        if (opcaoMenu === 1) {
            let numero = parseInt(prompt("digite o numero"));
            numeros.push(numero);
            alert("numero cadastrado com sucesso");
        } else if(opcaoMenu === 2) {
            let texto = "numeros cadastrados: \n";
            for (let i = 0; i < numeros.length; i += 1) {
                let numero = numeros[i];
                texto = texto + numero + "\n";
            }
            alert(texto);
        } else if (opcaoMenu === 3){
            debugger
            let maiorNumero = 0;
            for (let i = 0; i < numeros.length; i += 1) {
                if(numeros[i] > maiorNumero) {   
                    maiorNumero = numeros[i];
                }

            }

            alert("maior numero: " + maiorNumero);

        }

        opcaoMenu = parseInt(prompt('1 - cadastrar 2 - listar todos 3 - apresentar maior 10 - sair'));

    }

    alert("obrigado por utilizar nosso sistema");
}


function exercicio01(){
    let nomes = [];


    for(let i = 0; i < 3; i += 1){
        nomes.push(prompt("digite o nome"));
     }

     for(let i = 0; i < 3; i +=1){
        alert(nomes[1]);
     }
     
}



