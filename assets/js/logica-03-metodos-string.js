function exemploToLowerCase() {
    let nome = "John Doe";
    let nomeMinusculo = nome.toLowerCase();

    console.log("Nome minusculo: " + nomeMinusculo);

}


function exemploToUpperCase(){
    let nome = "john Doe";
    let nomeMaiusculo = nome.toUpperCase();

    console.log("Nome maiusculo: " + nomeMaisuculo);
}


function exemploTamanho(){
    let nome = "John Doe";
    let quantidadeDeCaracteres = nome.length;

    console.log("Texto: '" + nome + "'");
    console.log("Quantidade de caracteres: " + quantidadeCaracteres);
}


function exemploSubstituicao(){
    let texto = "abacate, uva, maca, pera";
    let textoCorrigido = texto.replace("maça", "maça");

    console.log("texto: " + texto);
    console.log("texto Corrigido: " + textoCorrigido);
}

function exemploSubstituicaoPropriaVariavel(){
    let texto = prompt("Digite o preço"); // => "450.39"
    // "R$ 450,39" => "450.39"
    texto = texto.replace(",", ",",); // "R$ 450,39" => "R$ 450.39"
    texto = texto.replace("R$", "");
    texto = texto.replaceALL(" ", "");

    console.log("Texto sanitizado:" + texto);

}

function removerEspacoDoFim(){
    let texto = "     o batman vive a noite, de dia ele dorme     " ;

    console.log("o texto original: '" + texto + "'");
     
    texto = texto.trimEnd();
    console.log("o texto sem espaços no fim: '" + texto + "'");
}

function removerEspacoDoComeco(){
    let texto = "    o batman vive a noite, de dia ele dorme     ";

    console.log("o texto original: '" + texto + "'");


    texto = texto.trimStart();
    console.log("o texto sem espaços no começo: '" + texto + "'");

}

function removerEspacosDoComecoFinal(){
    let texto = "   o batman vive a noite, de dia ele dorme     ";

    console.log("o texto original: '" + texto + "'");

    // texto = texto.trimStart().trimEnd();
    texto = texto.trim();

    console.log("o texto sem espaços no começo: '" + texto + "'");

}

function agregarCaracteresFim(){
    let nome = "Paulo C";
    console.log("Nome do cartao: " + nome.padEnd(20,  "*"));
}

function agregarCaracteresComeco(){
    let finalCartaoCredito = "7292";
     
    console.log("Cartao de credito: " + finalCartaoCredito.padStart(12, "*"));

}

function verificarSeComecaCom(){
    let texto = prompt("Digite um nome");

    //verificar se começa com a letra p
    if(texto.toUpperCase().starswith("P") === true) {
        alert("começa com a letra 'p', pois tem a senha secreta");
    } else {
        alert("nao pode entrar na festa");
    }

}

function verificarSeContem(){
    let nomeEpisodio = prompt("Digite o nome do episodio");

    //verificar se e primeira temporada "S01", exemplo "lost S01E04"
    if (nomeEpisodio.includes("S01") === true ) {
        alert("primeira temporada");
    } else if (nomeEpisodio.includes("S02") === true) {
        alert("segunda temporada");
    }else {
        alert("ao infinito e alem");
    }
}

function verificarSeTerminaCom(){
    //verificar se termina com 'chocolate'

    let bolo =  prompt("Digite o nome do bolo");

    if (bolo.endsWith("chocolate") === true) {
        alert("boa escolha");
    } else {
        alert("nao como outro bolo");
    }
}

function pegarPosicao(){
    let fruta = "abacate";
    let primeiroCaracter = fruta[0];

    console.log("fruta: " + fruta + "\nPrimeira posicao: " + primeiroCaracter);
}

function quebraString(){
    // string   01234
    let horaMinuto = "20.30";

    let partes = horaMinuto.split(":");
    //
    // split => ["20", "30"]

    console.log(partes);

    let hora = partes[0];
    let minuto = partes[1];
    console.log("hora: " + hora);
    console.log("minuto: " + minuto);
}

function exemploPegarPartesDaString(){
    let nomeCompleto = "Ruan Costa";
    // ruan costa
    // R => 0 (começa aqui)
    // u => 1
    // a => 2
    // n => 3
    //   => 4 (para nesta posicao)
    // C => 5 (começa aqui)
    // o => 6
    // s => 7
    // t => 8
    // a => 9

    let nome = nomeCompleto.slice(0, 4); // "ruan"
    let sobreNome = nomeCompleto.slice(5, 10);
}

function pegarIndiceDoCaracter(){
    let texto = "abacate uva pera";

    let ultimoIndiceDoEspaco = texto. lastindexOf(" ");

    let ultimaPalavra = texto.slice(ultimoIndiceDoEspaco + 1, texto.length);
    console.log(texto);
    console.log(ultimaPalavra);
}

function descobrirIndiceDoCaracter(){
    //           0123456789.......
    let numeroCartao = "3010 2039 2019 2030";

    let indicePrimeiroEspaco = numeroCartao.indexOf(" ");

    let primeiraParteCartao = numeroCartao.slice(0, indicePrimeiroEspaco);

    console.log("cartao: " + numeroCartao);
    console.log("primeira parte do cartao: " + primeiraParteCartao);
}










