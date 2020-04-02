"use strict";
let DB = [
    {
        "pais":"MUNDO",
        "suspeitos":"<div class='spinner amarelo'></div>",
        "confirmados":"<div class='spinner azul'></div>",
        "mortes":"<div class='spinner green'></div>"
    }
];
// função que cria ps elementos html dentro da div#info e recebe como argumenro 
//um array que mostra o numero de suspeitos, confirmados e mortos pelo coronga virus
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
const coronaPais= async () =>{
   const url = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php"
   const headers={
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "b2d988535fmsh84ab7d643e12cc4p18b5a6jsn028dcb758163"
	}};
   const api=await fetch(url,headers).then(res => res.json());
   const apiPronta = await api.countries_stat
   console.log(apiPronta)
                    // .then(data => {console.log(data.response);});
}

 const achaPais = (e) =>{
     const paisMapa = e.target.parentNode.id.then;
    const nomePais = apiPronta.object.country_name;
    const pegaPais = nomePais.find (country=> country.match (paisMapa));
    const pais = {
        "pais":pegaPais.country_name,
        "suspeitos":pegaPais.active_cases,
        "confirmados":pegaPais.cases,
        "mortes": pegaPais.deaths
    }
    showData(pais);
 }



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

showData(DB[0]);
coronaPais()
coronaMundo();
document.querySelector('svg').addEventListener('click',achaPais);