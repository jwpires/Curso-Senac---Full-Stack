// 7-) Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor
// da hipotenusa.

var catetoOposto = 4;
var catetoAdjacente = 3;
var hipotenusa = 0;

hipotenusa = Math.sqrt((Math.pow(catetoOposto,2) + Math.pow(catetoAdjacente,2)));

console.log("Valor da hipotenusa é: "+hipotenusa);