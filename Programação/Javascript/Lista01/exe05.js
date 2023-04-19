const prompt = require('prompt-sync')();

var horasTrabalhada = prompt("Informe a quantidade de horas trabalhada: ");
var horasExtras = prompt("Informe a quantidade de horas extras trabalhada: ");

console.log("Salário bruto: "+((horasTrabalhada * 10 + horasExtras * 15)));
console.log("Salário líquido: "+((((horasTrabalhada * 10) + (horasExtras * 15 )) * (0.90))));