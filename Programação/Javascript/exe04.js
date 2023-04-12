// 4-) Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua
// média ponderada (as notas tem pesos respectivos de 1, 2 e 3).


var media = 0;
var soma = 0;
var nota = 0;
for(var i = 0; i < 3; i = i + 1) {
    nota = nota + (i * 3);
    soma = soma + nota;
}
 media = (soma / 3);
console.log("Media: "+media);