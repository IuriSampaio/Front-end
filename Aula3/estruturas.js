"use strict";

const frutas = ['tomate', 'limão', 'açai', 'guaraná']
const clientes = ['mario', 'julio', 'caio', 'leo']

//criação da função card que recebe um array e um titulo 
const card = (arr, title="Lista") => {
    //atribuindo uma div com o nome card
const $card = document.createElement ('div')
$card.classList.add ('card')
//usando o .join('') para adicionar caracteres antes e depois de cada elemento deo array
const elementos = arr.join('</li><li>');

$card.innerHTML = `
        <div class="title">
        <h1> ${title} </h1>
        </div>
        <div class="corpo">
            <ul>
               <li>${elementos}</li>
            </ul>
        </div>

`;
return $card;
}
//criando função que exibe cards
const exibirCards = () =>{
//criação da variavel a partir da div do html
const $conteiner = document.querySelector('.conteinerGG');

$conteiner.appendChild(card(frutas, "Frutas"));
$conteiner.appendChild(card(clientes, "Noias"));
}


/*
                OUTRO MODO (errado)
//encapsulamento do cartao que sera preenchido pelo banco de dados
const card = () => {
    return `
        <div class="card">
            <div class="title">
                <h1> Drogas </h1>
            </div>
                <div class="corpo">
                    <ul>
                        <li>Nicotina</li>
                        <li>Açucar</li>
                        <li>Café</li>
                        <li>Àlcool</li>
                    </ul>
            </div>
        </div>
    `
}
//criação da variavel a partir da div do html
const $conteiner = document.querySelector('.conteinerGG');
//criação de uma div pelo js
const $div =document.createElement('div');
// atribuindo card a div criada 
$div.innerHTML = card();
//colocando a div criada como filho do Conteiner GG
$conteiner.appendChild($div);
*/


