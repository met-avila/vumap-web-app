var defaultImg = 'img/noimage.png';
$(function() {
    $('#eliminar-imagen-form').submit(eliminar);
    $('#imagen-upload-file').on("change", cambiarImagen);
    obtenerMiMunicipio((mimunicipio) => {
        $('#lmg').attr("src", mimunicipio.urlLogoGrande || defaultImg);
        $('#lmc').attr("src", mimunicipio.urlLogoChico || defaultImg);
        $('#iis').attr("src", mimunicipio.urlFondoLogin || defaultImg);
        $('#fis').attr("src", mimunicipio.urlFondoInterno || defaultImg);
        $('#bsi').attr("src", mimunicipio.urlBannerInterno || defaultImg);
        $('#ifs').attr("src", mimunicipio.urlFaveIcon || defaultImg);
    });
});

campoImagen = null;
const mostrarModalImagen = (ci) => {
    campoImagen = ci;
    $('#imagen-upload-file').click();
};

const cambiarImagen = () => {
    var file = $("#imagen-upload-file").val();
    if ($.trim(file).length > 0) {
        var form = $('#imagen-form')[0];
        var data = new FormData(form);
        data.append("c", campoImagen);
        $('#imagen-upload-file').val(null);

        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: window.MRM_REMTYS_API_URL + "/mi-municipio/imagenes",
            beforeSend: function(xhr, settings) {
                xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
            },
            data: data,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            success: function(res) {
                var url = 'img/noimage.png';
                if (campoImagen == 'lmg')
                    url = res.urlLogoGrande;
                else if (campoImagen == 'lmc')
                    url = res.urlLogoChico;
                else if (campoImagen == 'iis')
                    url = res.urlFondoLogin;
                else if (campoImagen == 'fis')
                    url = res.urlFondoInterno;
                else if (campoImagen == 'bsi')
                    url = res.urlBannerInterno;
                else if (campoImagen == 'ifs')
                    url = res.urlFaveIcon;
                $('#' + campoImagen).attr("src", url);
                toast('info', 'Se ha cambiado la imagen', 'Diseño general');
            },
            error: function(e) {
                if (e.status == 403)
                    window.location = '/'
                if (e.status == 0)
                    toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API');
                else if (e.status == 403)
                    window.location = window.MRM_REMTYS_APP_URL;
                else toast('warning', 'No se pudo guardar la imagen, intente más tarde.', 'Diseño general');
                console.error(e);
            },
            complete: function() {

            }
        });
    }
};

const mostrarModalEliminarImagen = (campo) => {
    let nombre = '';
    if (campo == 'lmg') nombre = 'Logo del municipio (grande)';
    else if (campo == 'lmc') nombre = 'Logo del municipio (pequeño)';
    else if (campo == 'iis') nombre = 'Fondo inicio de sesión';
    else if (campo == 'fis') nombre = 'Fondo interior del sistema';
    else if (campo == 'bsi') nombre = 'Banner superior interno del sistema';
    else if (campo == 'ifs') nombre = 'Icono de favoritos';

    $('#idEliminar').val(campo);
    $('#elementoEliminar').text(nombre);
    $('#eliminar-imagen-modal').modal('show');

};

const eliminar = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled')

    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + "/mi-municipio/imagenes/" + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            const campo = $('#idEliminar').val();
            $('#' + campo).attr('src', defaultImg);
            $('#eliminar-imagen-modal').modal('hide');
            toast('info', 'Se ha eliminado la imagen', 'Diseño general');
            $('#idEliminar').val(null)
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400 && e.responseJSON.code == 'no_municipio') {
                toast('info', 'Primero establesca el municipio en menú Mi municipio', 'Diseño general');
            } else
                toast('warning', 'No se pudo eliminar la imagen, intente más tarde.', 'Diseño general');
            console.error(e);

        },
        complete: function() {
            $('#eliminar').removeAttr("disabled").show();
            $('#eliminarLoading').hide();
            $('#cancelarEliminar').removeAttr("disabled");
        }
    });
};