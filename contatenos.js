let fadeOutTimeOutTimer = setTimeout(() => { }, 2000)
function mostraAlertDialog(texto) {

    let dialog = document.querySelector(".alertadialog")
    dialog.classList.add("fadeIn")
    dialog.textContent = texto

    clearTimeout(fadeOutTimeOutTimer)
    fadeOutTimeOutTimer = setTimeout(() =>
        dialog.classList.remove("fadeIn"),
        4000)
}
function ativaCamposObrigatorios() {
    let inputs = document.getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {  
        inputs[i].setAttribute("required","")           
    } 
}
//setTimeout(4700, ativaCamposObrigatorios())
function enviarFormulario(ev) {
    ev.preventDefault()
    ativaCamposObrigatorios()
    let formulario = new FormData(ev.target)
    let nome = formulario.get("Nome")
    let email = formulario.get("Email")
    debugger

}