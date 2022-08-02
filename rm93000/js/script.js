// Comentário de uma linha
/**
 * Comentário de múltiplas linhas
 */

console.log("Olá Mundo!") // - imprime no console
document.write("Olá Mundo") // - imprime na tela

//HOISTING - Ocorre quando uma variável é declarada e atribuída antes de ser utilizada
nome = "Tiffa" //nome foi declarado na linha 16 mas é possível usar por conta de como o var funciona
console.log(nome)

sobrenome = "Lockheart" // declarado na linha 19 mas não se pode usar porque é Let

//Variáveis
var nome = "Cloud" // escopo global
// Escopo global  - Tudo que está fora do bloco - Ex: window (aba do navegador)

let sobrenome = "Stryfe" // escopo local
// Escopo local - Tudo que está dentro do bloco - Ex: if, for while

const idade = 25 // não pode ser alterada


