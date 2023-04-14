// 9-) Elaborar um programa que apresente o valor da conversão em real (R$) de um valor
// lido em dólar (US$). O programa deve solicitar o valor da cotação do dólar
const prompt = require('prompt-sync')();
var dolar = prompt("Informe o a quantidade de dolares que você quer converter: ");
var cotacaoDolarReal = prompt("Informe o a cotação do dolar de hoje: ");

console.log("A conversão de "+dolar+" dolar(es) em real é/são "+(dolar*cotacaoDolarReal)+" real(is).");