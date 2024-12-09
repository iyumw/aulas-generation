import readlinesync = require('readline-sync');
import { Queue } from './queue';

const fila = new Queue<string>()

fila.enqueue("Amanda")
fila.enqueue("Danielle")
fila.enqueue("Helena")
fila.enqueue("Isis")

//fila.enqueue(readlinesync.question("Digite seu nome: "))

fila.printQueue()

console.log("\n",fila.contains("Danielle"))

console.log("\n",fila.count(), "\n")

fila.dequeue()
fila.printQueue()

console.log("\n",fila.peek()) // mostra o próximo da fila, sem retirar