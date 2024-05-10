//Desafio do projeto  - 01
//Dev. nível noob: Thiago Mello
//Data: 09/05/2024

//Nome do herói

let jogador = "Felipão" 

//Nível do herói

let xpAtual = 105685

// repetição da frase

const nome = ' O herói de nome ';
const nivel = ' está no nível de ';

if (xpAtual <= 1000) {
    console.log (nome + jogador + nivel + "ferro! Continue lutando para upar...")
}  else if (xpAtual >= 1001 && xpAtual <= 2000) {
    console.log (nome + jogador + nivel + "Bronze! Você já saiu do ponto de partida.")
}  else if (xpAtual >= 2001 && xpAtual <= 5000) {
    console.log (nome + jogador + nivel + "Prata! Agora você pode caçar Lobisomem!")
}   else if (xpAtual >= 5001 && xpAtual <= 7000) {
    console.log (nome + jogador + nivel + "Ouro! Você já pode ser um Cavaleiro dos Zoadicos")
}   else if (xpAtual >= 7001 && xpAtual <= 8000) {
    console.log (nome + jogador + nivel + "Platina! É um belo metal!")
}   else if (xpAtual >= 8001 && xpAtual <= 9000) {
    console.log (nome + jogador + nivel + "Ascemdemte! Talvez você tenha nascido pra isso!")
}   else if (xpAtual >= 9001 && xpAtual <= 10000) {
    console.log (nome + jogador + nivel + "Radiante!!! Você ofusca o sol!")
}   else if (xpAtual > 10001) {
    console.log (nome + jogador + nivel + "um Deus caminhando entre meros mortais")
}    