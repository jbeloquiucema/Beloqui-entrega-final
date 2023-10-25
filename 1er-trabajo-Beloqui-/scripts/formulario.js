const form = document.getElementById('formulario-registro');

form.addEventListener('submit', function(e){
    e.preventDefault();  


    const nombre = document.getElementById('nombre').value.trim();
    const mail = document.getElementById('mail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const password = document.getElementById('password').value.trim();
    

    if(nombre == ""){
        alert("Ingresa tu nombre")
        return
    }


    if(!mail.includes("@")){
        alert("Ingresa un correo electrónico valido")
        return
    }    
    if(isNaN(telefono)){
        alert("El teléfono debe ser un numero")
        return
    }    
    
    if(password == ""){
        alert("Ingrese una contraseña")
        return
    }else if (!password.match(/[A-Z]/)) {
        alert("La contraseña debe tener al menos una mayúscula")
        return
    }else if (!password.match(/\d/)){
        alert("La contraseña debe tener al menos un número")
        return
    }


    // Mostrar resultados en la consola 
  console.log("Nombre", nombre);
  console.log("Email:", mail);
  console.log("Teléfono:", telefono);
  console.log("Contraseña:", password);


    const contacto = {
        name: nombre,
        email: mail,
        telephone: telefono,
        password: password,
    
    }
    console.log("contacto antes de guartdar en local storage", contacto)
    localStorage.setItem("contacto", JSON.stringify(contacto))
});

function getContacto(){
    const contactoLocalStorage = JSON.parse(localStorage.getItem("contacto"))
    console.log("contacto recuperado del localstorage", contactoLocalStorage)
}


