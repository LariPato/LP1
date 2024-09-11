


function gerarNumeroAleatorio(){
    const numeroAleatorio = Math.floor( (Math.random()*11))
    return numeroAleatorio
}

function jogar () {
    const pegaNumeroAleatorio = gerarNumeroAleatorio()
    console.log(pegaNumeroAleatorio)
do{
    const palpite = prompt("Adivinhe o numero (1 a 10)")
}

while(palpite != pegaNumeroAleatorio){
    alert("Você errou.  Tente novamente.")
}
}

jogar()

alert("Você acertou!")

