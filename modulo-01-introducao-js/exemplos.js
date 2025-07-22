// Exemplo: Variáveis básicas
let idade = 30;
let nome = "Vinicius";
console.log(nome + ", " + idade + " anos");

// Tipos de dados
let nomeCompleto = "Vinicius Silva"; // string
let idadePessoa = 25;                // number
let logado = true;                   // boolean
let lista = ["ovo", "farinha", "trigo"]; // array
let pessoa = { nome: "Vinicius", sobrenome: "Silva" }; // object
console.log(typeof lista); // object
console.log(typeof pessoa); // object

// Operações em variáveis
let n1 = 10;
let n2 = 20;
console.log(n1 + n2); // Soma
console.log(n1 + "20"); // Concatenação

// Template string
let idadeTemplate = 90;
let ano = 1;
let nomeTemplate = "Vinicius";
let resultado = `A idade do ${nomeTemplate} aumentou em ${ano} ano.`;
console.log(resultado);

// IF/ELSE simples
let idadeIF = 14;
if (idadeIF >= 16) {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

// Condicional ternário
let age = 14;
let adulto = age >= 18 ? 'Sim' : 'Não';
console.log(adulto);

// Switch case
let gaveta = "camiseta";
switch (gaveta) {
    case "camiseta":
        console.log("Achou a camiseta");
        break;
    case "calça":
        console.log("Achou a calça");
        break;
    default:
        console.log("Você não achou suas roupas");
        break;
}
