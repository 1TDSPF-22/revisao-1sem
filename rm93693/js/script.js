//var - Variável de escopo global - Escopo global é tudo que está fora do bloco, exemplo de escopo global (window)

//Let - Varíavel de escopo local - Escopo local - Tudo que está dentro do bloco, exemplo de escopo local - if, for, while

//Const - Não pode ser alterada

//Objeto - Coleção de chaves e valores
//Exemplo de objeto
/* 
const pessoa = {
  nome: "Paulo",
  sobrenome: "Alves",
  idade: 20,
  vendedor: true,
};

pessoa.nome = "Igor";
pessoa.sobrenome = "Mão de Pedreiro";
pessoa.idade = 30;

console.log(pessoa);
*/

/* 
//Gravando os dados do formulário no objeto
const pessoa = {
  nmTask: "",
  dtTask: "",
  descTask: "",
};

function pegarDados(e) {}

//Exibindo os dados do objeto
function exibirDados() {
  console.log(pessoa);
}

//Recuperando o botão
const btn = document.getElementById("btnEnviar");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  pessoa.nmTask = document.getElementById("nmTaskId").value;
  pessoa.dtTask = document.getElementById("dtTaskId").value;
  pessoa.descTask = document.getElementById("descTaskId").value;

  exibirDados();
});
*/

//Pegando os dados do formulário

// const btnEnviar = document.getElementById("btnEnviar");

// const nmTaskId = document;
// getElementById("nmTaskId");
// const dtTaskId = document;
// getElementById("dtTaskId");
// const descTaskId = document;
// getElementById("descTaskId");

// btnEnviar.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (nmTaskId === "") {
//     alert("Nome não informado");
//     e.preventDefault();
//     nmTaskId.focus();
//   } else if (dtTaskId === "") {
//     alert("Nome não informado");
//     e.preventDefault();
//     dtTaskId.focus();
//   } else if (descTaskId === "") {
//     alert("Nome não informado");
//     e.preventDefault();
//     descTaskId.focus();
//   } else {
//     alert("Cadastro realizado com sucesso!");
//   }
// });

//Declarando objeto
const pessoa = {
  nmTask: "",
  dtTask: "",
  descTask: "",
};

//Declarando um Array
const pessoas = [];

//Recuperando botão
const btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  pessoa.nmTask = document.getElementById("nmTaskId").value;
  pessoa.dtTask = document.getElementById("dtTaskId").value;
  pessoa.descTask = document.getElementById("descTaskId").value;

  //Adicionando os dados do objeto no array
  pessoas.push(pessoa);
  console.log(pessoas);
});

//Exibindo os dados do objeto
const exibirDados = () => {
  //Iterando o array com for simples
  // for (let i = 0; i < pessoas.length; i++) {
  //   console.log(pessoas[i]);
  //   console.log(pessoas[i].nmTask);
  // }

  //Iterando o array com (for of)
  // for (let pessoa of pessoas) {
  //   console.log(pessoa);
  // }

  //Iterando o array com (for in)
  // for (let indice in pessoas) {
  //   console.log(pessoas[indice].nmTask);
  // }

  //Iterando o array com (for each)
  pessoas.forEach((pessoa) => {
    console.log(pessoa.nmTask);
  });
};

//Atrelando o evento ao click de um botao
const btnListar = document.querySelector("#btnListar");
btnListar.addEventListener("click", (e) => {
  e.preventDefault();
  exibirDados();
});
