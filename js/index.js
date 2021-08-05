// carne = 400g por pessoa / +6 hrs = 650g
// cerveja = 1200ml por pessoa / +6hrs = 200ml
// refrigerante/agua = 1000ml por pessoa / +6hrs = 1500ml
// crianças consomem tudo pela metade

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let totalCerveja = cervejaPP(duracao) * adultos;
    let totalBebidas = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${Math.ceil(totalCarne/1000)}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja/350)} latinhas de cerveja de 350ml</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalBebidas/1000)}L de refrigerante ou outras bebidas.</p>`
}

function carnePP(duracao){
    let carne;
    duracao >= 6? carne = 650 : carne =  400;
    return carne;
}

function cervejaPP(duracao){
    let cerveja;
    duracao >= 6? cerveja = 2000 : cerveja = 1200;
    return cerveja;
}

function bebidaPP(duracao){
    let bebida;
    duracao >= 6? bebida = 1000 : bebida = 1500;
    return bebida;
}