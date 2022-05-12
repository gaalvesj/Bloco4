//let num1 = 5;
//let num2 = 7;

//console.log(num1 + num2);
//console.log(num2 - num1);
//console.log(num1 * num2);
//console.log(num1 / num2);
//console.log(num1 % num2);


//2-Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
//const num1 = 30;
//const num2 = 24;

//if (num1 > num2){
//    console.log(num1);
//} else {
//    console.log(num2);
//}



//3-Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
//const num1 = 1000;
//const num2 = 600;
//const num3 = 554;


//if (num1 > num2 && num1 > num3){
//    console.log(num1);
//} else if (num2 > num1 && num2 > num3){
   // console.log(num2);
//} else {
//    console.log(num3);
//}


//4-Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
//const Numero = 0;

//if (Numero == 0){
//    console.log("Negativo")
//} else if  (Numero > 10){
//    console.log("positivo")
//} else {
 //   console.log("Negativo")
//}






//-5 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo.

const angulo1 = 130;
const angulo2 = 30;
const angulo3 = -10;
const somaDosAngulos = 180;

if (angulo1 , angulo2 , angulo3 < 0){
   console.log("ERRO")
} else if (angulo1 + angulo2 + angulo3 == somaDosAngulos){ 
   console.log("True")
} else {
   console.log("False")
}
