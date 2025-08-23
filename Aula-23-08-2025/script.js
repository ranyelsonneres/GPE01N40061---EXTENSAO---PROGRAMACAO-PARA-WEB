//buscar um elemento: ID
let variavel1 = document.getElementById("paragrafo");
console.log(variavel1);
console.log(typeof variavel1);
console.log(variavel1.textContent);

//buscar elementos: classe
let variavel2 = document.getElementsByClassName("triade");
console.log(variavel2);
for(let i=0;i<variavel2.length;i++){
    console.log(variavel2[i].textContent);
}
console.log(variavel2[2].textContent);

//bsucar elementos: pela tag html
let variavel3 = document.getElementsByTagName("p");
console.log(variavel3);

//criar um elemento via javascript
let destino = document.getElementById("elemento");
let p1 = document.createElement("p");
p1.textContent = "Itens a serem adicionados!";
destino.append(p1);

//criar uma lista não ordenada de forma dinâmica
let ul = document.createElement("ul");
let itens = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
for (let i=0;i<itens.length;i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
destino.append(ul);

//algoritmo simples:
function somar(){
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    console.log(typeof n2);

    let soma = n1 + n2;
    console.log(soma);
    let saida = `<strong>Resultado: </strong> ${soma}`;
    document.getElementById("resultado").innerHTML = saida;
};

//evento: clique
let botao = document.getElementById("botao");
console.log(botao);

botao.ondblclick = function() {
    alert("Falei para não clicar!");
    botao.style.backgroundColor = "red";
    botao.textContent = "Clicou sim!"; 
}
