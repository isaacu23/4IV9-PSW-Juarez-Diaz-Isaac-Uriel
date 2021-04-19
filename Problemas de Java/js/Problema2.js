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
    var sueld = document.formulario.sueldo.value;
    var venta = document.formulario.ventas.value;
    if (sueld == "" || venta == "") 
    {
        alert("Necesitas llenar todos los campos de texto");
        calcular.break();
    }

    var count = 0;
    for (var i = 0; i < sueld.length; i++) 
    {
        if (sueld.charAt(i) == ".")
         {
            count += 1;
        }
    }
    if (count > 1) {
        alert("No se puede poner mas de 1 punto en el campo de texto");
    } else {
        var comi = (parseFloat(sueld) * .1) * parseInt(venta);
        var total = comi + parseFloat(sueld);
        document.formulario.comisiones.value = "$" + comi;
        document.formulario.total.value = "$" + total;
    }
}

function borrar() {
    document.formulario.sueldo.value = "";
    document.formulario.ventas.value = "";
    document.formulario.comisiones.value = "";
    document.formulario.total.value = "";
}