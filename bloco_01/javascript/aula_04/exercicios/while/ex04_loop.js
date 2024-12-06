const leia = require("readline-sync");

let numBackend = 0,
  numMulheresFrontend = 0,
  numHomensMobile40 = 0,
  numNBFullstack30 = 0,
  totalRespostas = 0,
  somaIdades = 0

while (true) {
    let idade = leia.questionInt("\nIdade: ")
    const genero = leia.questionInt("\n1. Mulher Cis \n2. Homem Cis \n3. Nao Binario \n4. Mulher Trans \n5.Homem Trans \n6. Outros \n\nSelecione uma identidade de genero: ")

    const tipoDev = leia.questionInt("\n1. Backend \n2. Frontend \n3. Mobile \n4. Fullstack \n\nQual o seu tipo de desenvolvimento? ")

    if (tipoDev === 1)
        numBackend++
    
    if (tipoDev === 2 && (genero === 1 || genero === 4))
        numMulheresFrontend++
    
    if (tipoDev === 3 && idade >= 40 && (genero === 2 || genero === 5))
        numHomensMobile40++
    
    if (tipoDev === 4 && idade >= 30 && genero === 3)
        numNBFullstack30++

    totalRespostas++
    somaIdades += idade

    let desejaContinuar = leia.question("Deseja continuar respondendo? (S/N): ").toUpperCase()
    if (desejaContinuar!== "S")
        break
}

let mediaIdades = somaIdades / totalRespostas

// Resultados
console.log("\n", "-".repeat(54) ,"\n")
console.log(`Total de pessoas desenvolvedoras Back-end: ${numBackend}`)
console.log(`Total de mulheres cis e trans desenvolvedoras Mobile, acima de 40 anos: ${numMulheresFrontend}`)
console.log(`Total de homens cis e trans desenvolvedores Fullstack, acima de 40 anos: ${numHomensMobile40}`)
console.log(`Total de pessoas nao-binarias desenvolvedoras Fullstack: ${numNBFullstack30}`)
console.log(`Total de respostas na pesquisa: ${totalRespostas}`)
console.log(`A media da idade das pessoas: ${mediaIdades.toFixed(2)}`)