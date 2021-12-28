function enviarFormulario(ev) {
    ev.preventDefault()
    
    let formulario = new FormData(ev.target)
    let nome = formulario.get("Nome")

    let dialog = document.querySelector(".alertadialog")
    dialog.classList.add("fadeIn")

    let email = formulario.get("Email")
    debugger
     
}