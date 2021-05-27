var rfile = null;
$(function() {

    $('#elemento-form').submit(guardar);
    $('#eliminar-elemento-form').submit(eliminar);

    clearSelect($('#f-tipoRecurso'), null, -1);
    clearSelect($('#f-visibilidad'), null, -1);

    $("#file-uploader").dxFileUploader({
        selectButtonText: "Seleccionar archivo",
        labelText: "",
        accept: "*.*",
        uploadMode: "useForm",
        maxFileSize: 4000000,
        invalidMaxFileSizeMessage: 'Tamaño de archivo no soportado',
        onValueChanged: (e) => {
            rfile = e.value;
        }
    });

    obtenerTRVS(function(res) {

        res.tr.forEach(elemento => {
            $('#f-tipoRecurso').append(new Option(elemento.nombre, elemento.idTipoRecurso));
        });

        res.vs.forEach(elemento => {
            $('#f-visibilidad').append(new Option(elemento.nombre, elemento.idTipoVisibilidad));
            $('#idTipoVisibilidad').append(new Option(elemento.nombre, elemento.idTipoVisibilidad));
        });
    });

    obtenerDependenciasUsuario(window.MRM_USUARIO.idUsuario, function(res) {
        dependenciasUsuario = $.map(res, (d) => { return d.idDependencia; })
        loadCards();
    });
});

var dependenciasUsuario = null;

var showDependenciasFiltro = () => {
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
    }, dependencias, 'single', dependenciasUsuario);
};

var showDependencias = () => {
    var dependencias = [];
    const dependencia = $('#idDependencia').val();
    if (dependencia)
        dependencias.push(parseInt(dependencia));
    depmodal.show((res) => {
        if (res.length == 0) {
            $('#idDependencia').val(null);
            $('#dependencia').val('');
        } else {
            const dependencia = res[0];
            $('#idDependencia').val(dependencia.idDependencia);
            $('#dependencia').val(dependencia.nombre);
        }
    }, dependencias, 'single', dependenciasUsuario);
};

const loadCards = () => {
    $("#jqCards")
        .jqCards({
            url: window.MRM_REMTYS_API_URL + "/recursos",
            datatype: "json",
            data: {},
            urlTemplateCard: 'templates/cardRecurso.html',
            selectorFilterControl: 'panelFiltro',
            filterControl: {
                layoutFilter: [{
                    selector: '#f-tipoRecurso',
                    property: 't',
                    controlType: jqCards.controlType.DropDownList,
                    defaultValue: '-1'
                }, {
                    selector: '#f-visibilidad',
                    property: 'tv',
                    controlType: jqCards.controlType.DropDownList,
                    defaultValue: '-1'
                }, {
                    selector: '#f-idDependencia',
                    property: 'd',
                    controlType: jqCards.controlType.InputText,
                    defaultValue: ''
                }, {
                    selector: '#f-descripcion',
                    property: 'de',
                    controlType: jqCards.controlType.InputText
                }]
            },
            layoutCard: [{
                    selector: '.eliminar',
                    event: 'click',
                    eventFunction: function(elemento) {
                        $('#idEliminar').val(elemento.idRecurso);
                        $('#elementoEliminar').text(elemento.descripcion);
                        $('#eliminar-elemento-modal').modal('show');
                    }
                },
                {
                    selector: '.editar',
                    event: 'click',
                    eventFunction: function(obj) {
                        $('#descripcion').val(obj.descripcion);
                        $('#idTipoVisibilidad').val(obj.tipoVisibilidad.idTipoVisibilidad);
                        $('#idDependencia').val(obj.dependencia.idDependencia);
                        $('#dependencia').val(obj.dependencia.nombre);
                        showModal(obj);
                    }
                },
                {
                    selector: '.descargar',
                    event: 'click',
                    eventFunction: function(obj) {
                        $('<a href="' + obj.url + '" target="_blank">External Link</a>')[0].click();
                    }
                }
            ],
            numCards: 10,
            preloadCard: function(data, card) {
                card.find('.descripcion').text(data.descripcion);
                card.find('.tipoRecurso').text(data.tipoRecurso.nombre);
                card.find('.tipoVisibilidad').text(data.tipoVisibilidad.nombre);

                if (data.idUsuarioCreacion != window.MRM_USUARIO.idUsuario) {
                    card.find('.eliminar').remove();
                    card.find('.editar').remove();
                }

                return card;
            },
            initLoadCards: function() {
                //  $(".preloader-background").show();
            },
            loadCardsComplete: function() {
                setPermisosMenu(9, ['.eliminar', '.editar', '.agregar']);
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

const limpiarFiltros = () => {
    $('#f-dependencia').val('');
    $("#jqCards").jqCards('cleanFilter');
    $("#jqCards").jqCards('reload');
}


var elementoModificar = null;
const showModal = (elemento) => {
    rfile = null;
    if (elemento) {
        elementoModificar = elemento;
        $("#file-uploader").dxFileUploader('reset');
        $('#elemento-modal-title').text('Modificar recurso');
        $('#notaActualizarRecurso').show();
    } else {
        limpiarModal();
        elementoModificar = null;
        $('#notaActualizarRecurso').hide();
        $('#elemento-modal-title').text('Nuevo recurso');
    }
    $('#elemento-modal').modal('show');
};

const limpiarModal = () => {
    $('#idDependencia').val(null);
    $("#file-uploader").dxFileUploader('reset');
    $("#elemento-form :input:text").val('');
    $("#idTipoVisibilidad").val($("#idTipoVisibilidad option:first").val());
};

const guardar = (e) => {
    e.preventDefault();
    if ((!$.isArray(rfile) || rfile.length == 0) && !elementoModificar) {
        toast('info', 'Seleccione un archivo para el recurso');
        return;
    }

    $('#guardar').attr('disabled', 'disabled').hide();
    $('#guardarLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    let file = null;
    if ($.isArray(rfile) && rfile.length > 0) {
        file = rfile[0];
    } else
        file = '';
    var data = new FormData();
    data.append('file', file);
    data.append("tvr", $('#idTipoVisibilidad').val());
    data.append("d", $('#idDependencia').val());
    data.append("de", $('#descripcion').val());

    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: window.MRM_REMTYS_API_URL + "/recursos" + ((elementoModificar) ? ('/' + elementoModificar.idRecurso) : ''),
        enctype: 'multipart/form-data',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000,
        success: function(res) {
            limpiarFiltros();
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado el recurso', 'Recursos');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400 && e.responseJSON.code == 'ya_existe') {
                $('#nombre').focus();
                toast('warning', 'Ya existe un recurso con el nombre dado, escriba uno distinto.', 'Recursos');
            } else {
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Recursos');
                console.error(e);
            }
        },
        complete: function() {
            $('#guardar').removeAttr("disabled").show();
            $('#guardarLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};


const eliminar = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled')
    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + "/recursos/" + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            limpiarFiltros();
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado el recurso', 'Recursos');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                $('#eliminar-elemento-modal').modal('hide');
                limpiarFiltros();
            } else {
                toast('warning', 'No se pudo eliminar el recurso, intente más tarde.', 'Recursos');
                console.error(e);
            }
        },
        complete: function() {
            $('#eliminar').removeAttr("disabled").show();
            $('#eliminarLoading').hide();
            $('#cancelarEliminar').removeAttr("disabled");
        }
    });
};