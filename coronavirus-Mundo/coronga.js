"use strict";
let DB = [
    {
        "uf":"MUNDO",
        "suspeitos":"<div class='spinner amarelo'></div>",
        "confirmados":"<div class='spinner azul'></div>",
        "mortes":"<div class='spinner green'></div>"
    }
];
// função que cria ps elementos html dentro da div#info e recebe como argumenro 
//um array que mostra o numero de suspeitos, confirmados e mortos pelo coronga virus
const showData =(data)=>{
    const panel=`
        <div class='estado'>
            ${data.uf}
        </div>
        <div class='card suspeitos'>
            <div class='numeros'>${data.suspeitos}</div>
            <div class='titulo'> SUSPEITOS </div>
        </div>
        <div class='card confirmados'>
            <div class='numeros'>${data.confirmados}</div>
            <div class='titulo'> CONFIRMADOS </div>
        </div>
        <div class='card mortes'>
            <div class='numeros'>${data.mortes}</div>
            <div class='titulo'> MORTES </div>
        </div>
    `;
    const $container= document.createElement('div');
    
    $container.innerHTML = panel;

    const $info = document.getElementById('info');
     $info.removeChild($info.firstChild);
    $info.appendChild($container);
};
const coronaMundo= async () =>{
   const url = "https://covid-193.p.rapidapi.com/statistics"
   const headers={
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "b2d988535fmsh84ab7d643e12cc4p18b5a6jsn028dcb758163"
   }};
   fetch(url,headers).then(response => {console.log(response.json()); })
                     .then(data => {console.log(data.response);});
}
const pegaCorongaPais= () =>{
    fetch("https://covid-19-data.p.rapidapi.com/country/it", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "b2d988535fmsh84ab7d643e12cc4p18b5a6jsn028dcb758163"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
};
 showData(DB[0]);














 
const pegaCorongaBrasil = async () =>{
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const pegaApi = await fetch(url);
    const json = await pegaApi.json();
    const brasil = await {
        "uf":"brasil",
        "suspeitos":json.data.cases,
        "confirmados":json.data.confirmed,
        "mortes":json.data.deaths
    }
    showData(brasil);
}

const pegaCorongaEstado= async () =>{
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/';
    const pegaApi = await fetch(url);
    const json = await pegaApi.json();
    DB = await json.data;
}
const achaEstado = (e) =>{
    const ufmapa = e.target.parentNode.id;
    const pegaEstado = DB.find (state=> state.uf.match (ufmapa));
    const state = {
        "uf":pegaEstado.uf,
        "suspeitos":pegaEstado.suspects,
        "confirmados":pegaEstado.cases,
        "mortes": pegaEstado.deaths
    }
    showData(state);
}
document.querySelector('svg').addEventListener('click',achaEstado);


pegaCorongaEstado();
pegaCorongaBrasil();