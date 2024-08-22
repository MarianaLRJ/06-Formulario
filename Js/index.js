/* validar ingreso de nombre y apellido*/
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var error = document.getElementById('error');
error.style.color = 'red';


function afiliarse(){

    console.log('afiliandose...');

var mensajeError = [];

if(nombre.value === null || nombre.value === ''){
mensajeError.push('Ingresa tu nombre');
}

if(apellido.value === null || apellido.value === ''){
    mensajeError.push('Ingresa tu apellido');
    }

error.innerHTML= mensajeError.join(', ')

    return false;

}




const modoClaro = () => {
    console.log("Activamos el modo claro");

    let fondo = document.getElementById("fondo");

	
    let boton = document.getElementById("boton");


    fondo.style.backgroundColor = "white";


    boton.innerHTML = "Cambiar a modo oscuro";

    let oculto = document.getElementById("oculto").value;
    
    alert(oculto);

    let archivo = document.getElementById("archivo")

    archivo.style.backgroundColor = "white";


}

