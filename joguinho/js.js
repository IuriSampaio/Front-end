// pegando o elemento canvas
const tela = document.getElementById('telaDoJogo')
// colocando o canvas como um objeto 2d
const context = tela.getContext('2d')
const jogadorPricipalId = 'jogador1'



function createGame(){
    const game = {
        jogadores:{
            'jogador1':{x:1, y:1},
            'jogador2':{x:9, y:9}
        },
        frutas:{
            'fruta1':{x:3, y:4}
        }
    
    }
    function moverJogador(command){
        console.log(`moving ${command.jogadorID} with ${command.keyPressed}`)
        const teclaPresionada = command.keyPressed
        const jogador = game.jogadores[command.jogadorID]
    // // tem que mudar essa merda aqui 
        if (teclaPresionada ==='ArrowDown' && !(jogador.y+1 >= tela.height)){
            jogador.y =jogador.y+1
            return
        }
        if(teclaPresionada==='ArrowUp' && jogador.y-1 >= 0){
            jogador.y =jogador.y-1
            return
        }
        if(teclaPresionada ==='ArrowLeft' && !(jogador.x-1 <0)){
            jogador.x = jogador.x-1
            return
        }
        if(teclaPresionada === 'ArrowRight' && jogador.x+1 < tela.width){
            jogador.x = jogador.x+1
            return
        }
    }
    return{
        moverJogador,
        game
    }
}

const jogo = createGame()

document.addEventListener('keydown',(e)=>{
    const command = {
        jogadorID :'jogador1',
        keyPressed :e.key
    }
    jogo.moverJogador(command)
   
})


// EXEMPLo
// // especificando dados de um elemento que será colocado dentro do canvas
// const cor = 'red'
// const posicaoX = 0 
// const posicaoY = 0 
// const largura = 250
// const altura = 250
// // colocando a cor
// context.fillStyle = cor
// // fillRect() --> feramenta de criação de um retangulo
// context.fillRect( posicaoX, posicaoY, largura, altura)


rodaTela()

function rodaTela(){
    // limpa a tela toda vez que a função for chamada 
    context.fillStyle = "white"
    // um quadrado branco que começa do 0 e tem o tamanho da tela
    context.clearRect(0,0,10,10)

    for(const jogadorID in jogo.game.jogadores){
        const jogador = jogo.game.jogadores[jogadorID]
        context.fillStyle = 'blue'
        context.fillRect(jogador.x,jogador.y,1,1)
    }
    for(const frutaID in jogo.game.frutas){
        const fruta = jogo.game.frutas[frutaID]
        context.fillStyle = 'red'
        context.fillRect(fruta.x,fruta.y,1,1)
    }
    // toda vez que for chamada ele vai chamar a função de novo
    requestAnimationFrame(rodaTela)
}