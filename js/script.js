// Comentario single line
/**
 * Comentario multi line
 */

// Console log - imprime na tela
//console.log("Hello World");

// Document write - imprime na tela
//document.write("Hello World");

// Variáveis

// var - Variável de escopo global
//var nome = "Leo";

// let - Variável de escopo local
//let sobrenome = "Longo";

// const - Variável que não pode ser alterada
//const idade = 24;

// hoisting - Ocorre quando a variável é declarada e atribuída antes de ser utilizada
//texto = "Esse texto não foi declarado antes de ser utilizado";
//console.log(texto);

//var texto = "Esse texto foi declarado antes de ser utilizado";
//console.log(texto);

// Não é possível fazer hoisting para variáveis locais (let)
//texto2 = "Esse texto não foi declarado antes de ser utilizado";
//console.log(texto2);

//let texto2 = "Esse texto foi declarado antes de ser utilizado";
//console.log(texto2);

// Objeto - Coleção de pares chave/valor
//const pessoa = {
// 	nome: "Leo",
// 	sobrenome: "Longo",
// 	idade: 24,
//     endereco: {
//         logradouro: "Rua dos Bobos",
//         numero: "0",
//     },
//     setIdade: function(idadeNova){
//         this.idade = idadeNova;
//     }
// };
//console.log(pessoa);
//console.log(pessoa.nome);
//console.log(pessoa.endereco.logradouro);
//pessoa.setIdade(30);
//console.log(pessoa.idade);

// Gravando os dados do formulário em um objeto
//const pessoa = {
//	nmTask: "",
//	dtTask: "",
//	descTask: "",
//};

//function pegarDados() {
//	pessoa.nmTask = document.getElementById("nmTaskId").value;
//	pessoa.dtTask = document.getElementById("dtTaskId").value;
//	pessoa.descTask = document.getElementById("descTaskId").value;

//	exibirDados();
//}

//function mostrarDados() {
//	console.log(pessoa);
//}

// Recuperando o botão
//const btnEnviar = document.getElementById("btnEnviar");
// Adicionando o evento de click
//btn.addEventListener("click", pegarDados);

// Mesma coisa, mas com Arrow Function e querrySelector
//const btnEnviar = document.querySelector("#btnEnviar");

//const pegarDados = () => {
//	pessoa.nmTask = document.getElementById("nmTaskId").value;
//	pessoa.dtTask = document.getElementById("dtTaskId").value;
//	pessoa.descTask = document.getElementById("descTaskId").value;

//	exibirDados();
//}

//btn.addEventListener("click", () => {
//  pessoa.nmTask = document.getElementById("nmTaskId").value;
//  pessoa.dtTask = document.getElementById("dtTaskId").value;
//  pessoa.descTask = document.getElementById("descTaskId").value;

//  exibirDados();
//});

// Outra coisa
const tarefas = [];

const tarefa = {
	nmTask: "",
	dtTask: "",
	descTask: "",
};

const btnEnviar = document.querySelector("#btnEnviar");
btnListar.addEventListener("click", () => {
	tarefa.nmTask = document.getElementById("nmTaskId").value,
    tarefa.dtTask = document.getElementById("dtTaskId").value,
    tarefa.descTask = document.getElementById("descTaskId").value,

    tarefas.push(pessoa);	
});

const exibirDados = () => {
    // Iterando sobre um array com for simples
    for (let i = 0; i < tarefas.length; i++) {
        tarefa.log(pessoas[i]);
    }
    // Iterando sobre um array com for of
    for (let tarefa of tarefas) {
        tarefa.log(pessoa);
    }
    // Iterando sobre um array com for in
    for (let i in tarefas) {
        tarefa.log(pessoa[i]);
    }
    // Iterando sobre um array com forEach
    tarefas.forEach(tarefa => {
        tarefa.log(pessoa);
    });
};

const btnListar = document.querySelector("#btnListarId");
btnListar.addEventListener("click", () => {
    exibirDados();
});
