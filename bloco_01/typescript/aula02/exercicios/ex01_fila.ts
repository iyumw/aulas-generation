import readlinesync = require('readline-sync');
import { Queue } from '../fila/queue';

const fila = new Queue<string>();
let opc = 1

while(opc != 0) {
    console.log("\n", "-".repeat(30) ,"\n")
    console.log("1 - Adicionar cliente na fila")
    console.log("2 - Listar todos os clientes")
    console.log("3 - Retirar cliente da fila")
    console.log("0 - Sair\n")
    console.log("-".repeat(30) ,"\n")
    opc = readlinesync.questionInt("Escolha uma opcao: ")

    switch(opc) {
        case 0:
            console.log("\nPrograma encerrado!")
            break
        case 1:
            fila.enqueue(readlinesync.question("\nDigite o nome do cliente a ser adicionado: "))
            console.log("\nCliente adicionado com sucesso!")
            break
        case 2:
            console.log("\nClientes na fila:\n")
            fila.printQueue()
            break
        case 3:
            const cliente = fila.dequeue()
            if(cliente) {
                fila.printQueue()
                console.log("\nCliente retirado: ", cliente)
            }
            break
        default:
            console.log("\nOpcao invalida!")
            break
    }
}