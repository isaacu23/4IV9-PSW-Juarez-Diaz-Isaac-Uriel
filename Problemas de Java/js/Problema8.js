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
    var c = document.formulario.num3.value;

    if (a == "" || b == "" || c == "") {
        alert("Necesitas llenar todos los campos de texto");
        calcular.break();
    }

    var count = 0;
    if (a == b || a == c || b == c) {
        alert("Los numeros no son diferentes");
        calcular.break();
    }

    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) == ".") {
            count += 1;
        }
    }
    if (count > 1) {
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
            count = 0;
            for (var i = 0; i < c.length; i++) {
                if (c.charAt(i) == ".") {
                    count += 1;
                }
            }
            if (count > 1) {
                alert("No se puede poner mas de 1 punto en la cantidad");
            } else {
                if (parseFloat(a) > parseFloat(b) && parseFloat(a) > parseFloat(c)) {
                    document.formulario.mayor.value = a;
                } else if (parseFloat(b) > parseFloat(a) && parseFloat(b) > parseFloat(c)) {
                    document.formulario.mayor.value = b;
                } else {
                    document.formulario.mayor.value = c;
                }
            }
        }
    }
}

function borrar() {
    document.formulario.num1.value = "";
    document.formulario.num2.value = "";
    document.formulario.num3.value = "";
    document.formulario.mayor.value = "";
}