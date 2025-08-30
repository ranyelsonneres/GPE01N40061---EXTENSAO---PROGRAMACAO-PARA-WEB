//dom - document object model
//eventos: propriedade e addEventList
let botao1 = document.getElementById("botao1");
console.log(botao1);
//eventos (mouse)
botao1.onclick = function(){
    //lógica de negócio
    console.log("Clique simples");
}
let botao2 = document.getElementById("botao2")
botao2.ondblclick = function(){
    console.log("Dois Cliques");
}
botao2.onmouseover = function(){
    console.log("Registrou Entrada");
    botao2.style.backgroundColor = "yellow";
}
botao2.onmouseout = function(){
    console.log("Registrou Saída");
    botao2.style.backgroundColor = "";
}

//eventos (teclado)
let campoEntrada = document.getElementById("input");
let texto = document.getElementById("texto");
campoEntrada.onkeydown = function(event){
    //alert("Teste");
    if(event.key == "Enter"){
        console.log("Pressionou a Tecla Enter");
        console.log(campoEntrada.value);
        texto.innerText = campoEntrada.value;
        campoEntrada.value = "";
    }
}

let botao3 = document.getElementById("botao3");
botao3.addEventListener("click", function(){
    texto.textContent = "";
});

//atividades (DOM - interatividade na página)
