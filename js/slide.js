var radio = document.querySelector(".manual-btn")
var cont = 1

/* Deixa a primeira imagem já marcada com base no ID */
document.getElementById("radio1").checked = true

/* Duraçao da permanencia dos slides, Os 5000 corresponde a 5 segundos*/
setInterval(() => {
  proximaImg()
}, 3000)

function proximaImg() {
  cont++
  if (cont > 3) {
    cont = 1
  }
  document.getElementById("radio" + cont).checked = true
}
