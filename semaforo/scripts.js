vermelho = () =>{
    document.getElementById('img').src="./img/vermelho.png"
}
amarelo=()=>{
    document.getElementById('img').src="./img/amarelo.png"
}
verde=()=>{
    document.getElementById('img').src="./img/verde.png"
}
let id 
let id1
let id2
const auto=()=>{
    id= setInterval(verde,100)
    id1= setInterval(vermelho,200)
    id2=setInterval(amarelo,400)
}
