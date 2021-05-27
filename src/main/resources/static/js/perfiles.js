var sistemas = null;
$(function() {
    loadCards();
    $('#perfil-form').submit(guardarPerfil);
    $('#eliminar-perfil-form').submit(eliminarPerfil);
    $('#idSistema').change(idSistemaChanged);

    obtenerSistemas((res) => {
        sistemas = res;
        sistemas.forEach(elemento => {
            $('#idSistema').append(new Option(elemento.nombre, elemento.idSistema));
            $('#f-sistema').append(new Option(elemento.nombre, elemento.idSistema));
        });
    });
});

const idSistemaChanged = () => {
    $('#menusSistema').html('');
    const idSistema = $('#idSistema').val();
    if (idSistema) {
        let sistema = null;
        sistemas.forEach(elemento => {
            if (elemento.idSistema == idSistema)
                sistema = elemento;
        });
        if (sistema != null) {
            crearMenus(sistema.menus);
            $('.chkpermiso_acceso').change(chkPermisoAccesoChange);
        }
    }
};

const chkPermisoAccesoChange = (e) => {
    const idMenu = $(e.target).attr('idmenu');
    const id = $(e.target).attr('id');
    const checked = $(e.target).is(':checked');
    $('.permisomenu').each((index, element) => {
        if ($(element).attr('idmenu') == idMenu && $(element).attr('id') != id) {
            if (checked == false) {
                $(element).prop('checked', false).attr('disabled', 'disabled');
            } else {
                $(element).removeAttr('disabled');
            }
        }
    });
};

