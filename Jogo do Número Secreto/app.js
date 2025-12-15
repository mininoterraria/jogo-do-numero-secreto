function gerarNumeroAleatorio(){ //Função que gera o número aleatório em um intervalo específico.
    return Math.floor(Math.random() * 10) + 1;
}

let numeroAleatorioGerado = gerarNumeroAleatorio();
console.log(numeroAleatorioGerado);
let tentativas = 1; //Variável que armazena a quantidade de tentativas em um jogo.
const numerosGerados = []; //Lista que armazena os valores já sorteados, reiniciada quando todos os valores do intervalo são sorteados.

function verificarNumeroGerado(){ //Função para fazer a verificação dos valores aleatórios gerados.
    while(numerosGerados.includes(numeroAleatorioGerado)){
        numeroAleatorioGerado = gerarNumeroAleatorio();
    } 

    numerosGerados.push(numeroAleatorioGerado);  

    if(numerosGerados.length === 10){
        numerosGerados.length = 0;
    }
}

verificarNumeroGerado();

function exibirTexto(seletor,texto){ //Exibe o texto da aplicação.
    document.querySelector(seletor).innerHTML = texto;
}

function alterarEstadoBotao(idBotao1,idBotao2){ //Altera o estado dos botões.
    document.getElementById(idBotao1).disabled = true;
    document.getElementById(idBotao2).disabled = false;
}

function limparInput(){ //Função que limpa o campo a cada input.
   document.querySelector('.container__input').value = '';
}


function verificarChute(){ //Função que verifica se o usuário acertou ou errou o chute.
    console.log(numerosGerados);
    let chute = document.querySelector('.container__input').value;

    chute = Number(chute);

    limparInput();

    if(chute < 1 || chute > 10){
        exibirTexto('p','Insira apenas um número de 1 à 10!');
        return;
    }   
    
    if(chute < numeroAleatorioGerado){
        exibirTexto('p','Errou! O número secreto é maior!');
        tentativas++;
    }else if(chute > numeroAleatorioGerado){
        exibirTexto('p','Errou! O número secreto é menor!')
        tentativas++;
    }else{
        exibirTexto('p',`Parabéns! Você descobriu o número secreto em ${tentativas} tentativas(s)!`);
        alterarEstadoBotao('chutar','reiniciar');
    }

}

function reiniciarJogo(){ //Função que reinicia o jogo.
    tentativas = 1;
    verificarNumeroGerado();
    alterarEstadoBotao('reiniciar','chutar');
    exibirTexto('p','Escolha um número entre 1 e 10.');
    limparInput();
}

//Pagina inicial do jogo.
exibirTexto('h1','Jogo do número secreto');
exibirTexto('p','Escolha um número entre 1 e 10.');


