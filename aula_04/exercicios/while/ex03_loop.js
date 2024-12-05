const leia = require("readline-sync");
let idade,
  menor21 = 0,
  maior50 = 0;
  continua = true;

while(continua === true) {
    idade = leia.questionInt("\nDigite a idade: ");

    if(idade <= 21){
        if(idade < 0){
            continua = false;
        } else {
            menor21++;
        }
    }  

    if(idade > 50)
        maior50++;
}

console.log(`\nQuantidade de pessoas com menos de 21 anos: ${menor21}`);
console.log(`\nQuantidade de pessoas com mais de 50 anos: ${maior50}`);