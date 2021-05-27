$(function() {
    $.ajaxSetup({
        error: function(jqXHR, textStatus, errorThrown) {

            if (jqXHR.status == 403) {
                window.location = window.MRM_REMTYS_APP_URL;
            } else {
                if (textStatus != 'abort')
                    toast('error', textStatus, 'Remtys');
            }
        }
    });

    obtenerMiMunicipio((res) => {
        if (res) {
            if (res.urlFondoLogin) {
                $('.body').css('background-image', 'url(' + res.urlFondoLogin + ')');
            }
            if (res.urlFaveIcon) {
                $('#icono').attr('href', res.urlFaveIcon);
            }
        }
    });
});

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


const obtenerDependencias = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/p/dependencias",
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = window.MRM_REMTYS_APP_URL;
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Dependencias');
            console.error(e);
        }
    });
};


const obtenerMiMunicipio = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/p/mi-municipio",
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            console.error(e);
        }
    });
};