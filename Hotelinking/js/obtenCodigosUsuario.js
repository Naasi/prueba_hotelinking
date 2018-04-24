//Petición al WS para obtener todos los códigos promocionales de un usuario
$.ajax({
    async: true,
    url: "php/obtenerCodigos.php",
    data: {mail: sessionStorage.getItem("email")},
    method: "POST",
    success: function(result){
        //Tiramos el resultado en un div de HTML
        $("#cupones").html(result);
    },

    //Si se produce un error con el servidor
    error: function (err) {
        alert("Se ha producido un error con el servidor, por favor, inténtelo de nuevo más tarde");
    }
});

//Cuando pulsan cualquier botón de canjear
$(document).on('click', '#botonCanjear', function (event) {
    event.preventDefault();

    //Pedimos confirmación, i si es así, hacemos la petición al servidor
    if (confirm("¿Estás seguro que quieres canjear este código?")) {
        $.ajax({
            async: true,
            url: "php/canjearCodigo.php",
            data: {cod: $(this).closest('tr').find("#cod").html() },
            method: "POST",
            success: function(result){
                //Respondemos si se ha canjeado correctamente no no
                if (result == "true") {
                    alert("Se ha canjeado tu código correctamente'");
                        
                } else {
                    alert("No se ha podido canjear tu código promocional " + result);
                }
            },
            
            //Si ocurre un error en el sevidor
            error: function (err) {
                alert("Se ha producido un error con el servidor, por favor, inténtelo de nuevo más tarde");
            }
        });
    }
    

});