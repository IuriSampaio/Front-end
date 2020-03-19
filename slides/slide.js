"use strict";
// função que faz um array para pegar as imagens enumeradas de 1 a 5
const loadImages=()=>{
    const arrImg=[];
    for(let i=1;i<=5;i++){
        arrImg.push(`./img/imagem (${i}).jpg`);
    }
    return arrImg;
}
// função que carrega as imagens para aparecer no html
const insertImages=(images)=>{
    const htmlImg = images.map(img=>`<img class="images" src='${img}'>`).join(" ");
    const $container = document.getElementById('container');
    //para fazerra as imagens aparecerem na tela--- com o innerHTML 
    //$container.innerHTML+=htmlImg
    //criando uma div no html
    const $containerImages=document.createElement('div');
    //atribuindo um id para a div
    $containerImages.id='conteinerImages';
    //criando uma varivel js a partir do id 'next' do html
    const $next=document.getElementById('next');
    //fazendo as imagens aparecerem no conteinerImagens 
    $containerImages.innerHTML=htmlImg;
    //conteinerImagens entra depois da div com id prev 
    $container.insertBefore($containerImages,$next);
}

//função para mudar a imagem que aparecerá no conteiner 
const next=()=>{
    const $img = document.querySelectorAll('.images');
    const max = ($img.length -1)*(-50);
    
    let marginLeft=+($img[0].style.marginLeft.replace("vw",""));
    if(marginLeft == max){
        marginLeft=50;
    }
    $img[0].style.marginLeft=(marginLeft-50)+"vw";  
}
const prev=()=>{
    const $img = document.querySelectorAll('.images');
    const min =0
    
    let marginLeft=+($img[0].style.marginLeft.replace("vw",""));
    if(marginLeft == min){
        marginLeft=-250;
    }
    $img[0].style.marginLeft=(marginLeft+50)+"vw";
}
//automatico
setInterval(next, 2000)
//chamando a função que insere e carrega as imagens 
insertImages(loadImages());
//adicionando os eventos de click para a imagem ir e voltar
document.getElementById('next').addEventListener('click',next);
document.getElementById('prev').addEventListener('click',prev);
