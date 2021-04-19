function validar(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var an = document.formulario.anos.value;
    var salario = document.formulario.salario.value;

    if (an == "" || salario == "")
     {
        alert("Necesitas llenar todos los campos de texto");
        calcular.break();
    }


    var count = 0;
    for (var i = 0; i < an.length; i++) 
    {
        if (an.charAt(i) == ".") {
            count += 1;
        }
    }
    if (count > 1)
     {
        alert("No se puede poner mas de 1 punto en la cantidad");
    } else {
        count = 0;
        for (var i = 0; i < salario.length; i++) {
            if (salario.charAt(i) == ".") {
                count += 1;
            }
        }
        if (count > 1) 
        {
            alert("No se puede poner mas de 1 punto en la cantidad");
        } else {
            if (an < 1) {
                document.formulario.total.value = "$" + (parseFloat(salario) * .5);
            } else if (an >= 1 && an < 2) {
                document.formulario.total.value = "$" + (parseFloat(salario) * .7);
            } else if (an >= 2 && an < 5) {
                document.formulario.total.value = "$" + (parseFloat(salario) * .10);
            } else if (an >= 5 && an < 10) {
                document.formulario.total.value = "$" + (parseFloat(salario) * .15);
            } else {
                document.formulario.total.value = "$" + (parseFloat(salario) * .20);
            }
        }
    }
}

function borrar() 
{
    document.formulario.salario.value = "";
    document.formulario.anos.value = "";
    document.formulario.total.value = "";
}