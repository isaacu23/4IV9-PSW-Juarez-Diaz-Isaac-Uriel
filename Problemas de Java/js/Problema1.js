function validar(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes()
 {
    var valor = document.formulario.cantidad.value;
    if (valor == "") {
        alert("Necesitas llenar todos los campos de texto comediante");
        interes.break();
    }

    var count = 0;
    for (var i = 0; i < valor.length; i++) {
        if (valor.charAt(i) == ".") {
            count += 1;
        }
    }
    if (count > 1) 
    {
        alert("No se puede poner mas de 1 punto en la cantidad,Alta comedia");
    } 
    
    else {
        var resultado = parseFloat(valor);
        var interes = resultado * 0.02;
        var total = resultado + interes;
        document.formulario.total.value = "$" + total;
    }
}

function borrar() {
    document.formulario.cantidad.value = "";
    document.formulario.total.value = "";
}