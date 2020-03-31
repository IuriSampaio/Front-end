"use stritc";

//função para verificar o cep 
const verificaCep=()=>//{
    //  var elemento =document.forms.elements;
    //  var naoAchou = "undefined"
    //  if(elemento[2].value ==naoAchou){
    //      elemento[2].value="esse cep não existe"
        
    //  }else{
        document.getElementById('cep').reportValidity();
        
//    } 
// }
const encontraCep= async (cep)=>{
//se a função verificaCep for true(1) vai achar o cep
    if(verificaCep()){
        const url = `https://api.postmon.com.br/v1/cep/${cep}`;
        const endereco = await fetch(url).then(res => res.json());
        preencheForm(endereco)
    // antigo =   fetch(url).then(res=> res.json()).then(data=> preencheForm(data)).catch(err=>err.message);
    }
    
}

const preencheForm=(endereco)=>{
    document.getElementById('endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.cidade
    document.getElementById('estado').value = endereco.estado
}

const maskCep = ($el)=>{
    let aux = $el.value;
    aux = aux.replace(/[^0-9]/g,'');
    aux = aux.replace(/(.{5})(.)/,'$1-$2');
    $el.value = aux;
}

/* METACARACTERES */
// . == qualquer caracter
// [] == lista
// ^ == negação de uma lista

document.getElementById('cep').addEventListener('keyup',(e)=> maskCep(e.target))

document.getElementById('cep').addEventListener('blur',(e)=> encontraCep(e.target.value))
// // ****************Programação sincrona*******************
// const f1=()=>{
//     let cont=0;
//     let texto='';
//     while(cont<10){
//         texto+=cont;
//         cont++;
//     }
//     return texto
// }
// //**Vai ser executado na ordem que foi colocado no código
// console.log('teste 1')
// console.log(f1())
// console.log('teste 3')
//----------------------------------------------------------//
// *****************Programação assincrona****************
//Agora f1 nao será mais uma função e sim uma variavel que recebe uma 
//Promise(que é um objeto), esta recebe como método construtor um 
//callback( ex: ()=>{} ), esse recebe como paramêtros o (resolve, reject)
// resolve(pra Promise) == return(pra função)
// reject = vai ser chamado quando der um erro
// const f1 = new Promise((resolve,reject)=>{
//     let cont=0;
//     let texto='';
//     if(cont<0){reject('erro negativo')}
//     while(cont<10){
//         texto+=cont;
//         cont++;
//     }
//     resolve (texto)
// })
// console.log('teste 1')
// f1.then(res => console.log(res))//CORRETO//vai depender do tempo de proscessamento pra ser mostrado
// console.log(f1)//ERRADO//assim ele vai mostrar a promise como se ela fosse um Json soq meio estranho
// console.log('teste 3')
