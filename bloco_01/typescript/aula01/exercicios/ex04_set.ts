import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>();

numeros.add(2);
numeros.add(5);
numeros.add(1);
numeros.add(3);
numeros.add(4);
numeros.add(9);
numeros.add(7);
numeros.add(8);
numeros.add(10);
numeros.add(6);

let n1:number = readlinesync.questionInt("\nDigite o numero que quer encontrar: ")


if(numeros.has(n1)){
    console.log(`\nO numero ${n1} foi encontrado!`)
} else {
    console.log(`\nO numero ${n1} não foi encontrado!`)
}


