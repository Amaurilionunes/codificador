function encriptar(){
    var texto = document.getElementById("inputTexto").ariaValueMax.toLowerCase();
    var txtCifrado = texto.replace(/e/ igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/ igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/ igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/ igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/ igm,"ufat");

    document.getElementById("imgDer").style.display = nome;
    document.getElementById("texto").style.display = nome;
    document.getElementById("texto2r").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
