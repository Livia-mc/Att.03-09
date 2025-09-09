document.getElementById('botao').onclick = iniciarJogo;
function iniciarJogo() {

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

var n
n = parseInt(prompt("Qual é seu chute? "));

while (n !== numeroAleatorio) {
    if (n < numeroAleatorio) {
        alert("Seu chute é muito baixo");
    } else {
        alert("Seu número é muito alto");
    }
    n = parseInt(prompt("Qual é seu novo chute? "));
}

alert("Parabéns!!!!! Vc acertou, é o número " + numeroAleatorio);
}