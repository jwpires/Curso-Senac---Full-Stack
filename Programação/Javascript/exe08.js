// 8-) Construir um programa que leia um valor numérico inteiro e apresente como resultado os seus valores: sucessor e antecessor.
const prompt = require('prompt-sync')();
var n1 = prompt("Informe um número qualquer: ");;
console.log(`antecessor: ${n1-1} ; sucessor: ${++n1}`);