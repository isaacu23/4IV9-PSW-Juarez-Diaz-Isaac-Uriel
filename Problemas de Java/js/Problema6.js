function validarInt(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular()

{
    var dn = parseInt(document.formulario.diaNacimiento.value);
    var mn = parseInt(document.formulario.mesNacimiento.value);
    var an = parseInt(document.formulario.anoNacimiento.value);
    var da = parseInt(document.formulario.diaActual.value);
    var ma = parseInt(document.formulario.mesActual.value);
    var aa = parseInt(document.formulario.anoActual.value);



    if (isNaN(dn) || isNaN(mn) || isNaN(an) || isNaN(da) || isNaN(ma) || isNaN(aa)) 
    
    {
        alert("Necesitas llenar todos los campos de texto");
        calcular.break();
    }

    if (dn == 0 || mn == 0 || an == 0 || da == 0 || ma == 0 || aa == 0)
    
    {
        alert("No hay ceros en las fechas");
        calcular.break();
    }

    if (aa < an) 
    {
        alert("Hay una inconsistencia con las fechas");
        calcular.break();
    }
     else if (aa == an) 
     {
        if (ma < mn) {
            alert("Hay una inconsistencia con las fechas");
            calcular.break();
        } else if (ma == mn) {
            if (da < dn) {
                alert("Hay una inconsistencia con las fechas");
                calcular.break();
            } else if (da == dn) {
                document.formulario.edad.value = "0";
                calcular.break();
            }
        }
    }

    if (mn > 12 || ma > 12) {
        alert("Se toman en cuenta unicamente 12 meses");
        calcular.break();
    }

    if (mn == 1 || mn == 3 || mn == 5 || mn == 7 || mn == 8 || mn == 10 || mn == 12) {
        if (dn > 31) {
            alert("Hay un poco de comedia aqui");
            calcular.break();
        }
    } else if (mn == 2) {
        if (an % 4 == 0) {
            if (dn > 29) {
                alert("Hay un poco de comedia aqui");
                calcular.break();
            }
        } else {
            if (dn > 28) {
                alert("Hay un poco de comedia aqui");
                calcular.break();
            }
        }
    } else {
        if (dn > 30) {
            alert("Hay un poco de comedia aqui");
            calcular.break();
        }
    }

    if (ma == 1 || ma == 3 || ma == 5 || ma == 7 || ma == 8 || ma == 10 || ma == 12) {
        if (da > 31) {
            alert("Hay un poco de comedia aqui");
            calcular.break();
        }
    } else if (ma == 2) {
        if (aa % 4 == 0) {
            if (da > 29) {
                alert("Hay un poco de comedia aqui");
                calcular.break();
            }
        } else {
            if (da > 28) {
                alert("Hay un poco de comedia aqui");
                calcular.break();
            }
        }
    } else {
        if (da > 30) {
            alert("Hay un poco de comedia aqui");
            calcular.break();
        }
    }

    var edad;

    if (an == aa) {
        edad = 0;
    } else {
        edad = aa - an;
        if (ma < mn) {
            edad -= 1;
        } else if (ma == mn) {
            if (da < dn) {
                edad -= 1;
            }
        }
    }
    document.formulario.edad.value = edad;
}

function borrar() {
    document.formulario.diaNacimiento.value = "";
    document.formulario.mesNacimiento.value = "";
    document.formulario.anoNacimiento.value = "";
    document.formulario.diaActual.value = "";
    document.formulario.mesActual.value = "";
    document.formulario.anoActual.value = "";
    document.formulario.edad.value = "";
}