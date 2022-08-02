//console.log("Olá Mundo!")


//HOISTING - Ocorre quando uma variável é declarada e atribuída antes de ser utilizada
//nome = "Geldo"
//console.log(nome)

//sobrenome = "vagabundo nato"
//console.log (nome + sobrenome)

//Variáveis

//var - variavel de escopo global
//Escopo global - Tudo que está fora do bloco
//Exemplo de escopo global - window
//var nome = "Erick"

//let - Variável de escopo local
//Escopo local - tudo que está dentro do bloco 
//Exemplo de escopo local - if, for, while
//let sobrenome = "Soares"

//Constante - Não pode ser alterada 
//const idade = 18

//Objeto - Coleção de chaves e valores
//Exemplo de objeto
//const pessoa = {
//    nome: "Erick",
//    sobrenome: "Soares",
//    idade: 18,
//    vendendo: true
//}
//pessoa.nome = "Geldo"
//pessoa.sobrenome = "Vagabundo Nato"
//pessoa.idade = 19
//pessoa.vendendo = false 
//console.log(pessoa)


//JSON - JavaScrit Object Notation
const pessoa = {
    nomeTask: "",
    dtTask: "",
    descTask: ""
}

//Pegando os dados do Formulário
//Aqui estamos pegando os dados do formulário e salvando no objeto
//arrow function
//const pegarDados = () => {
//    pessoa.nmTask = document.getElementById("nmTask").value
//    pessoa.dtTask = document.getElementById("dtTask").value
//   pessoa.descTask = document.getElementById("descTask").value

//    exibirDados()
//}

//exibindo os dados do objeto
function exibirDados() {
    console.log(pessoa)
}

//Recuperando o botão
//const btn = document.getElementById("btnEnviar")
const btn = docuemnt.getElementById("btnEnviar")
btn.addEventListener("click", ()=> {
    
    pessoa.nmTask = document.getElementById("nmTask").value
    pessoa.dtTask = document.getElementById("dtTask").value
    pessoa.descTask = document.getElementById("descTask").value

    exibirDados()
})