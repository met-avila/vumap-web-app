$(function() {
    textOnlyNumbers($("#numeroCopias"));
    $('#elemento-form').submit(guardar);
    $('#eliminar-elemento-form').submit(eliminar);

    $.get(window.MRM_REMTYS_APP_URL + '/templates/cardRequisito.html', function(data) {
        cardTemplate = data;
    });

    $('#guardar').click(() => {
        var idsInOrder = $("#jqCards").sortable("toArray");
        if (idsInOrder.length > 0)
            setOrderItems(idsInOrder.join(','));
        else
            toast('info', 'Primero agregre requisitos.', 'TramiteServicio');
    });

    $("#jqCards").sortable({
        placeholder: "ui-state-highlight"
    });

    obtenerTiposPersonas(function(res) {
        res.forEach((item, index) => {
            const checked = (index == 0) ? 'checked' : '';
            const active = (index == 0) ? 'active' : '';
            const element = $(tipoPersonaItemTemplate(item.idTipoPersonaRequisito, item.nombre, checked, active));
            element.appendTo($('#tiposPersonas'));
        });

        loadCards(showCards);
    });

    $("#original").change(() => {
        setEnabledControls();
    });

    $("#copias").change(() => {
        setEnabledControls();
    });

    adminReadOnlyRequisitos();
});

var adminReadOnlyRequisitos = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    const guardarSeccion = $('#guardarSeccion');
    const nuevoRequisitoBtn = $('.nuevo-requisito-btn');
    if (tipoPermisoEditar && editablePorPerfil) {
        guardarSeccion.show();
        nuevoRequisitoBtn.show();
    } else {
        guardarSeccion.remove();
        nuevoRequisitoBtn.remove();
        $('textarea').attr('disabled', 'disabled');
        $('.editar, .eliminar').remove();
    }
};

var tipoPersonaItemTemplate = (id, nombre, publicado, active) => `
    <label class="btn btn-info waves-effect waves-themed ${active}">
        <input onchange="loadCards(showCards)" ${publicado} type="radio" name="options-tipo-persona" value="${id}" id="tpr-${id}">${nombre}
    </label>
`;

var eliminarElementoClick = (data) => {
    $('#idEliminar').val(data.idRequisitoTys);
    $('#elementoEliminar').text(data.descripcion);
    $('#eliminar-elemento-modal').modal('show');
};

var editarElementoClick = (data) => {
    $('#descripcion').val(data.descripcion);
    $('#original').val(data.original);
    $('#originalDetalle').val(data.originalDetalle);
    $('#copias').val(data.copias);
    $('#numeroCopias').val(data.numeroCopias);
    $('#copiasDetalle').val(data.copiasDetalle);
    $('#fundamentoJuridicoItem').val(data.fundamentoJuridico);
    showModal(data);
};

var descargarElementoClick = (data) => {
    $('<a href="' + data.url + '" target="_blank">External Link</a>')[0].click();
};

