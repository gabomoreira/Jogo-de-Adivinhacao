var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.querySelector("h2#resultado");
var tentativas = 3;
function Chutar() {
  var chute = parseInt(document.querySelector("input#valor").value);
  console.log(chute);
  console.log(numeroSecreto);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Acertou! Parece até que você leu minha mente, agora vá jogar na mega sena HAHAHA. Atualize a página para jogar de novo.";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Digite um número de 0 a 10";
  } else if (chute > numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML = `Você errou! Vou te dar uma dica, o número secreto é MENOR do qual você digitou. Restam apenas: ${tentativas} tentativas`;
  } else if (chute < numeroSecreto) {
    tentativas = tentativas - 1;
    elementoResultado.innerHTML = `Você errou! Vou te dar uma dica, o número secreto é MAIOR do qual você digitou. Restam apenas: ${tentativas} tentativas`;
  } else {
    elementoResultado.innerHTML = "Errou KKKKKKK";
  }
  if (tentativas == 0) {
    elementoResultado.innerHTML = `Suas tentativas acabaram, o número certo era ${numeroSecreto}. Atualize a página para jogar de novo.`;
  }
}
