function JogaDado(quantidade){
    for (let index = 0; index < quantidade; index++) {
        let min = Math.ceil(1);
        let max = Math.floor(21);
        console.log("O número do dado sorteado foi :",(Math.floor(Math.random() * (max-min)+ min)));
    }
}

JogaDado(3);