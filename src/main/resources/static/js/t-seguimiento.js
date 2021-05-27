var optionsDate = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
$(function() {
    $('#guardarSeccion').show();
    $('#elemento-form').submit(guardar);
    obtenerSeguimientoTS((data) => {
        window.MRM_SEGUIMIENTO_TS = data.seguimientos;
        mostrarSeguimiento(data.seguimientos);
        adminReadOnly();
    });

    $('#guardar').click(() => {
        let idSeccionCompletada = 2;
        if (MRM_TS_GESTIONAR.tipoRemtys.idTipoRemtys == 2)
            idSeccionCompletada = 13;
        $("#guardarSeccion").trigger("sectionNoSaved", { idSeccionTys: idSeccionCompletada });
    });
});

// var adminReadOnly = () => {
//     let mostrarBotonSeguimiento = false;

//     if (MRM_TS_GESTIONAR) {
//         const idEstatus = MRM_TS_GESTIONAR.estatusTys.idEstatusTys;
//         //Si estatus esta en edicion o revisado y el perfil es director de area D.A
//         if ((idEstatus == 1) && MRM_USER.perfil.idPerfil == 3)
//             mostrarBotonSeguimiento = true;
//         else {
//             if (esSeguimientoActivoParaPerfil()) {
//                 mostrarBotonSeguimiento = true;
//             }
//         }
//     }

//     const seguimientoBtn = $('.agregar-seguimiento-btn');
//     if (mostrarBotonSeguimiento)
//         seguimientoBtn.show();
//     else
//         seguimientoBtn.remove();
// };

var adminReadOnly = () => {
    const seguimientoBtn = $('.agregar-seguimiento-btn');
    if (esSeguimientoActivoParaPerfil())
        seguimientoBtn.show();
    else seguimientoBtn.remove();

};

var esSeguimientoActivoParaPerfil = () => {
    let activo = false;
    if (window.MRM_SEGUIMIENTO_TS && $.isArray(window.MRM_SEGUIMIENTO_TS)) {
        let ultimoSeguimiento = window.MRM_SEGUIMIENTO_TS[window.MRM_SEGUIMIENTO_TS.length - 1];
        if (ultimoSeguimiento.idPerfilAtiende == MRM_USER.perfil.idPerfil)
            activo = true;
    }
    return activo;
};

var mostrarSeguimiento = (items) => {
    $('#seguimientoContainer').empty();
    if ($.isArray(items)) {
        items.forEach(item => {
            item.colorEstatus = obtenerColorEstatusTS(item.idEstatusTys);
            $('#seguimientoContainer').append($(seguimientoTemplate(item)));
        });

        const ultimoSeguimiento = items[items.length - 1];
        const bgcolor = obtenerColorEstatusTS(ultimoSeguimiento.idEstatusTys);
        let nombreEstatus = ultimoSeguimiento.nombreEstatus + ' por ' + ultimoSeguimiento.nombrePerfilAtiende;
        if ([3, 5, 6].includes(ultimoSeguimiento.idEstatusTys)) {
            nombreEstatus = ultimoSeguimiento.nombreEstatus + ' por ' + ultimoSeguimiento.nombrePerfilEnvio;
        }
        $('.nombreEstatus').text(nombreEstatus).css('background-color', bgcolor);
    }
};

function obtenerColorEstatusTS(id) {
    let css = '';
    if (id == 1) //En Edicion
        css = '#d8cdbf';
    else if (id == 2) //Para Aprobacion
        css = '#00b59b';
    else if (id == 3) //Aprobado
        css = '#d10572';
    else if (id == 4) //Para Correccion
        css = '#f93a2b';
    else if (id == 5) //Publicado
        css = '#008c82';
    else if (id == 6) //Caducado
        css = '#d1ba40';
    return css;
}

var seguimientoTemplate = (item) => `
<div class="col-sm-12 mb-3">
    <div class="row" style="padding: 10px;
    border: 1px solid #e5e5e5;
    min-height: 41px;">
        <div class="col-sm-12 d-flex justify-content-start align-items-center">
            <div class="text-center border" style="width:90px;">
                <img style="height: 50px; width: 50px;object-fit: cover;" src="${item.fotoUsuario ? item.fotoUsuario : (MRM_REMTYS_APP_URL + '/img/no-user.jpg')}" />
                <p class="m-0">${item.nombrePerfilEnvio}</p>
            </div>
            <div class="d-flex justify-content-start align-items-center p-3 ml-3" style="text-align: center;background-color:${item.colorEstatus}">
                <h4 class="fw-700 m-0" style="color:white;width: 135px;">${item.nombreEstatus}</h4>
            </div>
            <div class="ml-3">
                <h5 class="fw-500 mb-1">${item.observaciones}</h5>
                <p class="mb-0">${item.fechaCreacion} horas</p>
            </div>
        </div>
    </div>
</div>
`;

var guardar = (e) => {
    e.preventDefault();

    disableButton($('#cancelarSeguimiento'), false);
    disableButton($('#guardarSeguimiento'));

    const url = window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/seguimiento';

    $.ajax({
        type: 'POST',
        url: url,
        data: {
            "idEstatus": $('#idEstatus').val(),
            "descripcion": $('#descripcion').val()
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(data) {
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado el seguimiento', 'Seguimiento');
            mostrarSeguimiento(data.seguimientos);
            window.MRM_TS_GESTIONAR = data.tramiteServicio;
            $('.agregar-seguimiento-btn').remove();
            window.MRM_SEGUIMIENTO_TS = data.seguimientos;
            $('#guardarSeccion').remove();
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Remtys API:Seguimiento');
            console.error(e);

        },
        complete: function() {
            enableButton($('#cancelarSeguimiento'));
            enableButton($('#guardarSeguimiento'));
        }
    });
};

var obtenerEstatusTSPerfil = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/" + MRM_TS_GESTIONAR.idTramiteServicio + '/seguimiento/estatus',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:EstatusTS');
            console.error(e);
        }
    });
};

var mostrarModalSeguimiento = () => {
    obtenerEstatusTSPerfil(function(res) {
        $('#idEstatus').empty();
        res.forEach(elemento => {
            $('#idEstatus').append(new Option(elemento.nombre, elemento.idEstatusTys));
        });
        $('#elemento-modal').modal('show');
    });

    $('#descripcion').val(null);
};


var disableButton = (button, loading) => {
    loading = (loading === undefined || loading === null) ? true : loading;
    if (loading)
        $(button).append('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>');
    $(button).attr('disabled', 'disabled');
    $(button).addClass('disabled');
};

var enableButton = (button) => {
    $(button).find('span').remove();
    $(button).removeAttr('disabled');
    $(button).removeClass('disabled');
};