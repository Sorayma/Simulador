let acciones = []
function sumar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = 0;
    if (isNaN(n1) || isNaN(n2)) {
        alert("debe ingresar dos números")
    }
    else {
        resultado = n1 + n2;
        alert("el resultado es: " + resultado)
    }
    acciones.push("sumar")
}
function restar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = 0;
    resultado = n1 - n2;
    alert("el resultado es: " + resultado)
    acciones.push("restar")

}
function multiplicar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = 0;
    resultado = n1 * n2;
    alert("el resultado es: " + resultado)
    acciones.push("multiplicar")

}
function dividir() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = 0;
    if (n2 == 0) {
        alert("no se puede dividir entre 0");
    }
    else {
        resultado = n1 / n2;
        alert("el resultado es: " + resultado)
        acciones.push("dividir")

    }

}
function mensaje() {
    let n4 = prompt("ingresa un numero");
    let result = parseInt(n4);
    if (isNaN(result)) {
        alert("Ingrese un número")
    }
    else {
        let resultado = "";
        for (let i = 1; i < 11; i++) {
            resultado += `${result} * ${i} = ${result * i}\n`;
        }
        alert(resultado);

    }

}
function moves() {
    let result = "<table>";
    for (const element of acciones) {
        result += "<tr><td>" + element + "</td></tr>";
    }
    result += "</table>";
    let getid = document.getElementById("show-acciones")
    getid.innerHTML = result
}
function search() {
    let dato = document.getElementById("buscar").value;
    let items = acciones.filter(accion => accion.toLowerCase() === dato);
    let cantidad = items.length
    alert("La acción " + dato + " se ha realizado " + cantidad + " veces");
}
//let resultadoElemento = document.getElementById("resultado");
//resultadoElemento.innerHTML = mensaje;