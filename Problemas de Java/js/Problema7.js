function validar(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var a = document.formulario.num1.value;
    var b = document.formulario.num2.value;

    if (a == "" || b == "") 
    {
        alert("Necesitas llenar todos los campos de texto");
        calcular.break();
    }



    var count = 0;
    for (var i = 0; i < a.length; i++) 
    {
        if (a.charAt(i) == ".") {
            count += 1;
        }
    }


    if (count > 1) 
    {
        alert("No se puede poner mas de 1 punto en la cantidad");
    } else {
        count = 0;
        for (var i = 0; i < b.length; i++) {
            if (b.charAt(i) == ".") {
                count += 1;
            }
        }
        if (count > 1) {
            alert("No se puede poner mas de 1 punto en la cantidad");
        } else {
            if (a > b) {
                document.formulario.total.value = parseFloat(a) - parseFloat(b);
            } else if (a == b) {
                document.formulario.total.value = parseFloat(a) * parseFloat(b);
            } else {
                document.formulario.total.value = parseFloat(a) + parseFloat(b);
            }
        }
    }
}

function borrar() {
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.total.value = "";
}