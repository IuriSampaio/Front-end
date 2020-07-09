"use strict"
const numeros = ['+','-','*','/',0,1,2,3,4,5,6,7,8,9,',','AC','=']

const out = "<div class='output'></div>"
const output = document.createElement('div');
output.innerHTML = out;
document.getElementById('g').appendChild(output);

const fazBtnNum = ( arr ) => {
    arr.forEach(element => {
        let btn = `<button class="btn" onclick='mostra(this)' value='${element}'>${element}</button>`
        const $container= document.createElement('div');
        $container.innerHTML = btn;
        const $info = document.getElementById('calc');
        $info.appendChild($container);
    });
}
fazBtnNum(numeros)


const fazOPS = () => {
    alert('tring')
}

const botao = document.querySelectorAll('button')

const mostra = (btn) =>{
    let valor = btn.textContent
    let saida = `<div>${valor}</div>`
    const conteinerVal = document.createElement('div')
    conteinerVal.innerHTML = saida
    output.appendChild(conteinerVal)
    
}


