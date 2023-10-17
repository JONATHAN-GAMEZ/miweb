/*menu de hamburguesa */ 
let menu_responsive = document.querySelector(".checkbtn");
    menu_responsive.onclick = function(){
        contendormenu = document.querySelector(".contenedor-menu");
        contendormenu.classList.toggle("active");
    };
/*formulario */
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alerta");

function validoFormulario(){
    let warnings = "";
    let valido = true;
    parrafo.innerHTML = "";

    if(nombre.value.length < 4){
        warnings += `El nombre debe contener mas de 4 caracteres`;
        valido = false;
    }

    if(!valido){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
    return valido;
}

form.addEventListener("submit", (e) =>{
    if(validoFormulario()){
        // si la validacion es exitosa lo envia
        formulario.submit();
    }else{
        e.preventDefault(); // evita que se envie el formulario
    }
});