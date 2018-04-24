//Cuando se valide el formulario de login
$("#loginUs").submit(function (e) {
    
    //Evitramos que se recargue la página
    e.preventDefault();
    
    //Hacemos la petición al WS para validar el usuario
    $.ajax({
        async: true,
        url: "php/compruebaUsuario.php",
        data: {mail: document.getElementById("mailLogin").value, 
               pass: document.getElementById("passLogin").value},
        method: "POST",
        success: function(result){
            //Recuperamos los resultados
            var resultado = JSON.parse(result);

            //Si el usuario no existe
            if (result == "false") {
                alert("Este usuario no existe");
            
            //Si el usuario existe
            } else {

                //Cerramos el PopUp
                document.getElementById('closeModal4').click();

                //Quitamos los botones de login y registro
                $("#logReg").addClass('ocult');

                //Mostramos el nombre del usuario i la opción de desloguearse
                $("#nombreUsuario").html("<b style='color:white'>Hola, " + resultado.usuario+"</b>");
                $("#nombreUsuario").removeClass('ocult');
                $("#logout").removeClass('ocult');

                //Marcamos que ha iniciado sesión y guardamos el nombre y el email en una variable de sessión
                sessionStorage.setItem("usuario", resultado.usuario);
                sessionStorage.setItem("email", resultado.email);
            }
        },
    
        //En caso de error con el servidor
        error: function (err) {
            alert("Se ha producido un error con el servidor, por favor, inténtelo de nuevo más tarde");
        }
    });
});

//Cuando se valide el formulario de registro
$("#registerUs").submit(function (e) {

    //Evitramos que se recargue la página
    e.preventDefault();

    //Hacemos la petición al WS para validar el usuario
    $.ajax({
        async: true,
        url: "php/altaUsuario.php",
        data: {usr: document.getElementById("usReg").value, 
               pass: document.getElementById("passReg").value, 
               mail: document.getElementById("mailReg").value},
        method: "POST",
        success: function(result){

            //Si ya existe el email
            if (result == "falseUs") {
               alert("Ya existe un email con este nombre de usuario");

            //Si falla la inserción a la BD
            } else if (result == "falseIns"){
                alert("Ha ocurrido un error al insertar el usuario a la base de datos");
            
            //Si se inserta correctamente
            } else {
                
                //Cerramos el PopUp
                document.getElementById('closeModal5').click();
                
                alert("Usuario dado de alta correctamente, inicia sesión para empezar a usar nuestro servicio");
                
                
            }
        },
    
        //Si se produce un errror con el servidor
        error: function (err) {
            alert("Se ha producido un error con el servidor, por favor, inténtelo de nuevo más tarde");
        }
    });
});
