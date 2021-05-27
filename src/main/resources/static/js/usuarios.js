$(function() {
    loadCards();
    textOnlyNumbers($("#celular"));
    $('#elemento-form').submit(guardar);
    $('#eliminar-elemento-form').submit(eliminar);
    $('#sistema').change(sistemaChange);
    $('#f-sistema').change(filtroSistemaChange);
    obtenerSistemas(function(res) {
        res.forEach(sistema => {
            $('#f-sistema').append(new Option(sistema.nombre, sistema.idSistema));
        });
    });
});

const filtroSistemaChange = () => {
    clearSelect($('#f-perfil'), null, -1);
    const idSistema = $('#f-sistema').val();
    if (idSistema != '-1') {
        obtenerPerfilesSistema(idSistema, function(res) {
            res.content.forEach(perfil => {
                $('#f-perfil').append(new Option(perfil.nombre, perfil.idPerfil));
            });
        });
    }
};

const loadCards = () => {
    $("#jqCards")
        .jqCards({
            url: window.MRM_USERS_API_URL + "/usuarios",
            datatype: "json",
            data: {},
            urlTemplateCard: 'templates/cardUsuario.html',
            selectorFilterControl: 'panelFiltro',
            filterControl: {
                layoutFilter: [{
                        selector: '#f-nombrePropio',
                        property: 'np',
                        controlType: jqCards.controlType.InputText
                    },
                    {
                        selector: '#f-apellidoPaterno',
                        property: 'ap',
                        controlType: jqCards.controlType.InputText
                    },
                    {
                        selector: '#f-apellidoMaterno',
                        property: 'am',
                        controlType: jqCards.controlType.InputText
                    },
                    {
                        selector: '#f-estatus',
                        property: 'e',
                        controlType: jqCards.controlType.DropDownList,
                        defaultValue: '-1'
                    },
                    {
                        selector: '#f-nombreUsuario',
                        property: 'nu',
                        controlType: jqCards.controlType.InputText
                    },
                    {
                        selector: '#f-perfil',
                        property: 'idp',
                        controlType: jqCards.controlType.DropDownList,
                        defaultValue: '-1'
                    },
                    {
                        selector: '#f-sistema',
                        property: 'ids',
                        controlType: jqCards.controlType.DropDownList,
                        defaultValue: '-1'
                    }
                ]
            },
            layoutCard: [{
                    selector: '.dependencias',
                    event: 'click',
                    eventFunction: function(elemento) {

                        obtenerDependenciasUsuario(elemento.idUsuario, function(resEdit) {
                            const selected = $.map(resEdit, function(dep) {
                                return dep.idDependencia;
                            });

                            depmodal.show((res) => {
                                setDependenciasUsuario(elemento.idUsuario, res);
                            }, selected, null, null);
                        });
                        /*
                        obtenerDependenciasUsuario(elemento.idUsuario, function(resEdit) {
                            obtenerDependenciasUsuario(window.MRM_USUARIO.idUsuario, function(res) {
                                const selected = $.map(resEdit, function(dep) {
                                    return dep.idDependencia;
                                });

                                const enabled = $.map(res, function(dep) {
                                    return dep.idDependencia;
                                });
                                depmodal.show((res) => {
                                    setDependenciasUsuario(elemento.idUsuario, res);
                                }, selected, null, enabled);
                            });
                        });*/

                    }
                },
                {
                    selector: '.eliminar',
                    event: 'click',
                    eventFunction: function(elemento) {
                        $('#idEliminar').val(elemento.idUsuario);
                        $('#elementoEliminar').text(elemento.nombreUsuario);
                        $('#eliminar-elemento-modal').modal('show');
                    }
                },
                {
                    selector: '.editar',
                    event: 'click',
                    eventFunction: function(obj) {
                        $('#nombrePropio').val(obj.nombrePropio);
                        $('#apellidoPaterno').val(obj.apellidoPaterno);
                        $('#apellidoMaterno').val(obj.apellidoMaterno);
                        $('#nombreUsuario').val(obj.nombreUsuario);
                        $('#celular').val(obj.celular);
                        $('#correo').val(obj.correo);
                        $('#estatus').val(obj.estatus);
                        showModal(obj);
                    }
                }
            ],
            numCards: 10,
            preloadCard: function(data, card) {
                card.find('.fullname').text(data.fullname);
                card.find('.nombreUsuario').text(data.nombreUsuario);
                card.find('.correo').text(data.correo);
                card.find('.celular').text(data.celular);
                card.find('.sistema').text(data.perfil.sistema.nombre);
                card.find('.pefil').text(data.perfil.nombre);

                var urlFoto = data.urlFoto;
                if (!urlFoto)
                    urlFoto = 'img/no-user.jpg';
                card.find('.usuarioFoto').attr("src", urlFoto);

                if (data.isRoot) {
                    card.find('.eliminar').remove();
                }
                return card;
            },
            initLoadCards: function() {
                //  $(".preloader-background").show();
            },
            loadCardsComplete: function() {
                setPermisosMenu(3, ['.eliminar', '.editar', '.agregar']);
                /*  $(".preloader-background").hide();
                  $('.tooltipped').tooltip({
                      delay: 50
                  });*/
            }
        });
}




