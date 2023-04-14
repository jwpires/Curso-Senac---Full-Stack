// 4-) Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua
// média ponderada (as notas tem pesos respectivos de 1, 2 e 3).

const prompt = require('prompt-sync')();
var media = 0;
var soma = 0;
var nota = new Array(3);
var peso = new Array(3);
var pesoTotal = 0;

/*  */
for(var i = 0; i < 3; i = i + 1) {
    nota[i] = prompt(`Informe a ${i+1} nota:`);
    peso[i] = prompt(`Informe o peso da ${i+1} nota:`);
    soma = soma + nota[i]*peso[i];
    pesoTotal += Number(peso[i]);
    console.log(`Nota ${nota[i]} * Peso ${peso[i]} = soma ${soma} Peso ${pesoTotal}`);
}

 media = (soma / pesoTotal);
console.log("Media: "+media);