//função de seta (=>)
//sem parâmetros
const saudacao = () => console.log("Olá");
saudacao();

//apenas com um parâmetro
const dobrar = numero => numero * 2;
console.log(dobrar(2));

//mais de um parâmetro
const somar = (a, b) => a + b;
console.log(somar(2, 5));

//refatoramento
console.log(verificarIdade(23));
function verificarIdade(idade){
    if(idade>=18){
        return true;
    } else {
        return false;
    }
}

//função de seta
const verificarIdade2 = numero => numero>=18;

//Objetos (POO)
const pessoa = {
    //propriedades
    nome: "Fulano",
    idade: 12
};
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

//p1, p2, p3, p_n...
class Pessoa {
    //construtor
    constructor(nome, idade){
        //this
        this.nome = nome;
        this.idade = idade    
    }
    //métodos (comportamento)
    imprimirNome(){
            return `Nome: ${this.nome}`;
        }
}
let nome = "teste";
const p1 = new Pessoa("Beltrano", 14);
const p2 = new Pessoa("Ciclano", 39);
console.log(p1.imprimirNome());

//criar a classe "Estudante herda da classe Pessoa"
class Estudante extends Pessoa {
    constructor(nome, idade, curso){
        //this
        //super
        super(nome, idade)
        this.curso = curso;
    }
}
const est = new Estudante("André", 14, "ADS");

//Arrays
//definição: estrutura de dados (armazena diferentes tipos)
let carrinhoCompras = []
carrinhoCompras.push("meia"); //add ao final 
carrinhoCompras.push("fone de ouvido");
carrinhoCompras.push("livro");
carrinhoCompras.unshift("gravata"); //add ao inicio
carrinhoCompras.splice(1,0,"cd"); //add em posição específica

//remover os itens do carrinho;
carrinhoCompras.pop(); //remove ultimo elemento
carrinhoCompras.shift(); //remove primeiro elemento
carrinhoCompras.splice(1, 1) //remover um elemento

//buscar
console.log(carrinhoCompras.includes("cd")); //true ou false

//imprimir o carrinho
console.log(carrinhoCompras);
