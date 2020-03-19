"use strict";

const notas = [3,18, 108, 648, 3888];
const clientes = [
    {nome: "iuri" ,idade:17, cidade:"osasco"},
    {nome: "iludi" ,idade:10, cidade:"osasco"},
    {nome: "clii" ,idade:20, cidade:"osasco"}
]
const nome = prompt("digite seu nome")
const idade = prompt("digite sua idade")
const cidade = prompt("digite sua cidade")
/**********EXIBINDO ARRAY COM LAÇO FOR() ***********/
//let pgsuperior = [];
//    const limit =pg.length -1;
//for (let i=0;i<limit; i++){
//    pgsuperior.push ( pg [i] *10);
//}
/*  MAP - retorna um array do mesmo tamanho ou modificando os argumentos do callback
                                                            1º elementos
                                                            2º indicie
                                                            3º array                    
*/   
const notasNew = notas.map(notas => notas*10);
/*  FILTER - RETORNA UM NOVO ARRAY FILTRADO PELO CALLBACK;
                                                1º ELEMENTO
                                                2° INDICIE
                                                3° ARRAY
*/ 
const notasAcima = notas.filter (nota => nota>=5);
/*  REDUCE - retorna um unico valor com os agrumrntosd do callback:
                                                                1° acumulador
                                                                2° indicie
                                                                3° elementos
                                                                4° array

*/
console.log(pg);
console.log(pgsuperior);

const notasTotal1 = notas.reduce ( (acc, nota) => acc+nota);
const notasPares100 = notas.filter(nota => nota % 2 == 0)
                            .map(nota => nota+100);

const exibirDados = (el, arr, titulo="sem titulo")=>{
    el.innerHTML +=
      `  <div class="card text-white bg-secondary mb-3" style="width:30vw heigth:30vh">
            <div class="card-header">
            <p>${clientes.nome}</p>
            </div>
            <div class="card-body">
                <p>${clientes.idade}</p>
                <p>${clientes.cidade}</p>
            </div>
        </div>
    `;
}
const $resultados = document.getElementById('resultado')    
const t = clientes.map(cliente => exibirDados($reultado, $cliente))
