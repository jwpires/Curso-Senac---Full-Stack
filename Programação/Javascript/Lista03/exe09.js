function MaiorNumero(vetor){
    let aux= 1;
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] > vetor[aux]){
            aux = i;
        }
    }
    return vetor[aux];
}

console.log("O maior valor do vetor é :"+MaiorNumero([1,18,4,9]));