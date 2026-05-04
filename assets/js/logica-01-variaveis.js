function exemploMensagem(){
    alert("hello word minha primeira mensagem 'elias'")
}

function exemploString(){
    // criando a variavel
    let nome = "elias";
    let sobrenome = "otto com dois t";

    // alterar o valor da variavel sobrenome
    sobrenome = "otto";

    // apresentando a variavel
    alert(nome)
    alert(sobrenome)

}

function exemploStringConcatenacao(){
    let nomeproduto = "sabao em po";
    let marcaproduto = "omo"; 


    // concatenacao: juntar um string(texto)com alguma outra coisa
    // "sabao em po" + " " => "sabao em po "
    // "sabao em po " + "omo" => "sabao em po omo"
    let texto = nomeproduto + " " + marcaproduto;

    alert(texto);

} 

function exemploNumeroInteiro() {
    debugger
    let produto = "pc gamer da xuxa";
    let quantidadePcs = 16;
    let quantidadeMemoriaPorPc = 8;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPc;

    // "\n" serve para quebrar a linha
    alert(
        "produto: " + produto +
        "\nquantidade de pcs: " + quantidadePcs +
        "\nMemoria Ram por pc: " + quantidadeMemoriaPorPc + "GB" +
        "\ntotal de GB dos pcs: " + totalGb + "GB"
    );
}


function exemploFloat(){
    let endereco = "rua xv de novembro"; // string
    let largura = 12.20;
    let comprimento = 45.50;
    let metroquadrado = largura * comprimento;

    alert("m² do terreno: " + metroquadrado);
}

function exemploBoolean(){
    // quando entra na empresa
    let tenhoferiasvencidas = false;

    //completei 1 ano na empresa
    tenhoferiasvencidas = true;

    alert("ferias vencidas? " + tenhoferiasvencidas);
}

function calcularSalario(){
    debugger
    let colaborador = "Judity Silva";
    let email = "judity.gamer@gg.com";
    let valorHora = 150.60; // por hora de streaming
    let horasPorMes = 50;
    let beneficioDonate = 3500.98;

    // calcular o salário bruto
    let salarioBruto = valorHora * horasPorMes;

    // calcular o salário líquido
    let salarioLiquido = salarioBruto + beneficioDonate;

    alert(
        "colaborador: " + colaborador + "\n" +
        "email: " + email + "\n" +
        "valor por hora: R$ " + valorHora.toFixed(2) + "\n" +
        "horas por mes: " + horasPorMes + "h\n" +
        "salario bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
        "beneficio donate: R$ " + beneficioDonate.toFixed(2) + "\n" +
        "salario liquido: R$ " + salarioLiquido.toFixed(2)
    );
}

function calcularTempoMes(){
    let segundosPorMinuto = 60;
    let minutosPorHora = 60;
    let horasPorDia = 24;

    let segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;

    alert(
        "Segundos por minuto: " + segundosPorMinuto +
        "\nMinutos por hora: " + minutosPorHora +
        "\nHoras por dia: " + horasPorDia +
        "\nSegundos por dia: " + segundosPorDia
    );
}
 






 