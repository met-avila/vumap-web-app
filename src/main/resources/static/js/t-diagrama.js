$(function() {
    $('#guardarSeccion').show();
    let nombreTS = MRM_TS_GESTIONAR.tipoRemtys.nombre;
    nombreTS += ' ' + MRM_TS_GESTIONAR.seccionGeneralesTys.nombreTramite;
    $('#nombreTSDiagrama').text(nombreTS);
    $('#urlDiagramaTS').attr('href', MRM_TS_GESTIONAR.idTramiteServicio + '/flujo');

    $('#guardar').click(() => {
        guardar();
    });
});


var guardar = (ids, p) => {
    $('#guardarElemento').attr('disabled', 'disabled').hide();
    $('#guardarElementoLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    $.ajax({
        type: 'POST',
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/flujo/diagrama',
        data: {},
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardado la información de diagrama', 'Tramite/Servicio');
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                if (e.responseJSON.code == 'no_existe_flujo') {
                    toast('info', 'Primero debe agregar el diagrama de flujo de trabajo.', 'TramiteServicio');
                } else if (e.responseJSON.code == 'flujo_sin_fin') {
                    toast('info', 'Debe relacionar alguna actividad con un elemento "Fin".', 'Diagrama de flujo incompleto');
                }
            } else {
                toast('warning', 'No se pudo guardar la información adicional, intente más tarde.', 'Tramite/Servicio');
                console.error(e);
            }
        },
        complete: function() {
            $('#guardarElemento').removeAttr("disabled").show();
            $('#guardarElementoLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};