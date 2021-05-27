$(function() {
    $('#guardarSeccion').show();
    obtenerInfoAdicional((res) => {
        htmlEditor.option('value', res.infoAdicional);
    });

    initHtmlEditor();

    $('#guardar').click(() => {

        var data = $("#guardar").data();
        let htmlText = htmlEditor.option("value");

        if ($.trim(htmlText).length == 0) {
            if (data.seccionActual.requerida == 1) {
                toast('info', 'Primero escriba la información adicional.', 'Tramite/Servicio');
                return;
            } else {
                guardar('&nbsp;');
            }
        } else {
            guardar(htmlText);
        }
    });
    adminReadOnlyInfoAdicional();
});

var adminReadOnlyInfoAdicional = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    //tiene permiso de edicion el usuario?
    if (tipoPermisoEditar && editablePorPerfil) {
        $('#guardarSeccion').show();
    } else {
        $('#guardarSeccion').remove();
        htmlEditor.option('disabled', true);
    }
};


var htmlEditor = null;
var initHtmlEditor = () => {
    htmlEditor = $(".html-editor").dxHtmlEditor({
        height: 300,
        toolbar: {
            items: [
                "undo", "redo", "separator",
                {
                    formatName: "size",
                    formatValues: ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"]
                },
                {
                    formatName: "font",
                    formatValues: ["Arial", "Courier New", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Verdana"]
                },
                "separator",
                "bold", "italic", "strike", "separator",
                "alignLeft", "alignCenter", "alignRight", "alignJustify", "separator",
                "color", "background", {
                    widget: "dxButton",
                    options: {
                        text: "Recursos",
                        stylingMode: "text",
                        onClick: function() {
                            showRecursos();
                        }
                    }
                }
            ]
        },
        mediaResizing: {
            enabled: true
        }
    }).dxHtmlEditor("instance");
};

var showRecursos = () => {
    let html = '';
    recursosModal.show((res) => {
        if (res) {
            if (res.tipoRecurso.idTipoRecurso == 1) //imagen
                html = '<p><img src="' + res.url + '" alt="' + res.descripcion + '"></p>';
            else
                html = '<p><a href="' + res.url + '" rel="noopener noreferrer" target="_blank">' + res.descripcion + '</a><p>';
            let current = htmlEditor.option("value");
            current += html;
            htmlEditor.option("value", current);
        }
    });
};

var guardar = (htmlText) => {
    $('#guardarElemento').attr('disabled', 'disabled').hide();
    $('#guardarElementoLoading').show();
    $('#cancelar').attr('disabled', 'disabled')
    $.ajax({
        type: 'POST',
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/info-adicional',
        processData: false,
        contentType: 'text/plain',
        data: htmlText,
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado la información adicional', 'Tramite/Servicio');
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            toast('warning', 'No se pudo guardar la información adicional, intente más tarde.', 'Tramite/Servicio');
            console.error(e);

        },
        complete: function() {
            $('#guardarElemento').removeAttr("disabled").show();
            $('#guardarElementoLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

var obtenerInfoAdicional = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/info-adicional',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:InformacionAdicional');
            console.error(e);
        }
    });
};