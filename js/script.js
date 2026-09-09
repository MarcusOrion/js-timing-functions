// Utilizzare le timing functions di JavaScript per risolvere le seguenti traccie:

//     mostra un alert 3 secondi dopo il caricamento della pagina
/*const clock = setTimeout(countdown, 3000);
function countdown() {
  alert("Attenzione, ci sei riuscito!");
}*/
//     al click su un elemento, cambia il colore dello sfondo dopo un ritardo
/*const button = document.getElementById("btn");
button.addEventListener("click", function () {
  setTimeout(function () {
    document.querySelector("body").classList.add("sfondo_blu");
  }, 2500);
});*/
//     rendi visibile un testo nascosto dopo alcuni secondi dal caricamento
/*const clock = setTimeout(countdown, 3000);
function countdown() {
  document.querySelector("p").classList.remove("d-none");
}*/
//     simula un reindirizzamento: al click su un tasto cambia testo di un paragrafo e ricarica la pagina dopo X secondi
/*const button = document
  .getElementById("btn")
  .addEventListener("click", function () {
    document.getElementById("message").textContent =
      "Stai per venire reindirizzato...";
    setTimeout(function () {
      location.reload();
    }, 3000);
  });*/
//     simula uno stato di "caricamento": cambia il testo di un elemento appena cliccato un pulsante e cambialo nuovamente dopo qualche secondo
/*const button = document
  .getElementById("btn")
  .addEventListener("click", function () {
    document.getElementById("message").textContent =
      "Questo testo è stato appena cambiato";
    setTimeout(function () {
      document.getElementById("message").textContent =
        "Questo testo è stato nuovamente cambiato";
    }, 3000);
  });*/
//     mostra l'orario corrente aggiornandolo ogni secondo
/*function getTime() {
  const ora = new Date();
  const hours = ora.getHours().toString().padStart(2, "0");
  const minutes = ora.getMinutes().toString().padStart(2, "0");
  const seconds = ora.getSeconds().toString().padStart(2, "0");

  document.getElementById("message").textContent =
    `${hours}:${minutes}:${seconds}`;
}
setInterval(getTime, 1000);*/
//     fai lampeggiare un titolo alternandone il colore ogni mezzo secondo
const titolo = document.getElementById("title");

setInterval(() => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  titolo.style.color = `rgb(${r}, ${g}, ${b})`;
}, 500);

//     anima una progress bar aumentando la sua larghezza gradualmente fino al 100%
//     mostra un nuovo numero casuale ogni X secondi
//     cambia automaticamente il colore di sfondo della pagina ad intervalli regolari
