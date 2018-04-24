
//Cuando pulsan en el botón para obtener un código promocional
$("#obtenerCodigo").click(function() {
    //No lo permitimos si no ha iniciado sesión
    if (sessionStorage.getItem("usuario") == null) {
        alert("Inicia sesión para poder obtener tus codigos promocionales");
    } else {
        //Pedimos confirmación y hacemos petición al WS
        if (confirm("¿Estás seguro que quieres obtener este código promocional?")) {
            $.ajax({
                async: true,
                url: "php/generaCodigo.php",
                data: {mail: sessionStorage.getItem("email")},
                method: "POST",
                success: function(result){
                    //Si ha ido bien
                    if (result == "true") {
                        alert("Se ha generado tu código promocional, puedes ver todos los que has generado en 'Mis Cupones'");
                    //Si ha ido mal       
                    } else {
                        alert("No se ha podido procesar tu solicitud del código promocional" + result);
                    }
                },
            
                //Si se produce un error con el servidor
                error: function (err) {
                    alert("Se ha producido un error con el servidor, por favor, inténtelo de nuevo más tarde");
                }
            });
        }
    }
});

