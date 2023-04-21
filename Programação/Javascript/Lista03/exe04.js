// 4. Crie um algoritmo que tenha uma função que vai receber dois números e retornar a soma desses dois
// números
const prompt = require('prompt-sync')();

function soma(v1,v2){
    return parseFloat(v1) +parseFloat(v2);
}

let v1 = prompt("informe o primeiro número: ");
let v2 = prompt("informe o segundo número: ");

console.log("A soma dos números é: "+soma(v1,v2));




