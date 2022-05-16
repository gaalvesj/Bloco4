//posicao da rainha teste
let linhaRainha = 0;
let colunaRainha = 0;

//posicao do bispo teste
let linhaBispo = 5;
let colunaBispo = 5;

//identifica se o ataque foi bem sucessido ou nao
let podeAtacar = false;

// verifica se esta na mesma linha e mesma coluna
 if (linhaRainha === linhaBispo || colunaRainha === colunaBispo){
     podeAtacar = true;
 }

// verifica se esta na mesma diagonal
for (let passos = 1; passos <= 7 ; passos +=1 ){
    let linhaRainhaClone = linhaRainha + passos;
    let colunaRainhaClone = colunaRainha + passos;
    console.log(linhaRainhaClone, colunaRainhaClone)
   if(linhaRainhaClone > 7 || colunaRainhaClone > 7){
       break;
   }


    if(linhaRainhaClone === linhaBispo && colunaRainhaClone === colunaBispo) {
        podeAtacar = true;
        console.log ("Ataque bem sucedido na diagonal.")
        break;
    }

}

console.log(podeAtacar);