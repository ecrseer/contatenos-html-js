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
        inputs[i].setAttribute("required", "")
    }
    let msg = document.querySelector("textarea")
    msg.setAttribute("required", "")
}
function corrigeTelefone(ev) {
    let celOuFixo = ev.target.value.length > 9 ? 5 : 4
    let regexpTelSemDDD;
    if (celOuFixo = 5) {
        regexpTelSemDDD = new RegExp(/^(\d\d)(\d{5})(\d{4}).*/)
    }else{
        regexpTelSemDDD = new RegExp(/^(\d\d)(\d{4})(\d{4}).*/)
    }
    let novo = ev.target.value.replace(regexpTelSemDDD, "($1) $2-$3")
    ev.target.value = novo
}
function enviarFormulario(ev) {
    ev.preventDefault()
    ativaCamposObrigatorios()
    let regexpNome = /^[a-záàâãéèêíïóôõöúçñ ]+$/i

    let regexpEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
    let regexpTelSemDDD = /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
    let msgErro = ""

    let formulario = new FormData(ev.target)
    let nome = formulario.get("Nome")
    let email = formulario.get("Email")
    let telefone = formulario.get("Tel")
    let mensagem = formulario.get("MsgTxt")

    if (nome.toLowerCase().match(regexpNome) == null) {
        msgErro += "Digite um nome válido, "
    }

    if (telefone.match(regexpTelSemDDD) == null) {
        msgErro += "Digite um telefone válido, "
    }


    if (email.length < 5 || email.match(regexpEmail) == null) {
        msgErro += "Digite um Email válido, "
    }
    if (msgErro.length > 1) {
        mostraAlertDialog(msgErro)
    }

}
