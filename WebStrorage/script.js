// TA TUDO ERRADO 
const cadastrar = document.getElementById('cadastrar')
const remover = document.getElementById('excluir')
const input = document.getElementById('input')
const limpar = document.getElementById('limpar')
const atualizar = document.getElementById('atualizar')


remover.addEventListener('click',(e)=>{
    let itemRmv = prompt('quem vc quer excluir ?');
    var nomes = JSON.parse(localStorage.getItem('nomes'));
    var nomesNew = nomes.filter(i => i.itemRmv != itemRmv);
    localStorage.removeItem('nomes', JSON.stringify(nomesNew));
})

atualizar.addEventListener('click',(e)=>{
    var nome = prompt("qual nome vc quer mudar?");
    var newName = prompt('qual o novo nome?');
    var nomes = JSON.parse(localStorage.getItem('nomes'));
    var newNomes = nomes.filter(n => {if(n.nome == nome){ n.nome = newName }})
    alert(newNomes)
})

const atualizaDireto =()=>{
    let nome = localStorage.getItem('nome');
    if(localStorage.hasOwnProperty('nomes')){
        var json = JSON.parse(localStorage.getItem('nomes'))
        json.forEach( o =>{   
            let panel =`
                <h1 id="ap"> ${o.nome} </h1>
            `
            const $container= document.createElement('div');
            $container.innerHTML = panel;

            const $info = document.getElementById('nomes');
            $info.appendChild($container);
        })
    }
}
limpar.addEventListener('click',(e)=>{
    localStorage.clear()
    $info.style.display ="none"
})
cadastrar.addEventListener('click',(e)=>{
        let nomes = new Array();
        var nome = input.value;
        if (localStorage.hasOwnProperty('nomes')){
            nomes = JSON.parse(localStorage.getItem('nomes'));
        }
        nomes.push({'nome':nome});
        localStorage.setItem('nomes', JSON.stringify(nomes));
        atualizaDireto()
})
