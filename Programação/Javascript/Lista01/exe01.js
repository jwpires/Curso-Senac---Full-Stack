//1-) Escreva um programa que pergunte o raio de um círculo, imprima sua área
const prompt = require('prompt-sync')();
let raio = prompt("Informe o raio: ");

// let raio = 1;
let area = Math.PI * Math.pow(raio,2);
console.log("Valor da área: ",area);