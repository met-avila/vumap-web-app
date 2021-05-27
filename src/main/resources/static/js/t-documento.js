$(function() {
    $('#guardarSeccion').show();
    $('#elemento-form').submit(guardar);
    $('#eliminar-elemento-form').submit(eliminar);

    $.get(window.MRM_REMTYS_APP_URL + '/templates/cardDocumento.html', function(data) {
        cardTemplate = data;
        loadCards(showCards);
    });

    $('#guardar').click(() => {
        setOrderItemsDocumentos();
    });

    /*$("#jqCards").sortable({
        placeholder: "ui-state-highlight"
    });*/

    obtenerEstatusDocumentos(function(res) {
        res.forEach(elemento => {
            $('#f-estatus').append(new Option(elemento.nombre, elemento.idEstatusDocumento));
            $('#idEstatusDocumento').append(new Option(elemento.nombre, elemento.idEstatusDocumento));
        });
    });

    $('#mostrarRecursosDocs').click(() => {
        recursosModal.show((res) => {
            if (res) {
                $('#url').val(res.url);
            }
        });
    });
    adminReadOnlyDocs();
});

var adminReadOnlyDocs = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    const guardarSeccion = $('#guardarSeccion');
    const nuevoDocumentoBtn = $('.nuevo-documento-btn');
    if (tipoPermisoEditar && editablePorPerfil) {
        guardarSeccion.show();
        nuevoDocumentoBtn.show();
    } else {
        guardarSeccion.remove();
        nuevoDocumentoBtn.remove();
        $('textarea').attr('disabled', 'disabled');
        $('.editar, .eliminar').remove();
    }
};

var setOrderItemsDocumentos = (itemsIds) => {
    $.ajax({
        type: "POST",
        data: {},
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/documentos/orden',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardardo la sección de documentos.', 'TramiteServicio');
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Documentos:Orden');
            console.error(e);
        }
    });
};

var eliminarElementoClick = (data) => {
    $('#idEliminar').val(data.idDocumentoTys);
    $('#elementoEliminar').text(data.nombreMostrarLink);
    $('#eliminar-elemento-modal').modal('show');
};

var editarElementoClick = (data) => {
    $('#url').val(data.url);
    $('#nombreMostrarLink').val(data.nombreMostrarLink);
    $('#descripcion').val(data.descripcion);
    $('#idEstatusDocumento').val(data.estatus.idEstatusDocumento);
    showModal(data);
};

var descargarElementoClick = (data) => {
    $('<a href="' + data.url + '" target="_blank">External Link</a>')[0].click();
};

var showCards = (res) => {
    $('#jqCards').html('');
    if ($.isArray(res.content)) {
        res.content.forEach(item => {
            const htmlCard = $(cardTemplate);
            htmlCard.attr('id', item.idDocumentoTys);
            htmlCard.find('.orden').text(item.numeroOrden);
            htmlCard.find('.nombreMostrarLink').text(item.nombreMostrarLink);
            htmlCard.find('.estatusDocumento').text(item.estatus.nombre);

            const elementEliminar = htmlCard.find('.eliminar');
            elementEliminar.off('click');
            elementEliminar.on('click', function() {
                eliminarElementoClick(item);
            });

            const elementEditar = htmlCard.find('.editar');
            elementEditar.off('click');
            elementEditar.on('click', function() {
                editarElementoClick(item);
            });

            const elementDescargar = htmlCard.find('.descargar');
            elementDescargar.off('click');
            elementDescargar.on('click', function() {
                descargarElementoClick(item);
            });

            htmlCard.appendTo($('#jqCards'));
        });
    }
    adminReadOnlyDocs();
};


var filtrar = () => {
    loadCards(showCards);
};
var limpiarFiltros = () => {
    $('#f-estatus').val('-1');
    $('#f-descripcion').val('');
    loadCards(showCards);
};

var setOrderItems = (itemsIds) => {
    $.ajax({
        type: "POST",
        data: {
            'ids[]': itemsIds
        },
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/procedimiento/orden',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardardo la sección.', 'TramiteServicio');
            showCards(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Procedimiento:Orden');
            console.error(e);
        }
    });
};

var cardTemplate = null;
var loadCards = (callback) => {
    let idEstatus = $('#f-estatus').val();
    if (idEstatus == -1) idEstatus = '';
    let descripcion = $('#f-descripcion').val();
    $.ajax({
        type: "GET",
        data: {
            e: idEstatus,
            d: descripcion
        },
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/documentos',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Documentos');
            console.error(e);
        }
    });
}

var elementoModificar = null;
var guardar = (e) => {
    e.preventDefault();
    $('#guardarElemento').attr('disabled', 'disabled').hide();
    $('#guardarElementoLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    const url = window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/documentos';
    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: url + ((elementoModificar) ? ('/' + elementoModificar.idDocumentoTys) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "idEstatusDocumento": $('#idEstatusDocumento').val(),
            "nombreMostrarLink": $('#nombreMostrarLink').val(),
            "descripcion": $('#descripcion').val(),
            "url": $('#url').val()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            elementoModificar = null;
            loadCards(showCards);
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado el documento', 'Documentos');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Documentos');
            console.error(e);

        },
        complete: function() {
            $('#guardarElemento').removeAttr("disabled").show();
            $('#guardarElementoLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

var obtenerEstatusDocumentos = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/estatus-documentos",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:EstatusDocumentos');
            console.error(e);
        }
    });
};

var showModal = (item) => {
    elementoModificar = item;
    if (!elementoModificar) {
        $("#idEstatusDocumento").val($("#idEstatusDocumento option:first").val());
        $('#nombreMostrarLink').val('');
        $('#descripcion').val('');
        $('#url').val('');
    }
    $('#elemento-modal').modal('show');
};


var eliminar = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled')

    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + '/ts/' + window.MRM_TS_GESTIONAR.idTramiteServicio + '/documentos/' + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            loadCards(showCards);
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado el documento', 'Documentos');
        },
        complete: function() {
            $('#eliminar').removeAttr("disabled").show();
            $('#eliminarLoading').hide();
            $('#cancelarEliminar').removeAttr("disabled");
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Documentos');
            console.error(e);
        }
    });
};