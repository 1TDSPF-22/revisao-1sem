
// Comentario de uma linha

/**
 * Comentario de multiplo blocos
 */

// console.log('Olá mundo') // Imprime na tel
// document.write() -Imprime na tela

// Hoisting - Ocorre quando uma variavel é declarada e atribuido antes de ser utilizado
///nome = "Igor mão de Pedreiro"
//console.log(nome)



// Variaveis

// var - variavel de escopo global
// exemplo de escopo global = window
var nome = "João"

// let - variavel de escopo local
// escopo local - Tudo que está dentro do bloco
// Exemplo de escopo local - if, while, for
let sobrenome = "Silva"

// const - não pode ser alterado
const idade = 20
/*
const pessoas = {
    nome: "João",
    sobrenome: "Silva",
    idade: 20,
    vendendo: true,
}

// JSON - JavaScript Object Notation
// Exemplo de JSON
const pessoaJSON = JSON.stringify(pessoa)

*/

//


// Pegando os dados do formularip
/*function pegarDados(){
    
}*/
/*
// Exibir os dados do Objto
function exibirDados(){
    console.log(pessoa)
}

consst btn - document.getElementById("btnEnviar")
btn.addEventListener("click", ()=> {
    pessoa.nmTask = document.getElementById("nmTask").value
    pessoa.dtTask = document.getElementById("dtTask").value
    pessoa.descTask = document.getElementById("descTask").value

    exibirDados()
})

*/

// Declarando um array
const pessoas = []

const btn = document.querySelector('#btnEnviar')
btn.addEventListener("click", ()=> {
    const pessoa = {
        nmTask: "",
        dtTask: "",
        descTask: ""
    }

    pessoa.nmTask = document.getElementById("nmTask").value
    pessoa.dtTask = document.getElementById("dtTask").value
    pessoa.descTask = document.getElementById("descTask").value

    // Adicionando os dados do OBjeto no array
    pessoas.push(pessoas)

} )

// Iterando o array
const exibirDados = () => {
    for (let i = 0; i < pessoas.length; i++){
        console.log(pessoas[i])
    }
}

const btnListar = document
.querySelector("#btnListar")
btnListar
btnListar.addEventListener("click", ()=> {
    exibirDados()
})