// Dichiaro le variabili per recuperare gli elementi dall'html
const result = document.getElementById("result");
const playButton = document.getElementById("play-button");
playButton.addEventListener("click", rolldice);
// Imposto la funzione per il tiro dei dadi e stampa in pagina del risultato
function rolldice() {
  let userDice = Math.floor(Math.random() * 6 + 1);
  let botDice = Math.floor(Math.random() * 6 + 1);
  if (userDice > botDice) {
    result.innerHTML = "Hai vinto!";
  } else if (userDice < botDice) {
    result.innerHTML = "Hai perso :(";
  } else {
    result.innerHTML = "Pareggio :/";
  }
}
