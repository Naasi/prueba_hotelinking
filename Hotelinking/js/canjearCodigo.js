//Petición al WS para obtener los códigos promocionales
$.ajax({
    async: true,
    url: "php/canjearCodigo.php",
    data: {mail: sessionStorage.getItem("email")},
    method: "POST",
    success: function(result){
        if (result == "true") {
            alert("Se ha canjeado correctamente tu código. Si actualizas la página no te volverá a aparecer");
                
        } else {
            alert("No se ha podido procesar tu solicitud de canjeo");
        }
    },

    //Si se produce un error con el servidor
    error: function (err) {
        alert("Se ha producido un error con el servidor, por favor, inténtelo de nuevo más tarde");
    }
});