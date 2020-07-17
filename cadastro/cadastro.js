"use strict"

// IMPORTANDO AS FUNÇÕES validaTudo E validaEmail DO ARQUIVO masks.js
import { validaTudo, validaEmail } from "./masks.js"

const btn = document.getElementById('novo')
const btnfechar = document.getElementById('fechar')
const btnsalvar = document.getElementById('salvar')

const acionaModal = ( ) => document.querySelector('.conteiner-modal').classList.add('exibirModal')

// CHAMANDO AS FUNÇÕES QUE FORAM 
// IMPORTADAS PARA MARCARAR O FORM E VALIDAR O EMAIL
validaTudo(document.getElementById('form'))
validaEmail(document.getElementById('email'))

const fecharModal = ( ) => document.querySelector('.conteiner-modal').classList.remove('exibirModal')


const createAluno = ( aluno ) => {
    const url = 'http://localhost/iuri/cadastro/apiphp/alunos/';
    const options = {
      method: 'POST',
      body: JSON.stringify( aluno )
    };
	console.log(options.body)
    fetch(url, options )
}

const salvarAluno = ( ) => {
	const aluno = {
		"nome" : document.getElementById('nome').value,
		"email" : document.getElementById('email').value,
		"celular": document.getElementById('celular').value,
		"endereco": document.getElementById('endereco').value,
		"numero" : document.getElementById('numero').value,
		"bairo" : document.getElementById('bairro').value,
		"cidade": document.getElementById('cidade').value,
		"estado": document.getElementById('estado').value,
		"cep" : document.getElementById('cep').value
	}
		alert('salvou '+aluno.nome )
		window.location.reload()
		createAluno(aluno)
		fecharModal()
}

const getAlunos =(url) => fetch(url).then(res => res.json()) 
// fetch == buscar/trazer ou seja : 	IR BUSCAR NA URL E ENTÃO PEGAR A RESPOSTA ENCONTRADA E TRANFORMAR EM UM JSON 
const mostraAlunos = async() =>{
	const url = 'http://localhost/iuri/cadastro/apiphp/alunos/';
//ESPERAR A FUNÇÃO IR BUSCAR NA URL E ENTÃO PEGAR A RESPOSTA ENCONTRADA E TRANFORMAR EM UM JSON 
    let alunos = await getAlunos(url);
//PEGANDO O DATA E COLOCANDO NA VARIALE ALUNOS
    alunos = alunos.data
//PARA CADA ALUNO QUE VEM DO DATA DE ALUNOS DA UM CONSOLE.LOG DELE 
   // alunos.map(aluno => (aluno))
    preencheTabela(alunos)
}


function deleteAluno( alunoId ) {
    const url = `http://localhost/iuri/cadastro/apiphp/alunos/${alunoId}`;
    const options = {
      method: 'DELETE'
    };
  
    fetch(url, options )
}
  
const preencheTabela = ( dados ) => {
	const registros = document.getElementById('registros')
	dados.forEach(e => {
		const tr = document.createElement('tr')
			tr.innerHTML = `
			<td>${e.id}</td>
			<td>${e.nome}</td>
			<td>${e.email}</td>
			<td>${e.celular}</td>
			<td>${e.cidade}</td>
			<td> <button id='deleta'>DELETAR</button> <button id='editar'>EDITAR</button> </td>`
		registros.appendChild(tr)
		document.getElementById('deleta').addEventListener('click',()=>{
			alert("excluindo "+e.nome)
			deleteAluno(e.id)
			window.location.reload()
		})	
	});
}

btn.addEventListener('click', acionaModal )
btnfechar.addEventListener('click',fecharModal)
btnsalvar.addEventListener('click',salvarAluno)
mostraAlunos()

////////////////////FORMAS DE MASCARAR OS INPUTS ----> eles foram mascarados no arquivo masks.js
// //traz um array com todos os inputs
// const arrayDeInput = document.querySelectorAll('input')

// const maskText = ( $e ) => {
// 	const nome = document.getElementById('nome')
// 	let value = nome.value
// 	//expreção regular que valida apenas numeros 
// 	value = value.replace(/\d/g,'')
// 	nome.value = value
// }
// nome.addEventListener('keyup',maskText)

//exemplo forEach:
//[1,2,3,4].forEach(variavel => console.log(variavel+2))
// arrayDeInput.forEach( cadaInputDoArray => { 
// 	// pegando a proprieade do data-js de cada elemento
// 	const tipoDeValidacao = cadaInputDoArray.dataset.js

// 	cadaInputDoArray.addEventListener('input', e =>{
// 		// e --> elemento que foi digitado com todas as propriedades 
// 		// target --> é a propriedade que diz o input aonde foi digitado
// 		// value --> oque foi inscrito no input que foi digitado

// 		let valorDoInputDigitado = e.target.value
// 		e.target.value = masks[tipoValidacao](valorDoInputDigitado) 

// 	})
// })

////////////////// ISSO AQUI FOI PRO ARQUIVO masks.js
// const masks = {
//     texto: value => value.replace(/[^a-zA-Z À-ÿ]/, ''),
 
//     celular: value => value.replace(/[a-zA-Z À-ÿ]/, '')
 
// }

// const validar = e => {
// 	const $input = e.target;
//     const typeMask = $input.dataset.type;
//     $input.value = masks[typeMask]($input.value);
// }

// document.getElementById('form').addEventListener('input',validar)