var showCards = (res) => {
    const items = res.requisitos.content || res.requisitos;
    $('#jqCards').html('');
    if ($.isArray(items)) {
        // if (items.length > 0)
        //     $('#fjContainer').show();
        items.forEach(item => {
            const htmlCard = $(cardTemplate);
            htmlCard.attr('id', item.idRequisitoTys);

            htmlCard.find('.numero').text(item.numero);
            htmlCard.find('.descripcion').text(item.descripcion);
            let originalDetalle = item.original;
            if (item.originalDetalle && item.originalDetalle.length > 0)
                originalDetalle += ' (' + item.originalDetalle + ')';
            if (originalDetalle == 'NO_APLICA')
                originalDetalle = 'No aplica';
            htmlCard.find('.originalDetalle').text(originalDetalle);


            let copiasDetalle = '';
            if (item.copiasDetalle && item.copiasDetalle.length > 0) {
                copiasDetalle = item.copiasDetalle + '\n (' + item.numeroCopias + ')';
            } else {
                if (item.copias == 'SI') {
                    copiasDetalle = item.copias += ' (' + item.numeroCopias + ')';
                } else
                    copiasDetalle = item.copias;
            }
            if (copiasDetalle == 'NO_APLICA')
                copiasDetalle = 'No aplica';

            htmlCard.find('.copiasDetalle').text(copiasDetalle);

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

    $('#fundamentoJuridicoItem').val('');

    if (res.fj) {
        $('#fundamentoJuridicoItem').val(res.fj.fundamentoJuridico);
    }

    adminReadOnlyRequisitos();
};

var setOrderItems = (itemsIds) => {
    const idTipoPersona = $("input[name='options-tipo-persona']:checked").val();
    $.ajax({
        type: "POST",
        data: {
            'ids[]': itemsIds,
            'fj': ''
        },
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/requisitos/' + idTipoPersona + '/orden',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardardo la sección.', 'TramiteServicio');
            showCards(res);
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Requisitos:Orden');
            console.error(e);
        }
    });
};

var cardTemplate = null;
var loadCards = (callback) => {
    // $('#fjContainer').hide();
    window.scrollTo({ top: 0, left: 0 });
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/requisitos',
        data: {
            pr: $("input[name='options-tipo-persona']:checked").val()
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
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Requisitos');
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
    const url = window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/requisitos';
    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: url + ((elementoModificar) ? ('/' + elementoModificar.idRequisitoTys) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "idTipoPersonaRequisitos": $("input[name='options-tipo-persona']:checked").val(),
            "descripcion": $('#descripcion').val(),
            "original": $('#original').val(),
            "originalDetalle": $('#originalDetalle').val(),
            "copias": $('#copias').val(),
            "numeroCopias": $('#numeroCopias').val(),
            "copiasDetalle": $('#copiasDetalle').val(),
            "fundamentoJuridico": $('#fundamentoJuridicoItem').val(),

        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            elementoModificar = null;
            loadCards(showCards);
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado el requisito', 'Requisitos');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Requisitos');
            console.error(e);
        },
        complete: function() {
            $('#guardarElemento').removeAttr("disabled").show();
            $('#guardarElementoLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

var obtenerTiposPersonas = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/requisitos/tipos-personas",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TiposPersonas');
            console.error(e);
        }
    });
};

var showModal = (item) => {
    elementoModificar = item;
    if (!elementoModificar) {
        $('#descripcion').val('');
        $("#original").val($("#original option:first").val());
        $('#originalDetalle').val('');
        $("#copias").val($("#copias option:first").val());
        $('#numeroCopias').val('');
        $('#copiasDetalle').val('');
        $('#fundamentoJuridicoItem').val('');
    }
    setEnabledControls();
    $('#elemento-modal').modal('show');
};

var setEnabledControls = () => {
    if ($("#original").val() == 'SI') {
        $('#originalDetalle').removeAttr('disabled');
    } else {
        $('#originalDetalle').attr('disabled', 'disabled').removeAttr('required').val('');
    }

    if ($("#copias").val() == 'SI') {
        $('#numeroCopias').removeAttr('disabled').attr('required', 'required');
        $('#copiasDetalle').removeAttr('disabled');
    } else {
        $('#numeroCopias').attr('disabled', 'disabled').removeAttr('required').val('');
        $('#copiasDetalle').attr('disabled', 'disabled').val('');
    }
};


var eliminar = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled')

    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + '/ts/' + window.MRM_TS_GESTIONAR.idTramiteServicio + '/requisitos/' + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            loadCards(showCards);
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado el requisito', 'Requisitos');
        },
        complete: function() {
            $('#eliminar').removeAttr("disabled").show();
            $('#eliminarLoading').hide();
            $('#cancelarEliminar').removeAttr("disabled");
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else
                toast('warning', 'No se pudo eliminar el requisito, intente más tarde.', 'Requisitos');
            console.error(e);
        }
    });
};