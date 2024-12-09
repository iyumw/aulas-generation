import readlinesync = require('readline-sync');
import { Stack } from '../pilha/pilha';

const pilha = new Stack<string>
let opc = 1

while(opc != 0) {
    console.log("\n", "-".repeat(30) ,"\n")
    console.log("1 - Adicionar livro na pilha")
    console.log("2 - Listar todos os livros")
    console.log("3 - Retirar livro da pilha")
    console.log("0 - Sair\n")
    console.log("-".repeat(30) ,"\n")
    opc = readlinesync.questionInt("Escolha uma opcao: ")

    switch(opc) {
        case 0:
            console.log("\nPrograma encerrado!")
            break
        case 1:
            pilha.push(readlinesync.question("\nDigite o nome do livro a ser adicionado: "))
            console.log("\nLivro adicionado!")
            break
        case 2:
            console.log("\nLivros na pilha:\n")
            pilha.printStack()
            break
        case 3:
            const livro = pilha.pop()
            if(livro){
                pilha.printStack()
                console.log("\nLivro retirado: ", livro)
            }
            break
        default:
            console.log("\nOpcao invalida!")
            break
    }
}