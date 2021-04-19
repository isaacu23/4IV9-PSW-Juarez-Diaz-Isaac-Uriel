function validarInt(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var h = document.formulario.hombres.value;
    var m = document.formulario.mujeres.value;
    if (h == "" || m == "") {
        alert("Necesitas llenar todos los campos de texto");
        calcular.break();
    }

    var ph = parseInt(h) * 100 / (parseInt(h) + parseInt(m));
    var pm = parseInt(m) * 100 / (parseInt(h) + parseInt(m));
    document.formulario.porcentajeH.value = ph + "%";
    document.formulario.porcentajeM.value = pm + "%";
}

function borrar() {
    document.formulario.hombres.value = "";
    document.formulario.mujeres.value = "";
    document.formulario.porcentajeH.value = "";
    document.formulario.porcentajeM.value = "";
}