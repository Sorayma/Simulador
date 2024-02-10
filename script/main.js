let acciones = []; //acciones se almacenara en localStorage
let objetoUsuario = [];
// clave: acciones - valor: let acciones
let alerta = document.getElementById("alertas"); 

function sumar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = 0;
    if (isNaN(n1) || isNaN(n2)) {
        alerta.style.display= "inline-block";
        alerta.innerHTML = "Debe ingresar dos números" //remplazo de alert();
        // alert("debe ingresar dos números")
    }
    else {
        resultado = n1 + n2;
        alerta.style.display= "inline-block";
        alerta.innerHTML = "El resultado es: " + resultado;
    }
    if (!sessionStorage.getItem('acciones')) {
        sessionStorage.setItem('acciones', JSON.stringify([]));
      }
      let accionesActual = JSON.parse(sessionStorage.getItem('acciones'));
      acciones.push("Suma");
      sessionStorage.setItem('acciones', JSON.stringify(acciones));
}
function restar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = 0;
    resultado = n1 - n2;
    alerta.style.display= "inline-block";
    alerta.innerHTML = "El resultado es: " + resultado;
    if (!sessionStorage.getItem('acciones')) {
        sessionStorage.setItem('acciones', JSON.stringify([]));
      }
      let accionesActual = JSON.parse(sessionStorage.getItem('acciones'));
      acciones.push("Resta");
      sessionStorage.setItem('acciones', JSON.stringify(acciones));
}
function multiplicar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = 0;
    resultado = n1 * n2;
    alerta.style.display= "inline-block";
    alerta.innerHTML = "El resultado es: " + resultado;
    if (!sessionStorage.getItem('acciones')) {
        sessionStorage.setItem('acciones', JSON.stringify([]));
      }
      let accionesActual = JSON.parse(sessionStorage.getItem('acciones'));
      acciones.push("Multiplicar");
      sessionStorage.setItem('acciones', JSON.stringify(acciones));

}
function dividir() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let resultado = 0;
    if (n2 == 0) {
        alerta.style.display= "inline-block";
        alerta.innerHTML = "No se puede dividir entre 0";
    }
    else {
        resultado = n1 / n2;
        alerta.style.display= "inline-block";
        alerta.innerHTML = "El resultado es: " + resultado;
        if (!sessionStorage.getItem('acciones')) {
            sessionStorage.setItem('acciones', JSON.stringify([]));
          }
          let accionesActual = JSON.parse(sessionStorage.getItem('acciones'));
          acciones.push("Dividir");
          sessionStorage.setItem('acciones', JSON.stringify(acciones));
    }

}
function mensaje() {
    let input = `
    <form method = "post">
    <input type="number" placeholder="ingresa un numero" id="n4">
    <button type="button" onclick="ejecutar()">enviar</button>
    </form>`;

    alerta.style.display= "inline-block";
    alerta.innerHTML = input;
    
    // let n4 = prompt("ingresa un numero"); //div flotante o un div que oculte el contenido actual
}

function ejecutar(){
    let result = parseInt(document.getElementById("n4").value);
        let resultado = "";
        for (let i = 1; i < 11; i++) {
            resultado += `${result} * ${i} = ${result * i}`+"</br>";         
        }
        alerta.innerHTML = resultado;
}

function moves() {
    let result = "<table>";
    let lista = sessionStorage.getItem("acciones".split(","));
    let newlist = JSON.parse(lista);
    let getid = document.getElementById("show-acciones");

     for (let i = 0; i< newlist.length; i++) {
        result += "<tr><td>" + newlist[i] + "</td></tr>";
     }

      result += "</table>";
      getid.innerHTML = result; 
}

function search() {
    let lista = sessionStorage.getItem("acciones".split(","));
    let newlist = JSON.parse(lista);
    let selectElement = document.getElementById('seleccion');
    let selectedValue = selectElement.value;
    let getid = document.getElementById("show-acciones");
    let contador=0;
    
    for(let i =0 ; i<newlist.length; i++){
        if(newlist[i].toLowerCase() == selectedValue){
            contador++;
    }   
    getid.innerHTML = "La acción " + selectedValue + " se ha realizado " + contador + " veces"; 
 }
}
async function frases() {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        if (!response.ok) {
            Swal.fire({
                title: 'Error!',
                text: "No hay frases para ti",
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
        
        const data = await response.json();
        const humor = data.value; 
        
        await Swal.fire({
            title: 'Frases!',
            text: humor,
            icon: 'info',
            confirmButtonText: 'Cool'
        });
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, inténtalo de nuevo más tarde.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
    }
}


