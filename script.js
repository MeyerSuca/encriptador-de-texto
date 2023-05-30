let btnEncript = document.querySelector("#encriptar");
let btnDesencr = document.querySelector("#desencriptar");
let btnCopiar = document.querySelector("#copiar");
let salida = document.querySelector("#salida");

function encriptador() {
    let temporal = "";
    let texto = document.querySelector("#entrada").value;
    for (let i of texto) {
        if (i == "a") {
            temporal += "ai";
        } else if (i == "e") {
            temporal += "enter";
        } else if (i == "i") {
            temporal += "imes";
        } else if (i == "o") {
            temporal += "ober";
        } else if (i == "u") {
            temporal += "ufat";
        } else {
            temporal = temporal + i;
        }
    }
    salida.textContent = temporal;
    salida.style.background = "#fff";
}
function copiar() {
    /* let textoACopiar = document.querySelector("#salida-texto");
    navigator.clipboard.writeText(textoACopiar.innerHTML); */
    try {
        // intentar copiar el contenido seleccionado
        var resultado = document.execCommand('copy');
        console.log(resultado ? 'Email copiado' : 'No se pudo copiar el email');
    } catch (err) {
        console.log('ERROR al intentar copiar el email');
    }
}

btnEncript.addEventListener("click", encriptador);
btnCopiar.addEventListener("click", copiar);