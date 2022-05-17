//----MEGA SENA----

//let chatNumbers = [10 , 23 , 26, 18, 50, 49];
//let megaSenaNumbers = [10, 23 ,43 ,44 ,51 ,58]

//console.log("Jogo da galera: ");
//for (let index = 0; index < chatNumbers.length ; index += 1 ){
//    console.log (chatNumbers[index]);
//}

//console.log("Jogo da Mega Senna: ");
//for (let index2 = 0; index2 < megaSenaNumbers.length ; index2 += 1 ){
//    console.log (megaSenaNumbers[index2]);
//}

//let numberOfHits = 0;
//for (let index = 0; index < chatNumbers.length ; index += 1 ){
//       console.log (chatNumbers[index]);
//       for (let index2 = 0; index2 < megaSenaNumbers.length ; index2 += 1 ){
//             console.log (megaSenaNumbers[index2]);
//         if (chatNumbers[index] === megaSenaNumbers[index2]){
//             numberOfHits += 1; 
//         }
    
//        }                    
//}
//console.log("Jogo da galera: ",chatNumbers);
//console.log("Jogo da Mega: ",megaSenaNumbers);
//console.log('Numero de Acertos: ',numberOfHits);




// Refatorando o código

// 1 - Criar uma função para gerar um numero aleatorio de numero
//function generateRandomNumber () {
   // let randomNumber = Math.floor(Math.random()* 60) + 1;
 //   return randomNumber;
//}
//console.log (generateRandomNumber ());


// 2 - Gerar um jogo (Sortear os 6 números )

//function generateGame() {
 //   let megaSenaJogo = [];
  //  for (let index = 0; index <= 5; index += 1 ) {
   //     let megaSenaJogo[index] = generateRandomNumber ();
   // }
    //return megaSenaJogo
//}

//console.log(generateGame(index))


// 3 - conferir o jogo e compara com o resultado da mega sena

//let chatNumbers = [10 , 23 , 26, 18, 50, 49];
//let megaSenaNumbers = generateGame
//    let numberOfHits = 0;
 //   for (let index = 0; index < chatNumbers.length ; index += 1 ){
        //console.log (chatNumbers[index]);
   //    for (let index2 = 0; index2 < megaSenaNumbers.length ; index2 += 1 ){
            // console.log (megaSenaNumbers[index2]);
     //    if (chatNumbers[index] === megaSenaNumbers[index2]){
       //      numberOfHits += 1; 
         //}
        //}
        //return numberOfHits;
    //}



    // 4 - saida do jogo da gaelra , jogo da mega e numero de acertos 

//console.log("Jogo da galera:" , chatNumbers);
//console.log('Jogo da Mega', megaSenaNumbers);
//console.log("Acertos " ,checkNumberOfHits(chatNumbers,megaSenaNumbers));