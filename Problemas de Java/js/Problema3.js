function validar(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var costo = document.formulario.costo.value;
    if (costo == "") {
        alert("Necesitas llenar todos los campos de texto");
        calcular.break();
    }
    var count = 0;
    for (var i = 0; i < costo.length; i++) {
        if (costo.charAt(i) == ".") {
            count += 1;
        }
    }
    if (count > 1) {
        alert("No se puede poner mas de 1 punto en la cantidad");
    } else {
        var total = parseFloat(costo) * .85;
        document.formulario.total.value = "$" + total;
    }
}

function borrar() {
    document.formulario.costo.value = "";
    document.formulario.total.value = "";
}