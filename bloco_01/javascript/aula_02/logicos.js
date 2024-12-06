const leia = require('readline-sync')

const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("====== Login =====")

let usuarioLogin = leia.question("Digite seu usuario: ")
let senhaLogin = leia.question("Digite sua senha: ", {
    hideEchoBack: true,
})

if (senhaLogin === senha && usuarioLogin === usuario) {
    var mensagem = "\nUsuario autenticado com sucesso! :D"
} else {
    var mensagem = "\nSeu usuário ou senha está incorreto. Tente novamente"
} 

console.log(mensagem)

if(!isBlock){
    console.log("\nUsuario ativo! B)")
} else {
    console.log("\nUsuario bloqueado. Contate um administrador >:(")
    process.exit(0)
}

if(isAdmin || isGerente){
    console.log("\nAcesso ao painel administrativo liberado!")
} else {
    console.log("\nAcesso ao painel administrativo negado!")
}