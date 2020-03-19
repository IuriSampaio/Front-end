"use strict"

//***********************destruturação do array
const aluno = ['Carlos Bryams','8','6','9']
//const nota1 = aluno[1] ? aluno[1] : 0;// <-------(?) significa: se existir algum valor vai qatribuir oque ta depois// se nao vai ser depois dos dois pontos (:) 
//se nao tiver um dos valores doi array vai aparecer oque ta depois do igual na tal variavel
const [nome="escreve ao nome", n1=0, n2=0, n3=0] =aluno;
console.log(nome, n1);

//separando o array entre o nome e os valores 
const [ cliente, ...valores] = aluno
console.log(valores)

//função que ve o maior valor mais nao poode ver dentro do array
const maiorEntre = Math.max(...valores);
console.log(maiorEntre)

//função que soma infinitos numeros 
const soma = (...num) => num.reduce( (acc, num) => acc+num );
console.log(soma(1,2,9,3,2,4,5,7,2,3,6))

//*********************destruturação de objetos

/*const aluno = {
    nome:"Maria",
    nota1:"4",
    nota2:"8",
    nota3:"10",
    turma:"DS2M"
}
const {nome,nota1,nota2,nota3,turma:t}=aluno

console.log(aluno)
*/
