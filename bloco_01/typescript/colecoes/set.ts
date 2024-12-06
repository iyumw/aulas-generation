const frutas: Set<string> = new Set<string>();

frutas.add('Maçã');
frutas.add('Morango');
frutas.add('Manga');
frutas.add('Kiwi');
frutas.add('Banana');

console.table(frutas);

// Verifica se existe no Set 
console.log("A fruta Caqui existe? ", frutas.has("Caqui"))

// Remove uma fruta
frutas.delete('Banana');
console.table(frutas);

// Converte o Set em um Array e ordena-o
let setOrdenado: Array<string> = Array.from(frutas).sort();
console.table(setOrdenado);