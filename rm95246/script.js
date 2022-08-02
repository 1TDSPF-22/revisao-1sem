//Comentário de uma linha

/**
 * Comentário de múltiplas linhas
 */

//console.log() - Imprime no console
//console.log("Olá Mundo!")

//document.write() - Imprime na tela
//document.write("Olá Mundo!")

//HOISTING - Ocorre quando uma variável é declarada e atribuída antes de ser utilizada
//nome = "Biscoito"
//console.log(nome)

//sobrenome = "de Polvilho"
//console.log(nome + " " + sobrenome)

//Variáveis

//Variável de escopo global
//Escopo global - Tudo que está fora do bloco
//Exemplo de escopo global - window
//var nome = "João"

//let - variável de escopo local
//Escopo local - Tudo que está dentro do bloco
//Exemplo de escopo local - if, for, while
//let sobrenome = "Silva"

//Constante - Não pode ser alterada
//const idade = 20

//Objeto - Coleção de chaves e valores
//Exemplo de objeto
//const pessoa = {
    //nome: "João",
    //sobrenome: "Silva",
    //idade: 20,
    //vendedor: true,
    //}
//pessoa.nome = "Biscoito"
//pessoa.sobrenome = "de Polvilho"
//pessoa.idade = 30
//pessoa.vendedor = false
//console.log(pessoa)

//pessoa.idade = 40
//console.log(pessoa)


//JSON - Javascript Object Notation

//Pegando os dados do Formulário
//Aqui estamos pegando os dados do formulário e salvando no objeto
//Arrow function - função anônima
//const pegarDados = () =>{
    //pessoa.nmTask = document.getElementById("nmTaskId").value 
    //pessoa.dtTask = document.getElementById("dtTaskId").value
    //pessoa.descTask = document.getElementById("descTaskId").value

   // exibirDados()
//}

//Exibindo os dados do Objeto
//function exibirDados(){
    //console.log(pessoa)
//}

//Recuperando o botão
//const btn = document.getElementById("btnEnviar")
//const btn = document.querySelector("#btnEnviar")
//btn.addEventListener("click",  () => {
    //pessoa.nmTask = document.getElementById("nmTaskId").value 
    //pessoa.dtTask = document.getElementById("dtTaskId").value
    //pessoa.descTask = document.getElementById("descTaskId").value

    //exibirDados()
//})

//Gravando dados do Formulário no Objeto
//const pessoa = {
    //nmTask: "",
    //dtTask: "",
    //descTask: "",
//}

//Declarando um array
const pessoas = []

const btnListar = document.querySelector("#btnListar")
btnListar.addEventListener("click",  () => {
    const pessoa = {
        nmTask: "",
        dtTask: "",
        descTask: "",
    } 

    //Pegando os dados do formulário
    pessoa.nmTask = document.getElementById("nmTaskId").value 
    pessoa.dtTask = document.getElementById("dtTaskId").value
    pessoa.descTask = document.getElementById("descTaskId").value

//Adicionando os dados do Objeto no Array
    pessoas.push(pessoa)  
})

//Exibindo os dados do objeto
const exibirDados = () =>{
//Interando o Array com for simples
//for (let i = 0; i < pessoas.length; i++){
    //console.log(pessoas[i])
    //}
//}

//Iterando o Array com (for of)
//for (let pessoa of pessoas){
    //console.log(pessoa.nmTask)
//}

//Iterando o Array com (for in)
//for (let indice in pessoas){
    //console.log(pessoas[indice].nmTask)
//}

//Iterando o Array com (forEach)
//pessoas.forEach(task => {
    //console.log(task.nmTask)
//})
//}

//Atrelando o evento ao click do botão
const btnListar = document.querySelector("#btnListar")
btnListar.addEventListener("click", () => {
exibirDados()
})
}