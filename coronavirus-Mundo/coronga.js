"use strict";
let DB = [
    {
        "pais":"MUNDO",
        "suspeitos":"<div class='spinner amarelo'></div>",
        "confirmados":"<div class='spinner azul'></div>",
        "mortes":"<div class='spinner green'></div>"
    }
];
// // função que cria ps elementos html dentro da div#info e recebe como argumenro 
// //um array que mostra o numero de suspeitos, confirmados e mortos pelo coronga virus
const showData =(data)=>{
    const panel=`
        <div class='pais'>
            ${data.pais}
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
showData(DB[0]);
//funçao que usa uma Api para pegar os casos de covid-19 em cada pais 

const apiCasosMundo = async () => {
    
    const url = "https://covid-193.p.rapidapi.com/statistics";
    
    const headers = {
        "method": "GET",
	    "headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "90975f57famsh4adc585dc55770dp13edfcjsn9d8e74b8a84e",
        }
    }

    const pegaApi = await fetch(url, headers);
    const json = await pegaApi.json();
    DB = await json.response;
}

//função que acha o pais clicado e acha seu pais equivalente no array

const achaPais = (e) => {
    
    const paisClicado = e.target.className.baseVal;
    const paisNoArray = DB.find(state => state.country.match(paisClicado))
    const pais = {
        "pais": paisNoArray.country,
        "suspeitos": paisNoArray.cases.active,
        "confirmados": paisNoArray.cases.critical,
        "mortes": paisNoArray.deaths.total,
    }
    showData(pais);
}

//funçao que usa uma Api para pegar e mostra o numero de casos de covid-19 no mundo 

const coronaMundo=async () =>{

   const url2="https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php"

   const headers2={
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "b2d988535fmsh84ab7d643e12cc4p18b5a6jsn028dcb758163"
	}
   }

   const api2Pronta= await fetch(url2, headers2).then(res=>res.json())

   const mundo = {
    "pais":"MUNDO",
    "suspeitos":api2Pronta.total_cases,
    "confirmados":api2Pronta.total_recovered,
    "mortes":api2Pronta.total_deaths
   }
   showData(mundo)
};

coronaMundo()
document.querySelector('svg').addEventListener('click', achaPais);
apiCasosMundo();