const loadCards = () => {
    $("#jqCards")
        .jqCards({
            url: window.MRM_USERS_API_URL + "/perfiles",
            datatype: "json",
            data: {},
            urlTemplateCard: 'templates/cardPerfil.html',
            selectorFilterControl: 'panelFiltro',
            filterControl: {
                layoutFilter: [{
                        selector: '#f-nombre',
                        property: 'n',
                        controlType: jqCards.controlType.InputText,
                        defaultValue: ''
                    }, {
                        selector: '#f-estatus',
                        property: 'e',
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
                    selector: '.eliminar',
                    event: 'click',
                    eventFunction: function(perfil) {
                        $('#idPerfilEliminar').val(perfil.idPerfil);
                        $('#perfilEliminar').text(perfil.nombre);
                        $('#eliminar-perfil-modal').modal('show');
                    }
                }, {
                    selector: '.editar',
                    event: 'click',
                    eventFunction: function(obj) {
                        obtenerPerfil(obj.idPerfil, (res) => {
                            perfilModal(res);
                        });
                    }
                }

            ],
            numCards: 10,
            preloadCard: function(data, card) {
                card.find('.nombre').text(data.nombre);
                card.find('.nombreSistema').text(data.sistema.nombre);
                card.find('.numeroUsuarios').text(data.numeroUsuarios);

                if (data.numeroUsuarios > 0) {
                    card.find('.eliminar').remove();
                }
                return card;
            },
            initLoadCards: function() {
                //  $(".preloader-background").show();
            },
            loadCardsComplete: function() {
                setPermisosMenu(2, ['.eliminar', '.editar', '.agregar']); //2 id menu para perfiles
                /*  $(".preloader-background").hide();
                  $('.tooltipped').tooltip({
                      delay: 50
                  });*/
            }
        });
}

const obtenerPerfil = (idPerfil, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_USERS_API_URL + "/perfiles/" + idPerfil,
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
}

function filtrar() {
    $("#jqCards").jqCards('filter');
}

function limpiarFiltros() {
    $("#jqCards").jqCards('cleanFilter');
    $("#jqCards").jqCards('reload');
}

var elementoModificar = null;
const perfilModal = (item) => {
    if (item) {
        elementoModificar = item;
        $('#nombre').val(item.nombre);
        $('#descripcion').val(item.descripcion);
        $('#estatus').val(item.estatus);
        $("#idSistema").val(elementoModificar.sistema.idSistema);
        $('.modal-title').text('Modificar perfil');
    } else {
        elementoModificar = null;
        limpiarModal();
        $("#idSistema").val($("#idSistema option:first").val());
        $('.modal-title').text('Nuevo perfil');
    }

    idSistemaChanged();
    if (item) {
        setPermisosMenusPerfil(item.menus);
    }

    $("#menusSistema").animate({ scrollTop: 0 });
    $('#perfil-modal').modal('show');
};

const setPermisosMenusPerfil = (menus) => {
    if ($.isArray(menus)) {
        for (let index = 0; index < menus.length; index++) {
            const menu = menus[index];
            if (menu.permisosMenu) {
                setPermisosMenuPerfil(menu.permisosMenu);
                $('.permisomenu').each((index, element) => {
                    if ($(element).attr('idmenu') == menu.idMenu) {
                        $(element).removeAttr('disabled');
                    }
                });
            }
            if (menu.menus)
                setPermisosMenusPerfil(menu.menus);
        }
    }
};

const setPermisosMenuPerfil = (permisosMenu) => {
    for (let index = 0; index < permisosMenu.length; index++) {
        const permiso = permisosMenu[index];
        $('#pm_' + permiso.idPermisoMenu).prop('checked', true);
    }
};

const crearMenus = (menus) => {
    var html = '';
    if ($.isArray(menus)) {
        const htmlPermisosMenu = (menu, parent) => {
            var html = '';
            for (let index = 0; index < menu.permisosMenu.length; index++) {
                const permiso = menu.permisosMenu[index];
                let disabled = 'disabled';
                if (permiso.tipoPermisoMenu.idTipoPermiso == 1) //permiso acceso
                    disabled = '';
                html += [
                    '<div class="col-3 mb-2">',
                    '    <div class="custom-control custom-checkbox">',
                    '        <input type="checkbox" ' + disabled + ' class="custom-control-input permisomenu chkpermiso_' + permiso.cssClase.replace('.', '') + '" id="pm_' + permiso.idPermisoMenu + '" permiso="' + permiso.idPermisoMenu + '" idmenu="' + menu.idMenu + '">',
                    '        <label class="custom-control-label" for="pm_' + permiso.idPermisoMenu + '">' + permiso.tipoPermisoMenu.nombre + '</label>',
                    '    </div>',
                    '</div>'
                ].join('');
            }
            return html;
        };

        const htmlMenus = (menus, parent) => {
            var html = '';
            for (let index = 0; index < menus.length; index++) {
                const menu = menus[index];
                if ($.isArray(menu.permisosMenu)) {
                    var name = '';
                    var parenthtml = '';
                    if (parent) {
                        name = (parent.nombre + " > " + menu.nombre);
                        parenthtml = 'parent= "' + parent.idMenu + '"';
                    } else {
                        name = menu.nombre;
                    }
                    html += [
                        '<li class="list-group-item menu" menu="' + menu.idMenu + '" ' + parenthtml + '>',
                        '   <div class="row">',
                        '       <div class="col-4 d-flex align-items-center">' + name + '</div>',
                        '       <div class="col-8 row">',
                        htmlPermisosMenu(menu, parent),
                        '       </div>',
                        '   </div>',
                        '</li>'

                    ].join('');
                }
                if (menu.menus)
                    html += htmlMenus(menu.menus, menu);
            }
            return html;
        };
        html = htmlMenus(menus);
    }

    $('#menusSistema').html(html);
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
    $('#nombre').val('');
    $('#descripcion').val('');
    $('#estatus').val(1);
};

const obtenerPermisosMenus = () => {
    var menusSave = [];

    const getMenu = (idMenu) => {
        let menu = null;
        $.each(menusSave, (index, item) => {
            if (idMenu == item.idMenu) {
                menu = item;
            }
        });
        return menu;
    };


    $('#menusSistema').find('li').each((index, item) => {

        const idMenu = $(item).attr('menu');
        let menuLocal = { idMenu: idMenu };
        menuLocal.permisosMenu = [];
        $(item).find('input').each((index, element) => {
            if ($(element).is(':checked')) {
                menuLocal.permisosMenu.push({ idPermisoMenu: $(element).attr('permiso') });
            }
        });

        if (menuLocal.permisosMenu.length > 0) {
            const idMenuPadre = $(item).attr('parent');
            if (idMenuPadre) {
                let menu = getMenu(idMenuPadre);
                if (menu == null) {
                    menusSave.push({ idMenu: idMenuPadre });
                }
            }
            menusSave.push(menuLocal);
        }

    });

    return menusSave;
};

const guardarPerfil = (e) => {
    e.preventDefault();

    $('#guardarPerfil').attr('disabled', 'disabled').hide();
    $('#guardarPerfilLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    $.ajax({
        type: (elementoModificar) ? "PUT" : 'POST',
        url: window.MRM_USERS_API_URL + "/perfiles/" + ((elementoModificar) ? elementoModificar.idPerfil : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "idSistema": $('#idSistema').val(),
            "nombre": $('#nombre').val(),
            "descripcion": $('#descripcion').val(),
            "estatus": $('#estatus').val(),
            "menus": obtenerPermisosMenus()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            elementoModificar = null;
            limpiarFiltros();
            $('#perfil-modal').modal('hide');
            toast('info', 'Se ha guardado el perfil ' + res.nombre, 'Mi perfil');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 0)
                toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Usuarios API: Perfiles');
            else if (e.status == 400) {
                $('#nombre').focus();
                toast('warning', 'Ya existe un perfil con el nombre dado, escriba uno distinto.', 'Perfiles');
            } else toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Perfiles');
            console.error(e);
        },
        complete: function() {
            $('#guardarPerfil').removeAttr("disabled").show();
            $('#guardarPerfilLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

const eliminarPerfil = (e) => {
    e.preventDefault();
    $('#eliminarPerfil').attr('disabled', 'disabled').hide();
    $('#eliminarPerfilLoading').show();
    $('#cancelarEliminarPerfil').attr('disabled', 'disabled')

    $.ajax({
        type: "DELETE",
        url: window.MRM_USERS_API_URL + "/perfiles/" + $('#idPerfilEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            limpiarFiltros();
            $('#eliminar-perfil-modal').modal('hide');
            toast('info', 'Se ha eliminado el perfil', 'Perfiles');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                $('#eliminar-perfil-modal').modal('hide');
                limpiarFiltros();
            } else {
                toast('warning', 'No se pudo eliminar el perfil, intente más tarde.', 'Perfiles');
                console.error(e);
            }
        },
        complete: function() {
            $('#eliminarPerfil').removeAttr("disabled").show();
            $('#eliminarPerfilLoading').hide();
            $('#cancelarEliminarPerfil').removeAttr("disabled");
        }
    });
};