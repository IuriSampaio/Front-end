const cadastrar = document.getElementById('cadastrar')
const remover = document.getElementById('excluir')
const input = document.getElementById('input')
const limpar = document.getElementById('limpar')
const atualizar = document.getElementById('atualizar')

cadastrar.addEventListener('click',(e)=>{
        localStorage.setItem('nome1',input.value)
        
        let nome = localStorage.nome1    
        let panel =`
            <h1 id="ap"> ${nome} </h1>
        `
        const $container= document.createElement('div');
        $container.innerHTML = panel;

        const $info = document.getElementById('nomes');
        $info.appendChild($container);

})

remover.addEventListener('click',(e)=>{
    let itemRmv = prompt('quem vc quer excluir ?')
    localStorage.removeItem('nome1',itemRmv) 
})
limpar.addEventListener('click',(e)=>{
    localStorage.clear()
    let h1 =document.getElementById('ap')
    h1.style.display ='none'
})
atualizar.addEventListener('click',(e)=>{

})