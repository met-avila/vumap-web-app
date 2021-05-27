$(function() {
    clearSelect($('#f-tiposRemtys'), null, '-1');
    clearSelect($('#f-categoria'), null, '-1');
    clearSelect($('#f-dependencia'), null, '-1');
    clearSelect($('#f-estatus'), null, '-1');

    $('#eliminar-ts-form').submit(onEliminarTsSubmit);

    loadCards();

    $('#f-tiposRemtys').change(fTiposRemtysChange);
    obtenerTiposRemtys((res) => {
        res.forEach(elemento => {
            $('#f-tiposRemtys').append(new Option(elemento.nombre, elemento.idTipoRemtys));
        });
    });

    obtenerEstatusTys((res) => {
        res.forEach(elemento => {
            $('#f-estatus').append(new Option(elemento.nombre, elemento.idEstatusTys));
        });
    });
});

const onEliminarTsSubmit = (e) => {
    e.preventDefault();
    $('#eliminarTS').attr('disabled', 'disabled').hide();
    $('#eliminarTSLoading').show();
    $('#cancelarEliminarTS').attr('disabled', 'disabled')

    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + "/ts/" + $('#idTSEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            limpiarFiltros();
            $('#eliminar-ts-modal').modal('hide');
            toast('info', 'Se ha eliminado el tramite/servicio');
        },
        error: function(e) {
            if (e.status == 403 || e.status == 401)
                window.location = MRM_REMTYS_APP_URL + '/logout'
            if (e.status == 400) {
                $('#eliminar-ts-modal').modal('hide');
                limpiarFiltros();
            } else {
                toast('warning', 'No se pudo eliminar el tramite/servicio, intente más tarde.', 'TS');
                console.error(e);
            }
        },
        complete: function() {
            $('#eliminarTS').removeAttr("disabled").show();
            $('#eliminarTSLoading').hide();
            $('#cancelarEliminarTS').removeAttr("disabled");
        }
    });
};

var showDependencias = () => {
    obtenerDependenciasUsuario(window.MRM_USUARIO.idUsuario, function(res) {
        const enabled = $.map(res, function(dep) {
            return dep.idDependencia;
        });
        var dependencias = [];
        const dependencia = $('#f-idDependencia').val();
        if (dependencia)
            dependencias.push(parseInt(dependencia));
        depmodal.show((res) => {
            if (res.length == 0) {
                $('#f-idDependencia').val(null);
                $('#f-dependencia').val('');
            } else {
                const dependencia = res[0];
                $('#f-idDependencia').val(dependencia.idDependencia);
                $('#f-dependencia').val(dependencia.nombre);
            }
        }, dependencias, 'single', enabled);
    });
};

const fTiposRemtysChange = () => {
    clearSelect($('#f-categoria'), null, '-1');
    clearSelect($('#f-estatus'), null, '-1');
    const idTiposRemtys = $('#f-tiposRemtys').val();
    if (idTiposRemtys) {
        obtenerCategorias(idTiposRemtys, (res) => {
            res.content.forEach(elemento => {
                $('#f-categoria').append(new Option(elemento.nombre, elemento.idCategoria));
            });
        });
    }
};

const loadCards = () => {
    $("#jqCards")
        .jqCards({
            url: window.MRM_REMTYS_API_URL + "/ts",
            datatype: "json",
            data: {},
            urlTemplateCard: 'templates/cardTramiteServicio.html',
            selectorFilterControl: 'panelFiltro',
            filterControl: {
                layoutFilter: [{
                        selector: '#f-tiposRemtys',
                        property: 'tr',
                        controlType: jqCards.controlType.DropDownList,
                        defaultValue: '-1'
                    }, {
                        selector: '#f-categoria',
                        property: 'c',
                        controlType: jqCards.controlType.DropDownList,
                        defaultValue: '-1'
                    },
                    {
                        selector: '#f-idDependencia',
                        property: 'd',
                        controlType: jqCards.controlType.DropDownList,
                        defaultValue: ''
                    }, {
                        selector: '#f-estatus',
                        property: 'e',
                        controlType: jqCards.controlType.DropDownList,
                        defaultValue: '-1'
                    },
                    {
                        selector: '#f-nombre',
                        property: 'n',
                        controlType: jqCards.controlType.InputText
                    }
                ]
            },
            layoutCard: [{
                selector: '.eliminar',
                event: 'click',
                eventFunction: function(ts) {
                    const tipo = ts.tipoRemtys.nombre.toLowerCase();
                    $('#eliminar-ts-form-title').text('Eliminar ' + tipo);
                    $('#idTSEliminar').val(ts.idTramiteServicio);
                    $('#tsEliminar').text(tipo + ' ' + ts.seccionGeneralesTys.nombreTramite);
                    $('#eliminar-ts-modal').modal('show');
                }
            }],
            numCards: 10,
            preloadCard: function(data, card) {
                card.find('.nombreTramite').text(data.seccionGeneralesTys.nombreTramite);
                card.find('.nombreCategoria').text(data.categoria.nombre);
                card.find('.nombreDependencia').text(data.dependencia.nombre);
                card.find('.tipoRemtys').text(data.tipoRemtys.nombre);

                card.find('.gestionar').attr('href', 'tramites-servicios/' + data.idTramiteServicio);
                card.find('.flujo').attr('href', 'tramites-servicios/' + data.idTramiteServicio + '/flujo');

                if (data.estatusTys.idEstatusTys == 5) {
                    card.find('.eliminar').remove();
                }

                const ultimoSeguimiento = data.seguimiento[data.seguimiento.length - 1];

                const bgcolor = obtenerColorEstatusTS(ultimoSeguimiento.idEstatusTys);
                let nombreEstatus = ultimoSeguimiento.nombreEstatus + ' por ' + ultimoSeguimiento.nombrePerfilAtiende;
                if ([3, 5, 6].includes(ultimoSeguimiento.idEstatusTys)) {
                    nombreEstatus = ultimoSeguimiento.nombreEstatus + ' por ' + ultimoSeguimiento.nombrePerfilEnvio;
                }
                card.find('.nombreEstatus').text(nombreEstatus).css('background-color', bgcolor);


                return card;
            },
            initLoadCards: function() {
                //  $(".preloader-background").show();
            },
            loadCardsComplete: function() {
                setPermisosMenu(8, ['.eliminar', '.editar', '.agregar']);
                /*  $(".preloader-background").hide();
                  $('.tooltipped').tooltip({
                      delay: 50
                  });*/
            }
        });
}

const filtrar = () => {
    $("#jqCards").jqCards('filter');
}

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

const limpiarFiltros = () => {
    $('#f-dependencia').val('');
    $('#f-idDependencia').val(null);
    clearSelect($('#f-categoria'), null, '-1');
    clearSelect($('#f-estatus'), null, '-1');
    $("#jqCards").jqCards('cleanFilter');
    $("#jqCards").jqCards('reload');
}

const obtenerEstatusTys = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/estatus",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:EstatusTys');
            console.error(e);
        }
    });
};

const limpiarModal = () => {
    $("#elemento-form :input:text").val('');
    clearSelect($('#tiposRemtys'), null, '-1');
};