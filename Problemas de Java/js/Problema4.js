function validar(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9.]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function calcular() {
    var cali1 = document.formulario.cal1.value;
    var cali2 = document.formulario.cal2.value;
    var cali3 = document.formulario.cal3.value;
    var caliEx = document.formulario.calEx.value;
    var caliTra = document.formulario.calTra.value;
    if (cali1 == "" || cali2 == "" || cali3 == "" || caliEx == "" || caliTra == "") {
        alert("Necesitas llenar todos los campos de texto");
        calcular.break();
    }

    if (parseFloat(cali1) > 10 || parseFloat(cali2) > 10 || parseFloat(cali3) > 10 || parseFloat(caliEx) > 10 || parseFloat(caliTra) > 10) {
        alert("Las calificaciones son del 0-10");
        document.formulario.cal1.value = "";
        document.formulario.cal2.value = "";
        document.formulario.cal3.value = "";
        document.formulario.calEx.value = "";
        document.formulario.calTra.value = "";
    } else {
        var count = 0;
        for (var i = 0; i < cali1.length; i++) {
            if (cali1.charAt(i) == ".") {
                count += 1;
            }
        }
        if (count > 1) 
        {
            alert("Alta comedia");
        } 
        else
         {
            count = 0;
            for (var i = 0; i < cali2.length; i++) {
                if (cali2.charAt(i) == ".") {
                    count += 1;
                }
            }

            if (count > 1) 
            {
                alert("Alta comedia");
            } else 
            {
                count = 0;
                for (var i = 0; i < cali3.length; i++) {
                    if (cali3.charAt(i) == ".") {
                        count += 1;
                    }
                }

                if (count > 1) 
                {
                    alert("Alta comedia");
                } else
                 {
                    count = 0;
                    for (var i = 0; i < caliEx.length; i++) {
                        if (caliEx.charAt(i) == ".") {
                            count += 1;
                        }
                    }
                    if (count > 1) {
                        alert("Alta comedia");
                    } else {
                        count = 0;
                        for (var i = 0; i < caliTra.length; i++) {
                            if (caliTra.charAt(i) == ".") {
                                count += 1;
                            }
                        }
                        if (count > 1) {
                            alert("Alta comedia");
                        } else {
                            var califFinal = (((parseFloat(cali1) + parseFloat(cali2) + parseFloat(cali3)) / 3) * .55) + (parseFloat(caliEx) * .3) + (parseFloat(caliTra) * .15);
                            document.formulario.calFinal.value = califFinal;
                        }
                    }
                }
            }
        }
    }
}

function borrar() 


{
    document.formulario.cal1.value = "";
    document.formulario.cal2.value = "";
    document.formulario.cal3.value = "";
    document.formulario.calEx.value = "";
    document.formulario.calTra.value = "";
    document.formulario.calFinal.value = "";
}