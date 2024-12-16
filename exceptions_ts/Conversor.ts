try {
const resultado = converte(123);

console.log(resultado);
} catch(error : any) {
    if (error instanceof TypeError)
        console.error("Erro no tipo da mensagem")
    console.error("\nErro inesperado!", error.message);
}

export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}