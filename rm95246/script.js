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

//Gravando dados do Formulário no Objeto
const pessoa = {
    nmTask: "",
    dtTask: "",
    descTask: "",
}

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