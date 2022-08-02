// Comentário de uma linha
/**
 * Comentário de múltiplas linhas
 */

// console.log("Olá Mundo!") // - imprime no console
// document.write("Olá Mundo") // - imprime na tela

// //HOISTING - Ocorre quando uma variável é declarada e atribuída antes de ser utilizada
// nome = "Tiffa" //nome foi declarado na linha 16 mas é possível usar por conta de como o var funciona
// console.log(nome)

// sobrenome = "Lockheart" // declarado na linha 19 mas não se pode usar porque é Let

// //Variáveis
// var nome = "Cloud" // escopo global
// // Escopo global  - Tudo que está fora do bloco - Ex: window (aba do navegador)

// let sobrenome = "Stryfe" // escopo local
// // Escopo local - Tudo que está dentro do bloco - Ex: if, for while

// const idade = 25 // não pode ser alterada

// Objeto - Coleção de chaves e valores
// const pessoa = {
//     nome: "Cloud",
//     sobrenome: "Stryfe",
//     idade: 25,
//     warrior: true,

//     setIdade: function(idadeNova){
//         this.idade = idadeNova
//     },
//     setSobrenome: function(sobrenomeNovo){
//         this.sobrenome = sobrenomeNovo
//     }
// }

// pessoa.nome = "Tiffa"
// pessoa.sobrenome = "Lockheart"
// console.log(pessoa)

// JSON - JavaScript Object Notation
// Exemplo de JSON

// Gravando os dados do Formulário no objeto
const pessoa = {
    nmTask: "",
     dtTask: "",
     descTask: ""
}

// Exibindo os dados do Objeto
// Arrow function - Função anônima - mais rápida / digita menos
// const pegarDados = () => {
//     pessoa.nmTask = document.getElementById("nmTaskId").value
//     pessoa.dtTask = document.getElementById("dtTaskId").value
//     pessoa.descTask = document.getElementById("descTaskId").value

//     exibirDados()
// }

// Exibindo os dados do Objeto
// function exibirDados() {
//     console.log(pessoa)
// }

// // Recuperando o botão
// // const btn = document.getElementById("btnEnviar")
const btn = document.querySelector("#btnEnviar")

// btn.addEventListener("click", () => {
//         pessoa.nmTask = document.getElementById("nmTaskId").value
//         pessoa.dtTask = document.getElementById("dtTaskId").value
//         pessoa.descTask = document.getElementById("descTaskId").value
    
//         exibirDados()
//     }
// )

// Declarando um array
const pessoas = []

const btnLista = document.querySelector("#btnListar")

btn.addEventListener("click", ()=>{
    // Criando um novo objeto
    const pessoa = {
        nmTask: "",
        dtTask: "",
        descTask: ""
    }
    

    // Pegando os dados do formulário
    pessoa.nmTask = document.getElementById("nmTaskId").value
    pessoa.dtTask = document.getElementById("dtTaskId").value
    pessoa.descTask = document.getElementById("descTaskId").value

    //Adicionando os dados do Objeto no Array
    pessoas.push(pessoa)
})

// Exibindo dados do objeto
const exibirDados = () => {
    // Iterando o array
    // for (let i = 0; i < pessoas.length; i++){
    //     console.log(pessoas[i])
    // }
    // Iterando com for of
    // for (pessoa of pessoas){
    //     console.log(pessoa)
    // }
    // Iterando com for in
    for (let indice in pessoas) {
        console.log(pessoas[indice])
    }

}

btnLista.addEventListener("click", () => {
    exibirDados()
})