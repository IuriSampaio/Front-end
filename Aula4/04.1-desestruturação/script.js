"use strict";

// desestruturação de array
const alunoA = ['Ana Clara','5','8','9'];

const [nomeA, n1, n2, n3=0] = alunoA;

console.log (n3);

// desestruturação de objetos

const aluno = {
    nome:"Ana Clara",
    nota1:"5",
    nota2:"8",
    nota3:"10",
    turma:"DS2M"
};

const { turma, nota3 } = aluno;

console.log ( turma, nota3 );

const [cliente, ...valores] = alunoA;
console.log (valores);

const maior =Math.max(...valores);
console.log (maior);

const soma = ( ...numeros ) => numeros.reduce ( (acc, num ) => acc + num);

console.log ( soma ( 100, 55, 1 , 3, 4, 6,0 ) );

