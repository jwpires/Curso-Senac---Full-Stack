// 6-) Faça um programa que calcule o IMC da pessoa
const prompt = require('prompt-sync')();

var peso = prompt("Informe seu peso: ");
var altura = prompt("Informe sua altura: ");


console.log("Seu IMC é :"+(peso / (altura * altura)));
