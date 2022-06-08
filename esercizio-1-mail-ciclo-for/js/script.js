// Dichiaro la variabile per chiedere la mail dell'utente
let userMail = prompt(`Scrivi la tua mail per accedere`);
// Dichiaro l'array delle mail autorizzate
let mails = ["franco@boolean.it", "gianni@boolean.it", "marco@boolean.it"];
// Imposto il ciclo for per verificare se la mail è autorizzata e stampare in pagina
for (let i = 0; i < mails.length; i++) {
  let result = document.getElementById("result");
  if (userMail === mails[i]) {
    result.innerHTML = "Accesso autorizzato";
    break;
  } else {
    result.innerHTML = "Accesso negato";
  }
}
