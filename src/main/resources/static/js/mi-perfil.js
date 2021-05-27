$(function() {
    textOnlyNumbers($('#mp-celular'));
    $('#perfil-form').submit(guardarMiPerfil);
    $('#usuario-foto-upload-file').on("change", cambiarFotoUsuario);
});

const mostrarModalFoto = () => {
    $('#usuario-foto-upload-file').click();
};

const cambiarFotoUsuario = () => {
    var file = $("#usuario-foto-upload-file").val();
    if ($.trim(file).length > 0) {
        var form = $('#usuario-foto-form')[0];
        var data = new FormData(form);
        $('#usuario-foto-upload-file').val(null);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: window.MRM_USERS_API_URL + "/usuarios/" + window.MRM_USER.idUsuario + "/foto",
            beforeSend: function(xhr, settings) {
                xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
            },
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function(res) {
                var urlFoto = res.urlFoto;
                if (!urlFoto)
                    urlFoto = 'img/no-user.jpg';
                $('.mp-usuarioFoto').attr("src", urlFoto);
                toast('info', 'Se ha cambiado la imagen', 'Mi perfil');
            },
            error: function(e) {
                if (e.status == 403)
                    window.location = '/'
                if (e.status == 0)
                    toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Usuarios API');
                else toast('warning', 'No se pudo guardar la imagen, intente más tarde.', 'Mi perfil');
                console.error(e);
            },
            complete: function() {

            }
        });
    }
};

const guardarMiPerfil = (e) => {
    e.preventDefault();

    $('#guardarMiPerfil').attr('disabled', 'disabled').hide();
    $('#guardarMiPerfilLoading').show();
    $.ajax({
        type: "PUT",
        url: window.MRM_USERS_API_URL + "/usuarios/" + window.MRM_USER.idUsuario,
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "nombrePropio": $('#mp-nombrePropio').val(),
            "apellidoPaterno": $('#mp-apellidoPaterno').val(),
            "apellidoMaterno": $('#mp-apellidoMaterno').val(),
            "correo": $('#mp-correo').val(),
            "celular": $('#mp-celular').val()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            setDatosUsuario(res);
            toast('info', 'Se ha guardado la información', 'Mi perfil');
        },
        error: function(e) {
            if (e.status == 0)
                toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Usuarios API');
            else if (e.status == 400) {
                if (e.responseJSON.code == 'usuario_ya_existe') {
                    $('#mp-nombreUsuario').focus();
                    toast('warning', 'Ya existe un usuario con el nombre de usuario dado, escriba uno distinto.', 'Usuarios');
                } else if (e.responseJSON.code == 'usuario_ya_existe_correo') {
                    $('#mp-correo').focus();
                    toast('warning', 'Ya existe un usuario con el correo dado, escriba uno distinto.', 'Usuarios');
                }
            } else if (e.status == 403)
                window.location = window.MRM_REMTYS_APP_URL;
            else toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Mi perfil');
            console.error(e);
        },
        complete: function() {
            $('#guardarMiPerfil').removeAttr("disabled").show();
            $('#guardarMiPerfilLoading').hide();
        }
    });
};