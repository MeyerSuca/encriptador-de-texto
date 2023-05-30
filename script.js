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
function desencriptar() {
    let temporal = "";
    let texto = document.querySelector("#entrada").value;
    let i = 0;
    while (i < texto.length) {
        if (texto[i] + texto[i + 1] == "ai") {
            temporal += "a";
            i += 2;
        } else if (texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] + texto[+4] == "enter") {
            temporal += "e";
            i += 5;
        } else if (texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] == "imes") {
            temporal += "i";
            i += 4;
        } else if (texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] == "ober") {
            temporal += "o";
            i += 4;
        } else if (texto[i] + texto[i + 1] + texto[i + 2] + texto[i + 3] == "ufat") {
            temporal += "u";
            i += 4;
        } else {
            temporal = temporal + texto[i];
            i++;
        }
    }
    salida.textContent = temporal;
    salida.style.background = "#fff";
}

btnEncript.addEventListener("click", encriptador);
btnDesencr.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiar);