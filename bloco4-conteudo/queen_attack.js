//posicao da rainha teste
let linhaRainha = 0;
let colunaRainha = 0;
let diagonalRainha = 0;
//posicao do bispo teste
let linhaBispo = 3;
let colunaBispo = 3;
let diagonalBispo = 3;
//identifica se o ataque foi bem sucessido ou nao
let podeAtacar = false;

// verifica se esta na mesma linha
 if (linhaRainha === linhaBispo || colunaRainha === colunaBispo){
     podeAtacar = true;
 }
 console.log(podeAtacar);

// verifica se esta na mesma diagonal
if (diagonalRainha === diagonalBispo){
    podeAtacar = true;
} 
console.log (podeAtacar);