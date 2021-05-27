$(function() {
    $('#guardarSeccion').show();
    $('#elemento-form').submit(guardar);
    $('#eliminar-elemento-form').submit(eliminar);

    $.get(window.MRM_REMTYS_APP_URL + '/templates/cardProcedimiento.html', function(data) {
        cardTemplate = data;
        loadCards(showCards);
    });

    $('#guardar').click(() => {
        var idsInOrder = $("#jqCards").sortable("toArray");
        if (idsInOrder.length > 0)
            setOrderItems(idsInOrder.join(','));
        else
            toast('info', 'Primero agregre procedimientos.', 'TramiteServicio');
    });

    $("#jqCards").sortable({
        placeholder: "ui-state-highlight"
    });

    adminReadOnlyProcedimiento();
});

var adminReadOnlyProcedimiento = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    const guardarSeccion = $('#guardarSeccion');
    const nuevoProcedimietoBtn = $('.nuevo-procedimiento-btn');
    if (tipoPermisoEditar && editablePorPerfil) {
        guardarSeccion.show();
        nuevoProcedimietoBtn.show();
    } else {
        guardarSeccion.remove();
        nuevoProcedimietoBtn.remove();
        $('.editar, .eliminar').remove();
    }
};

var eliminarProcedimientoClick = (data) => {
    $('#idEliminar').val(data.idProcedimientoTys);
    $('#elementoEliminar').text(data.numeroOrden);
    $('#eliminar-elemento-modal').modal('show');
};

var editarProcedimientoClick = (data) => {
    $('#descripcion').val(data.descripcion);
    showModal(data);
};

var procedimientos = null;
var showCards = (res) => {
    $('#jqCards').html('');
    procedimientos = res;
    if ($.isArray(res)) {
        res.forEach(item => {
            const htmlCard = $(cardTemplate);
            htmlCard.attr('id', item.idProcedimientoTys);
            htmlCard.find('.orden').text(item.numeroOrden);
            htmlCard.find('.tipoActorFlujo').text(item.tipoActorFlujo.nombre);
            htmlCard.find('.descripcion').text(item.descripcion);

            const elementEliminar = htmlCard.find('.eliminar');
            elementEliminar.off('click');
            elementEliminar.on('click', function() {
                eliminarProcedimientoClick(item);
            });

            const elementEditar = htmlCard.find('.editar');
            elementEditar.off('click');
            elementEditar.on('click', function() {
                editarProcedimientoClick(item);
            });

            htmlCard.appendTo($('#jqCards'));
        });
    }
    adminReadOnlyProcedimiento();
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
            showCards(res.procedimientos);
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada });
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
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/procedimiento',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Procedimientos');
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

    const url = window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/procedimiento';

    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: url + ((elementoModificar) ? ('/' + elementoModificar.idProcedimientoTys) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "idTipoActorFlujo": $('#idTipoActorFlujo').val(),
            "descripcion": $('#descripcion').val()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            elementoModificar = null;
            loadCards(showCards);
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado el procedimiento', 'Procedimiento');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Procedimiento');
            console.error(e);

        },
        complete: function() {
            $('#guardarElemento').removeAttr("disabled").show();
            $('#guardarElementoLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

var obtenerTiposActoresFlujo = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/actores-flujo",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TiposActoresFlujo');
            console.error(e);
        }
    });
};

var showModal = (item) => {
    elementoModificar = item;
    obtenerTiposActoresFlujo(function(res) {
        $('#idTipoActorFlujo').empty();
        res.forEach(elemento => {
            $('#idTipoActorFlujo').append(new Option(elemento.nombre, elemento.idTipoActorFlujo));
        });

        if (!elementoModificar)
            $('#descripcion').val('');
        else
            $('#idTipoActorFlujo').val(elementoModificar.tipoActorFlujo.idTipoActorFlujo);

        $('#elemento-modal').modal('show');
    });
};


var eliminar = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled')

    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + '/ts/' + window.MRM_TS_GESTIONAR.idTramiteServicio + '/procedimiento/' + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            loadCards(showCards);
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado el procedimiento', 'Procedimiento');
        },
        complete: function() {
            $('#eliminar').removeAttr("disabled").show();
            $('#eliminarLoading').hide();
            $('#cancelarEliminar').removeAttr("disabled");
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Procedimiento');
            console.error(e);
        }
    });
};