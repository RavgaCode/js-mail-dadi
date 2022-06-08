// Dichiaro la variabile per chiedere la mail dell'utente
let userMail = prompt(`Scrivi la tua mail per accedere`);
// Dichiaro l'array delle mail autorizzate
let mails = ["franco@boolean.it", "gianni@boolean.it", "marco@boolean.it"];
// Imposto l'if statemente di verifica mail e risposta
if (mails.includes(userMail)) {
  alert(`Accesso autorizzato`);
} else {
  alert(`Accesso negato`);
}
