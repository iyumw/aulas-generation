import readlinesync = require('readline-sync');

let raio: number = readlinesync.questionFloat("Digite o raio do circulo: ");

let area: number = parseFloat((Math.PI * Math.pow(raio, 2)).toFixed(2));

console.log("Area do circulo: ", area);