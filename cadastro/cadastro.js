const btn = document.getElementById('novo')
const btnfechar = document.getElementById('fechar')
const acionaModal =()=>{
	const contMod =document.querySelector('.conteiner-modal')
	contMod.classList.add('exibirModal')
}
const fecharModal =()=>{
	const contMod =document.querySelector('.conteiner-modal')
	contMod.classList.remove('exibirModal')
}

btn.addEventListener('click', acionaModal )
btnfechar.addEventListener('click',fecharModal)