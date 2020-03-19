// "use strict"
// const $interruptor = document.getElementById('interruptor')
// //let id1
// //let id2
// //*******************funções anonimas
// const acendeLamp= () => document.getElementById('lampada').src="./img/ligada.jpg"
// const desligarLamp= () => document.getElementById('lampada').src="./img/desligada.jpg"
// const quebrou= () => document.getElementById('lampada').src="./img/quebrada.jpg"
const estadoLamp=()=>!Boolean(document.getElementById('lampada').src.match('desligada'))//FUNÇÃO QUE RETORNA UM BOOLEANO DE ACORDO COM O ESTADO DA LAMPADA *(LIGADO=TRUE,DESLIGADO=FALSE)
// /************************liga e desliga a lampada************************/ 
 const ligaDesliga=()=>{
     if(estadoLamp()){
         apagaLamp()
     }else{
         acendeLamp()
     }
 }
// /******************função para piscar********************/
// /*********************USANDO O TERNARIO*******************/
 let id
// //const piscar=()=>id=id===undefined ? setInterval(ligaDesliga,500)
// /******************** USANDO O IF ***********************/
 const piscar=()=>{
      if (id=== undefined){
          id =setInterval(ligaDesliga,500)
      }
  }
// /************************usando o setInterval()****************************/  
// /* const pisca =()=>{
//      id1=setInterval(acendeLamp,100)
//      id2=setInterval(desligarLamp,300)
//  }
// const parar=()=>{
//     clearInterval(id1);
//     clearInterval(id2);
//     id=undefined;
// }*/

// $lampada.addEventListener('mouseenter', acendeLamp)
// $lampada.addEventListener('mouseout', desligarLamp)
 $lampada.addEventListener('click', pisca)
// document.getElementById('interruptor').addEventListener('click',parar)
function acendeLamp(){
    document.getElementById("lampada").src ="img/ligada.jpg"
}
 function quebraLamp(){
    document.getElementById("lampada").src ="img/quebrada.jpg"
  
 }
function apagaLamp(){
    document.getElementById("lampada").src ="img/desligada.jpg"
}