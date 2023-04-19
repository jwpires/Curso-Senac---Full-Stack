//2-) Escreva um programa que calcule quantos dias de vida aproximados a pessoa tem, apenas
// perguntando sua idade. Considere sempre anos completos, e que um ano possui 365 dias. Ex:
// uma pessoa com 19 anos possui 6935 dias de vida; veja um exemplo de saída: VOCÊ JÁ VIVEU
// 6935 DIAS
const prompt = require('prompt-sync')();
let idade = prompt("Informe sua idade: ");

var diasDeVida = idade * 365;
console.log("Você já viveu dias "+diasDeVida);