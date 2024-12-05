const leia = require("readline-sync");
let n1,
  n2

n1 = leia.questionInt(`\nDigite o primeiro numero: `);
n2 = leia.questionInt(`\nDigite o segundo numero: `);

if(n1 > n2) {
    console.log("\nIntervalo invalido! >:(")
    process.exit(0);
}

for (let i = n1; i <= n2; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} eh multiplo de 3 e 5`);
  }
}