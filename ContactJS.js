const user = document.getElementById("usuario");
const password = document.getElementById("contraseña");
const email = document.getElementById("mail");
const formulario = document.getElementById("contenedor");
const alertasP = document.getElementById("alertaID");

function validarFormulario(){
    formulario.addEventListener('submit', e=>{
        e.preventDefault();
        let alertas = "";
        let flag=false;
        let valEmail = /^\w+@\w+(\.\w{2,4})+$/;
        alertasP.innerHTML = "";

        //Validación de usuario
        if (user.value.length < 4) {
            alertas+= "Nombre de usuario muy corto(4-20)<br>";
            flag=true;
        }else if (user.value.length > 21) {
            alertas+= "Nombre de usuario muy largo(4-20)<br>";
            flag=true;
        }
        //Validación de contraseña

        if (password.value.length < 8) {
            alertas+= "Contraseña debe ser mayor a 8<br>";
            flag=true;
        } else {
            
        }
        //Validación de e-mail
        if (!valEmail.test(email.value)) {
            alertas+= "E-mail inválido<br>";
            flag=true;
        }

        if (flag) {
            alertasP.innerHTML = alertas;
        }else{
            alertas+="Usuario: "+user.value+"<br>";
            alertas+="Contraseña: "+password.value+"<br>";
            alertas+="Mail: "+email.value+"<br>";
            alertasP.innerHTML = alertas;
            confirm("Confirmar Enviar Estos Datos?");
        }
    });
}
validarFormulario();