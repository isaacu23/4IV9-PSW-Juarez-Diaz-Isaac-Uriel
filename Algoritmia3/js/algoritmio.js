function problema3() {

    var input = document.querySelector('#p3-input').value;
    var arreglo = input.split(',');
    var posicion = "";
    var M1 = 0;
    var M2 = "";
    var VALIDACIONES = /^[A-ZÑ]+$|^([A-ZÑ]+( *, *))+[A-ZÑ]+$|^[A-ZÑ]+( *, *)[A-ZÑ]+$/;

    if (!VALIDACIONES.test(input)) 
    {
        alert(" EN MAYUSCULAS COMEDIANTE");
        return;
    }


    for (var i = 0; i < arreglo.length; i++)
    
    {
        posicion = arreglo[i];

        var Salida = Conteo(posicion.replace(" ", ""));
        var lasValores = Salida.split("|");
        var Largo = parseInt(lasValores[0], 10);

        if (Largo > M1)
         {
            M1 = Largo;
            M2 = Salida;
        }
    }


    validarn(input)
    document.querySelector("#p3-output").textContent = "ES NECESARIO MAS CARACTERRES: " + M2;
}


function Conteo(elemento) {

    var diccionario = new Dictionary();
    var lsLetras = "";
    var lnCont = 0;


    for (var i = 0; i < elemento.length; i++) 
    
    {

        var caracter = elemento.substr(i, 1);
        console.log(caracter);
        console.log(diccionario.has(caracter));

        if (diccionario.has(caracter) == false) 
        {
            diccionario.set(caracter, caracter);
            lsLetras += caracter + ",";
            lnCont++;
        }
    }
    return lnCont.toString() + "(" + lsLetras + ")";
}


class Dictionary 
{
    constructor() {
        this.items = {}
    }
    has(key) {
        return this.items.hasOwnProperty(key);
    }
    set(key, value) {
        this.items[key] = value;
    }
    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }
    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }
    values() {
        const values = []
        for (let key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key])
            }
        }
        return values
    }
    size() {
        return Object.keys(this.items).length
    }
    keys() {
        const keys = []
        for (let key in this.items) {
            keys.push(keys)
        }
        return keys
    }
    getItems() {
        return this.items
    }
}

function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado === 8) return true;
    var patron = /[A-Z\,]/g;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}