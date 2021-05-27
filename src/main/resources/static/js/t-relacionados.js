var tramitesServiciosR = [];
$(function() {
    $('#guardarSeccion').show();
    $('#elemento-form').submit(guardar);
    $('#eliminar-elemento-form').submit(eliminar);

    $.get(window.MRM_REMTYS_APP_URL + '/templates/cardTSRelacionado.html', function(data) {
        cardTemplate = data;
        loadCards(showCards);
    });

    $('#guardar').click(() => {
        var idsInOrder = $("#jqCards").sortable("toArray");
        if (idsInOrder.length > 0)
            setOrderItems(idsInOrder.join(','));
        else {
            var data = $("#guardar").data();
            if (data.seccionActual.requerida == 1)
                toast('info', 'Primero agregre trámites/servicios relacionados.', 'TramiteServicio');
            else {
                let idSeccionCompletada = 6;
                if (MRM_TS_GESTIONAR.tipoRemtys.idTipoRemtys == 2)
                    idSeccionCompletada = 17;
                $("#guardarSeccion").trigger("sectionNoSaved", { idSeccionTys: idSeccionCompletada });
            }
            // $("#guardarSeccion").trigger("sectionNoSaved", data.seccionActual);
        }
    });

    $("#jqCards").sortable({
        placeholder: "ui-state-highlight"
    });

    obtenerTS(function(res) {
        tramitesServiciosR = res.content;
        fillTS(tramitesServiciosR);
    });

    $('#idTramiteRelacionado').change(() => {
        $('#categoria').val('');
        $('#dependencia').val('');
        let ts = null;
        for (let index = 0; index < tramitesServiciosR.length; index++) {
            const element = tramitesServiciosR[index];
            if (element.idTramiteServicio == $('#idTramiteRelacionado').val()) {
                $('#categoria').val(element.categoria.nombre);
                $('#dependencia').val(element.dependencia.nombre);
                break;
            }
        }
    });
    adminReadOnlyTSRelacionado();
});

var adminReadOnlyTSRelacionado = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    const guardarSeccion = $('#guardarSeccion');
    const nuevoTSRelacionadoBtn = $('.nuevo-ts-relacionado-btn');
    if (tipoPermisoEditar && editablePorPerfil) {
        guardarSeccion.show();
        nuevoTSRelacionadoBtn.show();
    } else {
        guardarSeccion.remove();
        nuevoTSRelacionadoBtn.remove();
        $('.editar, .eliminar').remove();
    }
};

var eliminarProcedimientoClick = (data) => {
    $('#idEliminar').val(data.idRelacionadoTys);
    $('#elementoEliminar').text(data.tramiteServicioRelacionado.seccionGeneralesTys.nombreTramite);
    $('#eliminar-elemento-modal').modal('show');
};

var editarProcedimientoClick = (data) => {
    $('#descripcion').val(data.descripcion);
    showModal(data);
};

