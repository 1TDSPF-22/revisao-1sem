//console.log() - Imprimi na tela (pop-up)
//console.log("Olá mundo!")

//document.write() - Imprimi na tela (no documento html)
//document.write("Olá mundo!")

//HOISTING -Ocorre quando uma variável é declarada e atribuída antes de ser utilizada
//var nome = "igor"
//let não sofre hoisting

//Variável de escopo global
//Escopo global - Tudo que está fora do bloco
//Exemplo de escopo global - window
//var nome = "João"

//let - variável de escopo local
//Escopo local - tudo que está dentro do bloco
//Exemplo de escopo local - if, for, while
//let sobrenome = "Silva"

//Constante - Não pode ser alterada
//const idade = 20

//objeto - coleção de chaves e valores
//Exemplo de objeto
//const pessoa ={
//    nome: "João",
//    sobrenome: "Silva",
//    idade: 20,
//    vendendo: true,
//    }

//pessoa.nome = "Igor"
//pessoa.sobrenome = "gabriel"
//pessoa.idade = 19
//pessoa.vendendo = false
//console.log(pessoa)

//Gravando os dados od formuláeio no objeto
//const pessoa = {
//    nmTask: "",
//    dtTask: "",
//    descTask:""
//}

//pegando os dados do formulário
//aqui estamos pegando os dados do formulário e salvando no objeto
//Arrow function - função anonima
//const pegarDados = () => {
//    pessoa.nmTask = document.getElementById("nmTaskId").value
//    pessoa.dtTask = document.getElementById("dtTaskId").value
//    pessoa.descTask = document.getElementById("descTaskId").value
//
//    exibirDados()
//}

//Exibindo os dados do objeto
function exibirDados() {
    console.log(pessoa)
}

//Recuperando o botão
//const btn = document.getElementById("btnEnviar")
//btn.addEventListener("click", ()=>{
//    pessoa.nmTask = document.getElementById("nmTaskId").value
//    pessoa.dtTask = document.getElementById("dtTaskId").value
//    pessoa.descTask = document.getElementById("descTaskId").value
//
//    exibirDados()
//})

//Gravando os dados do Formulário no objeto
const pessoa = {
    nmTask: "",
    dtTask: "",
    descTask: ""
}

//Declaradno um array
const pessoas = []

const btnEnviar = document.getElementById("btnEnviar")
btnEnviar.addEventListener("click", () => {
    pessoa.nmTask = document.getElementById("nmTaskId").value
    pessoa.dtTask = document.getElementById("dtTaskId").value
    pessoa.descTask = document.getElementById("descTaskId").value

    //adcionando os dados do objeto no array
    pessoas.push(pessoa)
})

//iterando o array
for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i])
}

//Atrelando o evento de click ao botão
const btnListar = document.querySelector("#btnListar")
btnListar.addEventListener("click", () => {
    exibirDados()
})

//----------------------------------------------------------------

function recebeCep() {
    var cep = document.getElementById("CepCliId")
    const btnEnviar = document.getElementById("btnEnviar")


    cep.onblur = function recebeCep() {
        var maskCep = new maskCep("^[0-9]{5}\-[0-9]{3}$")
        if (maskCep.test(cep.value) == true) {
            cep.style.borderColor = "#008000"
            enviar.style.color = "#008000"
            enviar.alert("CEP válido")

        } else {
            cep.style.bordercolor = "#ff0000"
            enviar.style.color = "#ff0000"
            enviar.alert("CEP invalido, digite novamente")
        
            cep.onfocus = function recebeCep(){
                cep.style.bordercolor =""
                cep.value =""
                enviar.style.color=""
                
            }
        }
    }
}
