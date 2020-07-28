"use strict";

const frutas = ['mamão', 'laranja','uva','banana'];
const clientes = ['Ana Clara', 'Maria', 'João','Pedro'];

const card = ( arr, title="Lista" ) => { 
    const $card = document.createElement ('div');
    $card.classList.add ('card');

    const elementos = arr.join('</li><li>');
    $card.innerHTML = `
        <div class="card-title">${title}</div>
        <div class="card-body">
            <ul>
                <li>${elementos}</li>
            </ul>
        </div>
    `;
    return $card;
}


    const $container = document.querySelector('.container');

    $container.appendChild (card( frutas,"Frutas" ));
    $container.appendChild (card( clientes ));


