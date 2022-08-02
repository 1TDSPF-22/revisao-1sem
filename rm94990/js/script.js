//console.log() - Imprime na tela
//console.log("Olá mundo!")

//document.write - Escreve na tela
//document.write("Olá mundo!")

//Variáveis
//Var - Variável de escopo global
//var nome = "João";

//let - variável de escopo local 
//let sobrenome = "Silva";

//Const - Não pode ser alterada
//const idade = 19;

//Objeto - Coleção de chaves e valores
//Exemplo

//const pessoa = {
//    nome: "João",
//    sobrenome: "Silva",
//    idade: 20,
//    trabalhando: false,
//}

//pessoa.nome = "Pedro"
//pessoa.sobrenome = "Sigma"
//pessoa.idade = 19
//pessoa.trabalhando = true
//console.log(pessoa)


//Gravando os dados do forms no objeto
const pessoa = {
    nmTask: "",
    dtTask: "",
    descTask: ""
}

//Pegando os dados do Formulário
function pegarDados(){
    pessoa.nmTask = document.getElementById("nmTaskId").value
    pessoa.dtTask = document.getElementById("dtTaskId").value
    pessoa.descTask = document.getElementById("descTaskId").value

    exibirDados()
}

//Exibindo os dados do objeto
function exibirDados(){
    console.log(pessoa)
}

//Recuperando o botão
const btn = document.getElementById("btnEnviar")
btn.addEventListener("click", pegarDados)
