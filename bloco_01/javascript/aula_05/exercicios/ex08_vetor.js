const leia = require('readline-sync');

let soma = 0, media = 0;
let elementosPar = [];
let indiceImpar = [];

// Inicializa o vetor de 10 posições
let numeros = new Array(10);

// Preenche o vetor com números fornecidos pelo usuário
for (let i = 0; i < 10; i++) {
    numeros[i] = leia.questionInt(`\nDigite o ${i + 1} numero: `);
    soma += numeros[i]; // Soma os elementos enquanto os lê

    // Verifica se o número é par
    if (numeros[i] % 2 === 0) {
        elementosPar[elementosPar.length] = numeros[i];
    }
}

// Coleta os elementos nos índices ímpares
for (let i = 1; i < numeros.length; i += 2) {
    indiceImpar[indiceImpar.length] = numeros[i];
}

// Calcula a média
media = soma / numeros.length;

// Exibe os resultados
console.log(`\nA soma dos números é: ${soma}`);
console.log(`A média dos números: ${media.toFixed(2)}`);
console.log(`Números pares: ${elementosPar.join(", ")}`);
console.log(`Elementos nos índices ímpares: ${indiceImpar.join(", ")}`);

