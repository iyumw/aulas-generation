import readlinesync = require('readline-sync');

const cores: Array<string> = new Array<string>();

console.log("\n", "-".repeat(30) ,"Cores", "-".repeat(30), "\n")

for(let i = 0; i < 5; i++)
    cores.push(readlinesync.question("Digite uma cor: "))
    
for(let cor of cores)
    cor.toLowerCase()

console.log("\n", "-".repeat(67));
console.log("\nLista de todas as cores: ", cores);
console.log("\nCores ordenadas: ",cores.sort());