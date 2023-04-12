// DESAFIO
// 10-) Monte uma calculadora:
// 1-Primeiro deve ser perguntado o valor 1 e o valor 2
// 2-Depois deve ser exibido um menu com as operações (multiplicação, divisão, subtração e adição)
// 3-Não deve sair do menu até que seja selecionada uma opção válida
// 4-Exibir o resultado com a operação escolhida

var n1 = 10;
var n2 = 5;
var opcao = 3;
do{
    console.log("Informe qual operação matemática deseja realizar:");
    console.log("1 - Multiplicação");
    console.log("2 - Divisão");
    console.log("3 -Adição");
    console.log("4 -Subtração");

    switch(opcao){
        case 1: console.log("Resultado: "+(n1*n2));
                break;

        case 2: console.log("Resultado: "+(n1/n2));
                break;

        case 3: console.log("Resultado: "+(n1+n2));
                break;

        case 4: console.log("Resultado: "+(n1-n2));
                break;

        default: console.log("Valor inválido, digite um valor válido.");
                    break;


    }

}while(opcao < 0 || opcao > 4)
