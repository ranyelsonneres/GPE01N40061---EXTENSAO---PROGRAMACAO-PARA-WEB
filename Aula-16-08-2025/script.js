//alert("Teste");

//fracamente tipada
//case sensitive A a
//três tipos de declaração de variável: var, let e const
//var (global, permite reatribuição)
var v1 = "5";
var v2 = 5;
var v3;
v2 = "casa";

console.log(v1);
console.log(v2);

//let (escopo de bloco, permite reatribuição)
let v4 = "Fulano";
let v5;
v5 = 1020;
console.log(v5);

//const (escopo de bloco, não permite reatribuição, precisa ser declarada)
const v6 = "Ciclano";
//v6 = "Beltrano";
console.log("Nome: " + v6);

//impressões
//console.log
//template literal
console.log(`Nome: ${v6}; idade: ${v1}`);
document.writeln(`Nome: ${v6}; idade: ${v1}`);

//entrada de dados
//var num1 = parseInt(window.prompt("Valor: ")); //casting (converter o tipo de dado)
//console.log(typeof num1);
//var resultado = num1 + 10;
//console.log(`Resultado: ${resultado}`);

//operadores artiméticos
// + - * / % ** 

//operadores de comparação
// > >= < <= = != == === !==
console.log(2 == "2"); //igualdade (apenas os valores)
console.log(2 === "2"); //estritamente igual (E - lógico)

//estruturas de controle
//if-else
if (10 > 2) {
    console.log("IF");
} else {
    console.log("ELSE");
}

//for (determino a quantidade de iterações)
for (let i=0; i< 5; i++){
    console.log("Iteração: " + i);
}
//while (não sei quantas iterações serão realizadas)
var contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

//switch-case (escolha-caso)
var diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    default:
        console.log("Escolha uma opção válida");
}
