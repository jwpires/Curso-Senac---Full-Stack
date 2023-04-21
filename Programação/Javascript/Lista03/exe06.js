// 6. Crie um algoritmo que tenha uma função que vai receber o nome da pessoa e a idade, caso essa pessoa
// tenha idade maior que 18 anos, vai aparecer a mensagem que ela pode entrar na festa, caso contrário vai
// aparecer que ela não pode. Exemplo mensagem: Joao tem 18 anos e pode entrar na fest

function AcessoFesta(nome, idade){
    if (idade >= 18) {
        console.log(`${nome} tem ${idade} anos e pode entrar na festa`);        
    }else console.log(`${nome} não é maior de idade, portanto não pode entrar na festa!`);
}

AcessoFesta("José", 17);