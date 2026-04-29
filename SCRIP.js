document.getElementById("formulario").addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value;

document.getElementById("mensaje").innerHTML =
"Reserva enviada para " + nombre;

});