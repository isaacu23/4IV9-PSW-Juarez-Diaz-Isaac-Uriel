function validar(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validarInt(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var sueldo = document.formulario.sueldo.value;
    var horas = parseInt(document.formulario.horas.value);

    if (sueldo == "" || isNaN(horas)) {
        alert("Necesitas llenar todos los campos de texto");
        calcular.break();
    }

    var count = 0;
    for (var i = 0; i < sueldo.length; i++) {
        if (sueldo.charAt(i) == ".") {
            count += 1;
        }
    }
    if (count > 1) {
        alert("No se puede poner mas de 1 punto en la cantidad");
    } else {
        if (horas <= 40) {
            document.formulario.total.value = "$" + (horas * sueldo);
        } else {
            horas -= 40;
            if (horas > 8) {
                horas -= 8;
                document.formulario.total.value = "$" + ((parseFloat(sueldo) * 40) + (parseFloat(sueldo) * 16) + (parseFloat(sueldo) * 3 * horas));
            } else {
                document.formulario.total.value = "$" + (((parseFloat(sueldo) * 40) + (parseFloat(sueldo) * 2 * horas)));
            }
        }
    }
}

function borrar() {
    document.formulario.sueldo.value = "";
    document.formulario.horas.value = "";
    document.formulario.total.value = "";
}