(function($) {
    let url = window.location.href;
    url = url.replace(window.MRM_REMTYS_APP_URL, '');
    const activeMenu = document.getElementById(url);
    if (activeMenu) {
        activeMenu.classList.add("active");
        const parent = activeMenu.parentElement.parentElement;
        if (parent.matches('li')) {
            parent.classList.add("open");
            parent.classList.add("active");
        }
    }
    var htmlClass = window.MRM_REMTYS_SETTINGS.themeSettings.htmlClass;
    document.getElementsByTagName('html')[0].classList.add(htmlClass);

    var settings = window.MRM_REMTYS_SETTINGS.themeSettings.themeOptions;
    initApp.pushSettings(settings);
    var htmlClass = window.MRM_REMTYS_SETTINGS.themeSettings.htmlClass;

    if (htmlClass.startsWith("root-text")) {
        $('[data-class]').removeClass('active');
        $('[data-class="' + htmlClass + '"]').addClass('active');
        $('[data-class-r="' + htmlClass + '"]').attr('checked', 'checked');
    }

})(jQuery, window, document);

$(function() {
    obtenerUsuario();
    $.ajaxSetup({
        error: function(jqXHR, textStatus, errorThrown) {
            if (jqXHR.status == 403) {
                window.location = '/'
            } else {
                if (textStatus != 'abort')
                    toast('error', textStatus, 'Remtys');
            }
        }
    });



});



const setPermisosMenu = (idMenu, permisos) => {
    const menus = window.MRM_USUARIO.perfil.menus;
    const menu = getMenuById(idMenu, menus, null);
    if (menu != null) {
        if (menu.permisosMenu) {
            const permisosEnMenu = [];
            menu.permisosMenu.forEach(pm => { permisosEnMenu.push(pm.cssClase); });
            permisos.forEach(permiso => {
                if ($.inArray(permiso, permisosEnMenu) == -1) {
                    $(permiso).remove();
                } else {
                    $(permiso).show();
                }
            });

        } else {
            //Remueve todos los permisos
            permisos.forEach(permiso => { $(permiso).remove(); });
        }
    }
};

const getMenuById = (idMenu, menus, menu) => {
    for (let index = 0; index < menus.length; index++) {
        const item = menus[index];
        if (item.idMenu == idMenu)
            return item;
        else {
            if (item.menus)
                menu = getMenuById(idMenu, item.menus, menu);
            if (menu != null) return menu;
        }
    }
    return null;
};


const obtenerDependencias = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/dependencias",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Dependencias');
            console.error(e);
        }
    });
};

const obtenerDependenciasUsuario = (idUsuario, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/usuario/" + idUsuario + "/dependencias",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Dependencias');
            console.error(e);
        }
    });
};


const enviarNotificacionEmail = (to, subject, fromTitle, template, callback) => {
    const url = window.MRM_NOTIFICATIONS_API_URL + '/email?to=' + to + '&subject=' + subject + '&fromTitle=' + fromTitle;
    $.ajax({
        type: 'POST',
        url: url,
        processData: false,
        contentType: 'text/plain',
        data: template,
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            console.error(e);
        }
    });
};

const obtenerUsuario = () => {
    $.ajax({
        type: "GET",
        url: window.MRM_USERS_API_URL + "/usuarios/" + window.MRM_USUARIO.idUsuario,
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            setDatosUsuario(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Usuarios API:Usuarios');
            console.error(e);
        }
    });
};

const setDatosUsuario = (res) => {
    window.MRM_USER = res;
    var urlFoto = res.urlFoto;
    if (!urlFoto)
        urlFoto = window.MRM_REMTYS_APP_URL + '/img/no-user.jpg';
    $('.mp-usuarioFoto').attr("src", urlFoto);
    $('.mp-usuarioFullName').text(res.fullname);
    $('.mp-usuarioPerfil').text(res.perfil.nombre);
    $('.mp-usuarioCorreo').text(res.correo);

    //Perfil
    $('#mp-nombrePropio').val(res.nombrePropio);
    $('#mp-apellidoPaterno').val(res.apellidoPaterno);
    $('#mp-apellidoMaterno').val(res.apellidoMaterno);
    $('#mp-nombreUsuario').val(res.nombreUsuario);
    $('#mp-correo').val(res.correo);
    $('#mp-celular').val(res.celular);
    $('#mp-nombrePerfil').val(res.perfil.nombre);
    $('#mp-nombreSistema').val(res.perfil.sistema.nombre);
};

const toast = (type, msg, title) => {
    toastr[type](msg, title, {
        positionClass: 'toast-top-right',
        closeButton: true,
        progressBar: false,
        preventDuplicates: true,
        newestOnTop: true,
        rtl: false
    });
}

const clearSelect = (select, selectionText, selectionValue) => {
    selectionText = selectionText || 'Selecciona una opción';
    if (selectionValue == undefined) selectionValue = '';
    $(select).empty();
    $(select).append(new Option(selectionText, selectionValue, true));
};

const textOnlyNumbers = (elemento) => {
    $(elemento).keydown(
        function(event) {
            if (event.shiftKey == true) {
                event.preventDefault();
            }

            if ((event.keyCode >= 48 && event.keyCode <= 57) ||
                (event.keyCode >= 96 && event.keyCode <= 105) ||
                event.keyCode == 8 || event.keyCode == 9 ||
                event.keyCode == 37 || event.keyCode == 39 ||
                event.keyCode == 46) {

            } else {
                event.preventDefault();
            }
        });
}


const obtenerMiMunicipio = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/mi-municipio",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Mi-Municipio');
            console.error(e);
        }
    });
};

const obtenerTiposRemtys = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/tipos-remtys",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TiposRemtys');
            console.error(e);
        }
    });
};

const obtenerCategorias = (idTiposRemtys, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/categorias",
        data: {
            idtr: idTiposRemtys
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
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Categorías');
            console.error(e);
        }
    });
};

const obtenerTRVS = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/recursos/tipos-visibilidad",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TiposRecursos');
            console.error(e);
        }
    });
};


const getIconFile = (filename) => {

    var icon = 'generic.png';
    if (filename) {
        var ext = filename.split('.').pop();
        switch (ext.toLowerCase()) {
            case 'mp4':
            case 'mpg':
            case 'mpeg':
            case 'avi':
                icon = 'video.png';
                break;
            case 'png':
            case 'jpg':
            case 'tiff':
            case 'psd':
            case 'svg':
            case 'ai':
            case 'eps':
                icon = 'image.png';
                break;
            case 'doc':
            case 'docx':
                icon = 'doc.png';
                break;
            case 'ppt':
            case 'pptx':
                icon = 'presentation.png';
                break;
            case 'xls':
            case 'xlsx':
                icon = 'xls.png';
                break;
            case 'pdf':
                icon = 'pdf.png';
                break;
        }
    }
    return icon;
}