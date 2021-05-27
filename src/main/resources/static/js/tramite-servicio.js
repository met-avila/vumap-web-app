var idSeccionActual = null;
$(function() {
    $('#guardarSeccion').click(() => {
        $("#guardar").data("seccionActual", getSeccionActual());
        $("#guardar").click();
    });

    $('#secciones').change(() => {
        window.scrollTo({ top: 0, left: 0 });
        $('#seccion-content').html('');
        const idSeccion = $('#secciones').val();
        const selected = $.grep(window.MRM_TS_SECCIONES, function(seccion, i) {
            return seccion.idSeccionTys == idSeccion;
        });
        $.get(window.MRM_REMTYS_APP_URL + '/templates/' + selected[0].htmlPage, function(data) {
            $('#seccion-content').html(data);

        });
    });

    const id = $(location).attr("href").split('/').pop();
    if ($.isNumeric(id)) {
        obtenerTramiteServicio(parseInt(id), (rests) => {
            const ultimoSeguimiento = rests.seguimiento[rests.seguimiento.length - 1];
            const bgcolor = obtenerColorEstatusTS(ultimoSeguimiento.idEstatusTys);
            let nombreEstatus = ultimoSeguimiento.nombreEstatus + ' por ' + ultimoSeguimiento.nombrePerfilAtiende;
            if ([3, 5, 6].includes(ultimoSeguimiento.idEstatusTys)) {
                nombreEstatus = ultimoSeguimiento.nombreEstatus + ' por ' + ultimoSeguimiento.nombrePerfilEnvio;
            }
            $('.nombreEstatus').text(nombreEstatus).css('background-color', bgcolor);


            $('#nombreTS').text(rests.seccionGeneralesTys.nombreTramite);
            window.MRM_TS_GESTIONAR = rests;
            isPublicado = rests.publicado;
            obtenerSecciones(rests.tipoRemtys.idTipoRemtys, (res) => {
                window.MRM_TS_SECCIONES = res;
                const sp = obtenerSeccionPendiente(rests.idSeccionCompletada);
                if (sp && sp.seccion)
                    idSeccionActual = sp.seccion.idSeccionTys;
                else
                    idSeccionActual = rests.idSeccionCompletada;
                for (let index = 0; index < res.length; index++) {
                    const element = res[index];
                    let topText = '&nbsp;';
                    let disabledClass = 'icon-color-disabled';
                    if (index == sp.index && index != (res.length - 1) && isPublicado != 1)
                        topText = '(Pendiente)';
                    if (index < sp.index || isPublicado == 1)
                        disabledClass = '';

                    $('#secciones').append(new Option(element.nombre, element.idSeccionTys));
                    const icono = $(iconoTemplate(element.idSeccionTys, element.nombre, element.nombreCorto, element.icono, topText, disabledClass));
                    icono.appendTo($('#icons-steps'));
                }
                const width = 100 / res.length;
                $('.col-custom').css('width', width + '%');
                let progress = '100%';
                if (isPublicado != 1)
                    progress = sp.width;
                $('#icons-steps-progress').css('width', progress);

                let htmlPage = null;
                if (sp && sp.seccion && isPublicado != 1)
                    htmlPage = sp.seccion.htmlPage
                else
                    htmlPage = res[res.length - 1].htmlPage;

                $.get(window.MRM_REMTYS_APP_URL + '/templates/' + htmlPage, function(data) {
                    $('#seccion-content').html(data);
                    $('#ts-generales-actions-content').hide();
                });
            });
        });
    } else {
        location.href = window.MRM_REMTYS_APP_URL + '/tramites-servicios';
    }

    obtenerFlujoInternoTramiteServicio();
});

$("#guardarSeccion").on("sectionNoSaved", function(event, seccion) {
    $.ajax({
        type: "POST",
        data: {
            'ids': seccion.idSeccionTys
        },
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/seccion-completada',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardardo la sección.', 'TramiteServicio');
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TramiteServicio:Seccion-Completada');
            console.error(e);
        }
    });
});

