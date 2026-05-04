  function exemplo01(){

    let carros = [];

    carros.push("BMW m3"); // índice 0, posição Primeira posição

    carros.push("Byd Seal"); // índice 1, posição Segunda posição

    carros.push("Mobi"); // índice 2, posição Terceira

    carros.push("Chevet"); // índice 3, posição Quarta posição

    carros[3] = "Chevette";

    carros.splice(2, 1); // Apagar o Mobi

    alert("Quantidade de elementos: " + carros.length +
        "\nPrimeiro: " + carros[0] +
        "\nSegundo: " + carros[1] +
        "\nTerceiro: " + carros[2] // Chevette
    );
}

function exemplo02(){
    let alunos = [];
    let frequencias = [];
    let status = [];



    alunos.push(prompt("digite o nome do aluno"));
    frenquencias.push(parseInt(prompt("digite o percentual de frequencia")));

     alunos.push(prompt("digite o nome do aluno"));
    frenquencias.push(parseInt(prompt("digite o percentual de frequencia")));

    if (frequencias[0] >=  70) {
        status.push("aprovado");
    } else {
        status.push("reprovado");
    }

     if (frequencias[1] >=  70) {
        status.push("aprovado");
    } else {
        status.push("reprovado");
    }


    alert("alunos: " +
        "\nNome: " + alunos[0] +
        "\nFrequencia: " + frequencias[0] +
        "\nStatus: " + status[0] +
         "\nNome: " + alunos[1] +
        "\nFrequencia: " + frequencias[1] +
        "\nStatus: " + status[1] 
    )
    

}

function exercicio01(){
    let perfumes = [];
    debugger

    perfumes.push("Malbec");

    perfumes.push("Good Girl Carolina Herrera Eau de Parfum");

    perfumes.push("Egeo");

    perfumes.push("Euphoria Calvin Klein Eau de Parfum");

    perfumes.push("Bleu de Chanel Eau de Parfum");
   

    perfumes.splice(0, 1); 

     
    alert("lista de perfumes: " + perfumes.length +
        "\nPrimeiro: " + perfumes[0] +
        "\nSegundo: " + perfumes[1] +
        "\nTerceiro: " + perfumes[2] +
        "\nQuarto: " + perfumes[3] 
        

    );


}

function exercicio02(){
    debugger
    let materias = [];
    let cargaHoraria = [];
    let valoresHora = [];

   
    

    materias.push(prompt("digite o nome da materia"));
    cargaHoraria.push(parseInt(("")));
    valoresHora.push(parseFloat(""))

    

     





   

    






 
 







 



 








 




















}