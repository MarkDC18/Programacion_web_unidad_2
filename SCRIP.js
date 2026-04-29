document.addEventListener("DOMContentLoaded",()=>{

let form=document.getElementById("formulario");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

document.getElementById("mensaje").innerHTML=
"Reserva enviada correctamente";

form.reset();

});

}

});