var getSeccionActual = () => {
    for (let index = 0; index < window.MRM_TS_SECCIONES.length; index++) {
        const element = window.MRM_TS_SECCIONES[index];
        if (idSeccionActual == element.idSeccionTys)
            return element;
    }
    return null;
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

var isPublicado = null;
$("#guardarSeccion").on("sectionSaved", function(event, data) {
    if (data && data.publicado)
        isPublicado = data.publicado;
    else if (data.idSeccionCompletada)
        idSeccionActual = data.idSeccionCompletada;
    $('#step-top-message-' + idSeccionActual).html('&nbsp;');
    $('#step-icon-' + idSeccionActual).removeClass('icon-color-disabled');

    if (isPublicado == 1) {
        $('#icons-steps-progress').css('width', '100%');
        //return;
    }

    $('.icono-steps').removeClass('active');
    $('.step-bottom-message').addClass('text-muted');

    const sp = obtenerSeccionPendiente(idSeccionActual);
    if (sp && sp.seccion) {
        $.get(window.MRM_REMTYS_APP_URL + '/templates/' + sp.seccion.htmlPage, function(data) {
            $('#seccion-content').html(data);
            $('#ts-generales-actions-content').hide();
            $('#irSeccionSiguiente').attr('disabled', 'disabled');
            setTimeout(() => {
                idSeccionActual = sp.seccion.idSeccionTys;
                $('#icons-steps-progress').css('width', sp.width);
                $('#step-top-message-' + idSeccionActual).html('&nbsp;');
                $('#step-icon-' + idSeccionActual).addClass('icon-color-flash');
                setTimeout(() => {
                    $('#step-top-message-' + idSeccionActual).html('(Pendiente)');
                    $('#step-bottom-message-' + idSeccionActual).removeClass('text-muted');
                    $('#step-icon-' + idSeccionActual).removeClass('icon-color-flash');
                }, 350);
            }, 1);
        });
    } else {
        $('#icons-steps-progress').css('width', sp.width);
    }
});

/*
$('#irSeccionSiguiente').click(() => {
    const sp = obtenerSeccionPendiente(idSeccionActual);
    $.get(window.MRM_REMTYS_APP_URL + '/templates/' + sp.seccion.htmlPage, function(data) {
        $('#seccion-content').html(data);
        $('#ts-generales-actions-content').hide();
        $('#irSeccionSiguiente').attr('disabled', 'disabled');
        setTimeout(() => {
            idSeccionActual = sp.seccion.idSeccionTys;
            $('#icons-steps-progress').css('width', sp.width);
            setTimeout(() => {
                $('#step-top-message-' + idSeccionActual).html('(Pendiente)');
            }, 350);
        }, 1);
    });
});*/

const obtenerSeccionPendiente = (idSeccion) => {
    let secciones = window.MRM_TS_SECCIONES;
    let seccion = {};
    const width = 100 / secciones.length;
    const halfWidth = width / 2;
    if (!$.isNumeric(idSeccion)) {
        seccion.seccion = secciones[0];
        seccion.width = halfWidth + '%';
        seccion.index = 0;
    } else {
        let index = 0;
        for (index = 0; index < secciones.length; index++) {
            const element = secciones[index];
            if (idSeccion == element.idSeccionTys) {
                break;
            }
        }
        if (index + 1 < secciones.length) {
            seccion.seccion = secciones[index + 1];
            seccion.width = (halfWidth + (index + 1) * width) + '%';
            seccion.index = index + 1;
        } else {
            seccion.width = '100%'
            seccion.index = secciones.length - 1;
        }
    }
    return seccion;
};

const cargarSeccion = (idSeccion) => {
    if (isPublicado == 1)
        idSeccionActual = idSeccion;
    let secciones = window.MRM_TS_SECCIONES;
    for (let index = 0; index < secciones.length; index++) {
        const element = secciones[index];
        if (idSeccion == element.idSeccionTys) {
            $('.icono-steps').removeClass('active');
            $('.step-bottom-message').addClass('text-muted');

            $('#step-icon-' + idSeccion).addClass('active');
            $('#step-bottom-message-' + idSeccion).removeClass('text-muted');
            $.get(window.MRM_REMTYS_APP_URL + '/templates/' + element.htmlPage, function(data) {
                $('#seccion-content').html(data);
                $('#ts-generales-actions-content').hide();
            });
            break;
        }
    }
};


const iconoTemplate = (idSeccion, nombre, nombreCorto, icono, topText, disabledClass) => `
    <div class="col-custom">
        <p id="step-top-message-${idSeccion}" class="text-muted icon-top-message">${topText}</p>
        <a title="${nombre}" id="step-icon-${idSeccion}" href="javascript:cargarSeccion(${idSeccion});" class="icono-steps btn btn-info btn-icon rounded-circle ml-1 waves-effect waves-themed ${disabledClass}">
            <i class="${icono}"></i>
        </a>
        <p id="step-bottom-message-${idSeccion}" class="step-bottom-message text-muted"><strong>${nombreCorto}</strong></p>
    </div>
`;

window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

var header = document.getElementById("sectionsContainer");
var sticky = 150;

const obtenerTramiteServicio = (idTramiteServicio, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/" + idTramiteServicio,
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TS-Generales-Catálogos');
            console.error(e);
        }
    });
};

