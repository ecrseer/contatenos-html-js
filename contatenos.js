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
function enviarFormulario(ev) {
    ev.preventDefault()
    ativaCamposObrigatorios()
    let regexpEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

    let formulario = new FormData(ev.target)
    let email = formulario.get("Email")
    
    if(email.length<5 || email.match(regexpEmail)==null){
        debugger
        mostraAlertDialog("digite um email válido")
    } 

}
 