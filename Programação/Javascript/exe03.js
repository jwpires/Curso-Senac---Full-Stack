//3-) Escreva um programa que pergunte quantas notas de:

const prompt = require('prompt-sync')();
var total = 0;


let qtde = 0;

qtde = prompt("Informe quantidade de notas de 2: ");;
total += (qtde * 2);

qtde = prompt("Informe quantidade de notas de 5: ");;
total += qtde * 5;

qtde = prompt("Informe quantidade de notas de 10: ");;
total += qtde * 10;

qtde = prompt("Informe quantidade de notas de 20: ");;
total += qtde * 20;

qtde = prompt("Informe quantidade de notas de 50: ");;
total += qtde * 50;

qtde = prompt("Informe quantidade de notas de 100: ");;
total += qtde * 100;

qtde = prompt("Informe quantidade de notas de 200: ");
total += (qtde * 200);

console.log("Total: "+total);
