import readlinesync = require('readline-sync');
import { Stack } from './pilha';

const pilha = new Stack<string>()

pilha.push("Prato azul")
pilha.push("Prato verde")
pilha.push("Prato vermelho")

//pilha.push(readlinesync.question("Digite um nome: "))

pilha.printStack()

console.log(pilha.contains("Prato verde"))

pilha.pop()
pilha.printStack()
