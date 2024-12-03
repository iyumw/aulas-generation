const leia = require('readline-sync');
let  n1, n2;
n1 = leia.questionInt("Insira o primeiro numero: ")
n2 = leia.questionInt("Insira o segundo numero: ")

console.log("\nA soma é igual a:",n1, " + ", n2, " = ", n1+n2)
console.log("A subtração é igual a:",n1, " - ", n2, " = ", n1-n2)
console.log("A multiplicação é igual a:",n1, " * ", n2, " = ", n1*n2)
console.log("A potênciação é igual a:",n1, " ^ ", n2, " = ", Math.pow(n1, n2))
console.log("A raiz quadrada de ", n1," = ", Math.sqrt(n1))

if(n2 == 0){
    console.log("Não é possível fazer a divisão por 0")
} else {
    console.log("A divisão é igual a:",n1, " / ", n2, " = ", n1/n2)
}