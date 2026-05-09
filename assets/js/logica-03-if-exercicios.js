function exercicio01(){
    let nome = prompt("Digite o seu nome");
    
    let idade = prompt("Digite sua idade");

    if (idade < 18) {
        alert("Menor de idade");
    }

    else if (idade < 60) { 
       alert ("Adulto");
    }

} 

function exercicio02(){
    let numero = parseInt(prompt("informe um numero"));


   if (numero < 10){
       alert("menor que 10")
    }
    else {  (numero > 10) 
      alert("maior que 10");
     }
  
}

function exercicio03(){
    let numero = parseInt(prompt("digite um numero"));
    debugger


    if (numero <= 0) {
        alert("zero");
    }
    
    else  { (numero > 0)  
        alert("nao e zero");
    }
}




function exercicio04(){
    let numero = parseInt(prompt("digite um numero"));
    

    if (numero == 8001) {
        alert("é 8001");
    }
    else { (numero != 8001)
        alert("diferente de 8001");

    }
}

function exercicio05(){
    let numerosInteiro = parseInt(prompt("digite o numero"));

    
    if(numero > 0){
        alert("positivo");
    }

    else { (numero < 0)
        alert("negativo");

    }

}