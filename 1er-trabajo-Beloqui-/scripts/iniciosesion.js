const sesion = document.getElementById('form-sesion');

sesion.addEventListener('submit', function(event){
    event.preventDefault();  


    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    

    if(username == ""){
        alert("Ingresa tu nombre de usuario")
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
    console.log("Nombre de usuario:", username);
    console.log("Contraseña:", password);


        const usuario = {
            username: username,
            password: password,
        }
    console.log("usuario antes de guardar en local storage", usuario)
    localStorage.setItem("usuario", JSON.stringify(usuario))
});

function getUsuario(){
    const usuarioLocalStorage = JSON.parse(localStorage.getItem("usuario"))
    console.log("usuario recuperado del localstorage", usuarioLocalStorage)
}