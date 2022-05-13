//const notaFinal = [];


//if (notaFinal >= 7 && notaFinal <=10){
//    console.log("Voce esta aprovado!");
//} else if (notaFinal < 5 && notaFinal >= 0) {
//    console.log("Voce esta reprovado!");
//} else if (notaFinal >=5 && notaFinal <7) {
//    console.log("Voce esta de recuperacão");
//}   else {
//    console.log ("Numero inválido!");
//}



//let pizzas = ["4 queijos","Frango com Catupiry","Marguerita" , "Palmito" ,"Chocolate"];
//pizzas.push ("Strogonoff")
//pizzas.push ("Brocolis")


//for (let index = 0; index < pizzas.length; index += 1){
//    console.log(pizzas[index])
//}




//let menu = ["Home", "Servicos" , "Portifolio" , "Links"];
//exercicio 3-//menu.push ("Contato");
//console.log(menu);

//Exercicio 2-//let indexOfPortfolio = menu.indexOf("Portifolio")
//console.log(indexOfPortfolio)

//Exercicio 1-//let menuServices =(menu[1]);
//console.log(menuServices);


//<-----For----->

//let cars = ["saab", "Volvo" , "BMW"]
//for (let index = 0; index < cars.length; index ++){
//    console.log(cars[index])
//}

//let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
//for (let index = 0; index < groceryList.length; index++){
//    console.log(groceryList[index])
//}


//<--------for/of--------->

//let numeros = [1,2,3,4,5,6];
//for(let numero of numeros){
//    console.log(numero)
//}

//let word = 'Hello';
//for (let index of word){
//    console.log(index)
//}

//let arrOfNumbers = [10, 20 , 30];
//for (let index of arrOfNumbers) {
//    index ++;
//    console.log(index);
//}

//exercicio 1:
//let names = ["Joao", "Maria", "Antonio", "Margarida"];
//for (let index of names) {
//    console.log(index)
//}


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