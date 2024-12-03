
let nome = "Isis";
let profissao = "Pessoa Desenvolvedora";
let salarioBruto = 3500.44;
const bonus = 0.05;

console.log("\nNome: ", nome);
console.log("\nProfissao: ", profissao);
console.log(
  "\nSalario Liquido: ",
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    bonus * salarioBruto + salarioBruto
  )
);

// console.log("O salario bruto do colaborador " + nome + " é " + salarioBruto)

console.log(`O salario bruto do colaborador ${nome} é ${salarioBruto}`)

// console.log("\nTipo da variável:", typeof nome)

// nome = 12

// console.log("\nNome: ", nome)

// console.log("\nTipo da variável:", typeof nome)