const obtenerFlujoInternoTramiteServicio = () => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/flujo-interno",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            window.MRM_FLUJO_INTERNO_TS = res;
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TS-Generales-Catálogos');
            console.error(e);
        }
    });
};

const obtenerSecciones = (idTipoRemtys, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/secciones",
        data: {
            tr: idTipoRemtys
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
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TS-Generales-Catálogos');
            console.error(e);
        }
    });
};

var obtenerSeguimientoTS = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/" + MRM_TS_GESTIONAR.idTramiteServicio + "/seguimiento",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Seguimiento');
            console.error(e);
        }
    });
};

//Obtiene el tipo de permiso
var obtenerTipoPermisoMenuPerfilUsuario = (idTipoPermiso) => {
    let tipoPermiso = null;
    const menus = MRM_USUARIO.perfil.menus;
    menus.forEach(menu => {
        if (menu.idMenu == 8 && menu.permisosMenu) //tramites y servicios
        {
            menu.permisosMenu.forEach(pm => {
                if (pm.tipoPermisoMenu.idTipoPermiso == idTipoPermiso) {
                    tipoPermiso = pm.tipoPermisoMenu;
                }
            });
        }
    });

    return tipoPermiso;
};

// var esEditableTSPorPerfilUsuario = () => {
//     let editable = false;
//     //Puede editar si el ts esta en estatus "En edición" o "Para corrección", y tiene perfil D.A
//     if ([1, 6].includes(MRM_TS_GESTIONAR.estatusTys.idEstatusTys) && MRM_USUARIO.perfil.idPerfil == 3)
//         editable = true;
//     //Puede editar si esta en estatus "Para revisión" o "Para aprobación", y tiene perfil CMR
//     else if ([2, 4].includes(MRM_TS_GESTIONAR.estatusTys.idEstatusTys) && MRM_USUARIO.perfil.idPerfil == 4) {
//         editable = true;
//     }
//     return editable;
// };

var esEditableTSPorPerfilUsuario = () => {
    let editable = false;
    if (window.MRM_TS_GESTIONAR.seguimiento && $.isArray(MRM_TS_GESTIONAR.seguimiento)) {
        let ultimoSeguimiento = MRM_TS_GESTIONAR.seguimiento[MRM_TS_GESTIONAR.seguimiento.length - 1];
        if (ultimoSeguimiento.idPerfilAtiende == MRM_USER.perfil.idPerfil)
            editable = true;
    }
    return editable;
};