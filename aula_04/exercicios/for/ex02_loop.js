const leia = require("readline-sync");
let numero,
  par = 0,
  impar = 0;

for (let i = 1; i <= 10; i++) {
  numero = leia.questionInt(`\nDigite o ${i} numero: `);

  if (numero % 2 == 0) {
    par++;
  } else if (numero % 2 != 0) {
    impar++;
  } else {
    console.log("\nValor invalido. Tente novamente.");
    process.exit(0);
  }
}

console.log(
  `\nForam digitados ${par} numeros pares e ${impar} numeros impares.`
);
