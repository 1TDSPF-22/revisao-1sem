//Variáveis 
//var - Variável de escopo global
//var nome = "João"

//let- Variavel de escopo local
//let sobrenome = "João"

//Constante - Variavel que não pode ser alterada
//const idade = 20


//Objeto - Coleção de chaves e valores 
//Exemplo de objeto
//const pessoa = {
    //nome: "Joao",
    //sobrenome: "Silva",
   // idade: 20,
    //vendendo: true
//}

//pessoa.nome = "Igor"
//pessoa.sobrenome = "Mão de Pedreiro"
//pessoa.idade = 30
//pessoa.vendendo =false
//console.log(pessoa)

//pessoa.idade = 40
//console.log(pessoa)


//JSON - JavaScript Object Notation


//Gravando os dados do Formulário no Objeto
//const pessoa = {
   // nmTask: "",
   // dtTask: "",
   //descTask: ""

//}

//Pegando os dados do Formulário
//Aqui estamos pegando os dados do formulário e salvando no objeto
//Arrow function - Função anônima
//const pegarDados = () => {
  //  pessoa.nmTask = document.getElementById("nmTaskId").value
    //pessoa.dtTask = document.getElementById("dtTaskId").value
    //pessoa.descTask = document.getElementById("descTaskId").value
//}

//Exibindo os dados do Objeto
//function exibirDados(){
  // console.log(pessoa)
//}

//Recuperando o botão
//const btn = document.getElementById("btnEnviar")
//btn.addEventListener("click", pegarDados)



//Gravando os dados do Formulário no Objeto
//const pessoa = {
    //nmTask: "",
    //dtTask: "",
  // descTask: ""

//}


//Declarando um array
const pessoas = []

const btn = document.querySelector("btnEnviar")
btnEnviar.addEventListener("click" , ()=> {
    //Pegando dados do formulario
    //Criando um novo objeto
    const pessoa = {
        nmTask: "",
        dtTask: "",
       descTask: ""
    
    }
    pessoa.nmTask = document.getElementById("nmTaskId").value
    pessoa.dtTask = document.getElementById("dtTaskId").value
    pessoa.descTask = document.getElementById("descTaskId").value

    //Adicionando os dados do Objeto no Array
    pessoas.push(pessoa)
    console.log(pessoas)
})

//Exibindo dados do objeto
const exibirDados = ()=> {
    //Interando o Array
    for (let i = 0; i < pessoas.length; i++) {
        console.log(pessoas[i])
    }
}

//Atrelando o evento ao click ao botão
const btnListar = document.getElementById("btnEnviar")
btnListar.addEventListener("click", ()=> {
    exibirDados()

})