const setDependenciasUsuario = (idUsuario, args) => {
    if (args.length == 0) args = '';
    else {
        args = $.map(args, function(dep) {
            return dep.idDependencia;
        }).join(',');
    }

    $.ajax({
        type: "POST",
        url: window.MRM_REMTYS_API_URL + "/usuario/" + idUsuario + "/dependencias",
        data: {
            'ids[]': args
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se han establecido las dependencias.', 'Usuario');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Dependencias');
            console.error(e);
        }
    });
};

const filtrar = () => {
    $("#jqCards").jqCards('filter');
}

const limpiarFiltros = () => {
    $("#jqCards").jqCards('cleanFilter');
    $("#jqCards").jqCards('reload');
}

var elementoModificar = null;
const showModal = (elemento) => {
    if (elemento) {
        elementoModificar = elemento;
        $('elemento-modal-title').text('Modificar usuario');
    } else {
        limpiarModal();
        elementoModificar = null;
        $('elemento-modal-title').text('Nuevo usuario');
    }

    obtenerSistemas(function(res) {
        clearSelect($('#sistema'));
        res.forEach(sistema => {
            $('#sistema').append(new Option(sistema.nombre, sistema.idSistema));
        });
        if (elementoModificar) {
            $('#sistema').val(elementoModificar.perfil.sistema.idSistema);
            sistemaChange();
        } else
            $('#elemento-modal').modal('show');
    });
};

const sistemaChange = () => {
    clearSelect($('#perfil'));
    const idSistema = $('#sistema').val();
    if (idSistema) {
        obtenerPerfilesSistema(idSistema, function(res) {
            res.content.forEach(perfil => {
                $('#perfil').append(new Option(perfil.nombre, perfil.idPerfil));
            });
            if (elementoModificar) {
                if (idSistema == elementoModificar.perfil.sistema.idSistema)
                    $('#perfil').val(elementoModificar.perfil.idPerfil);
                $('#elemento-modal').modal('show');
            }
        });
    }
};

const obtenerPerfilesSistema = (idSistema, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_USERS_API_URL + "/perfiles",
        data: { ids: idSistema },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Usuarios API:Perfiles');
            console.error(e);
        }
    });
};

const obtenerSistemas = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_USERS_API_URL + "/sistemas",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Usuarios API:Sistemas');
            console.error(e);
        }
    });
}

const limpiarModal = () => {
    $("#elemento-form :input:text").val('');
    $("#estatus").val(1);
    clearSelect($('#sistema'));
    clearSelect($('#perfil'));
};

const guardar = (e) => {
    e.preventDefault();

    $('#guardar').attr('disabled', 'disabled').hide();
    $('#guardarLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: window.MRM_USERS_API_URL + "/usuarios" + ((elementoModificar) ? ('/' + elementoModificar.idUsuario) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "nombrePropio": $('#nombrePropio').val(),
            "apellidoPaterno": $('#apellidoPaterno').val(),
            "apellidoMaterno": $('#apellidoMaterno').val(),
            "nombreUsuario": $('#nombreUsuario').val(),
            "correo": $('#correo').val(),
            "celular": $('#celular').val(),
            "estatus": $('#estatus').val(),
            "idPerfil": $('#perfil').val(),
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            limpiarFiltros();
            elementoModificar = null;

            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado el usuario ' + res.nombreUsuario, 'Usuarios');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                if (e.responseJSON.code == 'usuario_ya_existe') {
                    $('#nombreUsuario').focus();
                    toast('warning', 'Ya existe un usuario con el nombre de usuario dado, escriba uno distinto.', 'Usuarios');
                } else if (e.responseJSON.code == 'usuario_ya_existe_correo') {
                    $('#correo').focus();
                    toast('warning', 'Ya existe un usuario con el correo dado, escriba uno distinto.', 'Usuarios');
                }
            } else {
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Usuarios');
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

const obtenerct = (idUsuario, callback) => {
    $.ajax({
        type: "POST",
        data: {
            'idu': idUsuario
        },
        url: window.MRM_SECURITY_API_URL + '/jwt/uct/au',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Security API:uct:ua');
            console.error(e);
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
        url: window.MRM_USERS_API_URL + "/usuarios/" + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            limpiarFiltros();
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado el usuario', 'Usarios');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                $('#eliminar-elemento-modal').modal('hide');
                limpiarFiltros();
            } else {
                toast('warning', 'No se pudo eliminar el usuario, intente más tarde.', 'Usuarios');
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