//definir os valores de combustiveis
const precoGasolina = 6.09;
const precoEtanol = 5.70;
const precoDiesel = 5.89;

function atualizaValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    let precoPorLitro;
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break; 
        default:
            console.log("Escolha uma opção");
            return;
                               
    }
    console.log(precoPorLitro);
    let litros = document.getElementById("litros").value;
    calculaAbastecimento(precoPorLitro, litros);
}

function calculaAbastecimento(precoLitro, litro){
    let valorTotal = precoLitro * litro;
    document.getElementById("resultado").textContent = formatarValor(valorTotal);

    if (litro <=0){
        document.getElementById("resultado").textContent = "Informe um valor positivo";
    }

}

function formatarValor(valor){
    return "R$ " + valor.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2})
}

//chamar a função
//atualizaValor();
let tipo = document.getElementById("combustivel");
tipo.addEventListener("change", atualizaValor);

//atualizar o valor de forma automática
let litros = document.getElementById("litros");
litros.addEventListener("input", atualizaValor);
