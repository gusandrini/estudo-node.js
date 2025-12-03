//1
let nome = 'gu'
console.log("Olá",nome, "Seja bem vindo ...")
//2
let anoAtual = 2024
let anoNascimento = 2000
let idade = anoAtual - anoNascimento
console.log("Você tem",idade,"anos de idade")
//3
let cidade = 'SP' 
let estado = 'SP'
let pais = 'Brasil'
console.log("Você mora na cidade de",cidade,"no estado de",estado,"no país",pais)
//4
temCarteira = true
console.log(typeof temCarteira)
//5
let saldo= 0;
saldo+= 200
saldo-= 50
console.log("Seu saldo é de R$",saldo)
//6
let matematica = 7
let portugues = 6
let ciencias = 8
let media = (matematica + portugues + ciencias) / 3
console.log("Sua média é",media)
//7
let salario = 3000
let aumento = salario * 0.1
let novoSalario = salario + aumento
console.log("Seu novo salário é de R$",novoSalario)
//8
let cliques = 0;
cliques++;

cliques++;

cliques++;
console.log("Total de cliques:", cliques);
//9
const PI = 3.14; 
// PI = 3.1415; // Isso causaria erro pois constantes não podem ser modificadas 
console.log("PI é uma constante e não pode ser alterada: " + PI);
//10
let mensagem = "O número é "; 

let numero = 42; 

let combinado = mensagem + numero; 

console.log(combinado); // "O número é 42" 

console.log(typeof combinado); // string 