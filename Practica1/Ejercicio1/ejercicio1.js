//Evento para los botones
document.getElementById("btnValidar").addEventListener("click", validar);
document.getElementById("btnSalir").addEventListener("click", salir);

//Array de usuarios y contraseñas, "bases de datos"
const usuarios =[
    {usuario: "user1", contraseña: "pass1"},
    {usuario: "user2", contraseña: "pass2"},
    {usuario: "user3", contraseña: "pass3"},
    {usuario: "user4", contraseña: "pass4"},
    {usuario: "user5", contraseña: "pass5"}
];

function validar(){
    try{
        //Recoger datos de entrada
        let usuario = document.getElementById("usuario").value;
        let contraseña = document.getElementById("password").value;

        //validar
        if(usuario === "" || contraseña === ""){
            throw new Error("Los campos no pueden estar vacíos");
        }

        validarUsuario(usuario);
        validarContraseña(contraseña);

        if(usuarios.find(dato => dato.usuario === usuario && dato.contraseña == contraseña)){
            alert("Bienvenidx");
        }else{
            throw "Usuario o contraseña incorrectos";
        }
        
    }catch(error){
        alert(error);
    }
}

function salir(){
    alert ("Adiós");
}

function validarUsuario(usuario){
    const regexUsername = /^[a-zA-Z0-9]{3,20}$/;
    if(!regexUsername.test(usuario)){
        throw new Error("El nombre de usuario no es válido");
    }
}

function validarContraseña(contraseña){
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
    if(!regexPassword.test(contraseña)){
        throw new Error("La contraseña no es válida");
    }
}