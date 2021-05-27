$(function() {
    $('#guardarSeccion').show();
    obtenerSeccionesPublicacion((res) => {
        if (res.length > 0) {
            res.forEach(item => {
                if (![20, 22].includes(item.seccion.idSeccionTys)) {
                    const checked = (item.publicado) ? 'checked' : '';
                    const element = $(publicacionItemTemplate(item.seccion.idSeccionTys, item.seccion.nombre, checked));
                    element.appendTo($('#seccionesContainer'));
                }
            });
        } else {
            window.MRM_TS_SECCIONES.forEach(item => {
                if (![20, 22].includes(item.idSeccionTys)) {
                    const element = $(publicacionItemTemplate(item.idSeccionTys, item.nombre, ''));
                    element.appendTo($('#seccionesContainer'));
                }
            });
        }
        adminReadOnlyVisualizacion();
    });

    $('#guardar').click(() => {
        let ids = [];
        let p = [];
        $('.p-id').each((index, item) => {
            ids.push($(item).attr('pid'));
            p.push($(item).is(':checked') ? 1 : 0);
        });
        guardar(ids.join(','), p.join(','));
    });
});

var adminReadOnlyVisualizacion = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    const guardarSeccion = $('#guardarSeccion');
    if (tipoPermisoEditar && editablePorPerfil) {
        guardarSeccion.show();
    } else {
        guardarSeccion.remove();
        $('input').attr('disabled', 'disabled');
    }
};

var publicacionItemTemplate = (id, nombre, publicado) => `
    <div class="custom-control custom-switch">
        <input pid="${id}" id="ts-s-p-${id}" type="checkbox" class="p-id custom-control-input" ${publicado}>
        <label class="custom-control-label" for="ts-s-p-${id}">${nombre}</label>
    </div>
`;

var guardar = (ids, p) => {
    $('#guardarElemento').attr('disabled', 'disabled').hide();
    $('#guardarElementoLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    $.ajax({
        type: 'POST',
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/publicacion',
        data: {
            'ids[]': ids,
            'p[]': p
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado la información de publicación', 'Tramite/Servicio');
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada, publicado: true });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            toast('warning', 'No se pudo guardar la información adicional, intente más tarde.', 'Tramite/Servicio');
            console.error(e);

        },
        complete: function() {
            $('#guardarElemento').removeAttr("disabled").show();
            $('#guardarElementoLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

var obtenerSeccionesPublicacion = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/publicacion',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TS:Publicacion');
            console.error(e);
        }
    });
};