var showCards = (res) => {
    $('#jqCards').html('');
    if ($.isArray(res)) {
        res.forEach(item => {
            const htmlCard = $(cardTemplate);
            htmlCard.attr('id', item.idRelacionadoTys);
            htmlCard.find('.nombreTSRelacionado').text(item.tramiteServicioRelacionado.seccionGeneralesTys.nombreTramite);
            htmlCard.find('.tipoTSRelacionado').text(item.tramiteServicioRelacionado.tipoRemtys.nombre);
            htmlCard.find('.categoriaTSRelacionado').text(item.tramiteServicioRelacionado.categoria.nombre);
            htmlCard.find('.dependenciaTSRelacionado').text(item.tramiteServicioRelacionado.dependencia.nombre);
            htmlCard.find('.razonRelacion').text(item.razonRelacion);

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
    adminReadOnlyTSRelacionado();
};

var setOrderItems = (itemsIds) => {
    $.ajax({
        type: "POST",
        data: {
            'ids[]': itemsIds
        },
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/ts-relacionados/orden',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardardo la sección.', 'TramiteServicio');
            showCards(res.relacionados);
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'

            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TramiteServicio:Orden');
            console.error(e);
        }
    });
};

var cardTemplate = null;
var loadCards = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/ts-relacionados',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TS-Relacionados');
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

    const url = window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/ts-relacionados';
    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: url + ((elementoModificar) ? ('/' + elementoModificar.idRelacionadoTys) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "idTramiteServicioRelacionado": $('#idTramiteRelacionado').val(),
            "razonRelacion": $('#razonRelacion').val()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            elementoModificar = null;
            loadCards(showCards);
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado la relación', 'TramiteServicio');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400 && e.responseJSON.code == 'ya_existe') {
                $('#idTramiteRelacionado').focus();
                toast('warning', 'Ya existe una relación con el elemento seleccionado, elija uno distinto.', 'TramiteServicio');
            } else
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'TramiteServicio');
            console.error(e);

        },
        complete: function() {
            $('#guardarElemento').removeAttr("disabled").show();
            $('#guardarElementoLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

var obtenerCategoriasTSRelacionados = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/categorias",
        data: { ps: 50 },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Categorías');
            console.error(e);
        }
    });
};


var showModal = (item) => {
    elementoModificar = item;
    if (!elementoModificar) {
        $('#razonRelacion').val('');
        $('#dependencia').val('');
        $('#categoria').val('');
        $("#idTramiteRelacionado").val('').trigger('change');
    } else {
        $('#categoria').val(elementoModificar.tramiteServicioRelacionado.categoria.nombre);
        $('#dependencia').val(elementoModificar.tramiteServicioRelacionado.dependencia.nombre);
        $('#razonRelacion').val(elementoModificar.razonRelacion);
        $("#idTramiteRelacionado").val(elementoModificar.tramiteServicioRelacionado.idTramiteServicio).trigger('change')
    }
    $('#elemento-modal').modal('show');
};

var fillTS = (res) => {
    let tramites = [];
    let servicios = [];

    for (let index = 0; index < res.length; index++) {
        const element = res[index];
        if (MRM_TS_GESTIONAR.idTramiteServicio != element.idTramiteServicio) {
            if (element.tipoRemtys.idTipoRemtys == 1)
                tramites.push(element);
            else servicios.push(element);
        }
    }

    var $optgroup = $("<optgroup label='Trámites'>");
    for (let index = 0; index < tramites.length; index++) {
        const element = tramites[index];
        var op = "<option value='" + element.idTramiteServicio + "'>" + element.seccionGeneralesTys.nombreTramite + "</option>";
        $optgroup.append(op);
    }
    $('#idTramiteRelacionado').append($optgroup);

    $optgroup = $("<optgroup label='Servicios'>");
    for (let index = 0; index < servicios.length; index++) {
        const element = servicios[index];
        var op = "<option value='" + element.idTramiteServicio + "'>" + element.seccionGeneralesTys.nombreTramite + "</option>";
        $optgroup.append(op);
    }
    $('#idTramiteRelacionado').append($optgroup);
    $('#idTramiteRelacionado').select2({
        "placeholder": "Seleccione",
        "language": {
            "noResults": function() {
                return "Sin resultados";
            }
        },
    });

};

var obtenerTS = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts",
        data: {
            p: 0,
            ps: 9999999
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TramiteServicio');
            console.error(e);
        }
    });
};


var eliminar = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled')

    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + '/ts/' + window.MRM_TS_GESTIONAR.idTramiteServicio + '/ts-relacionados/' + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            loadCards(showCards);
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado el tramite/servicio relacionado', 'TramiteServicio');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Categoráas');
            console.error(e);

        },
        complete: function() {
            $('#eliminar').removeAttr("disabled").show();
            $('#eliminarLoading').hide();
            $('#cancelarEliminar').removeAttr("disabled");
        }
    });
};