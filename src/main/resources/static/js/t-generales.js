$(function() {
    textOnlyNumbers($('#whatsAppAtencion'));
    textOnlyNumbers($('#telefonoAtencion1'));
    textOnlyNumbers($('#telefonoAtencion2'));
    clearSelect($('#categoria'), null, null);
    clearSelect($('#idDependenciaResponsable'));

    $('#elemento-form').submit(guardarTSGenerales);

    $('#tysEnLinea').change(() => {
        if ($('#tysEnLinea').is(':checked')) {
            $('#urlTysEnLinea').removeAttr('readonly').attr('required', 'required');
        } else {
            $('#urlTysEnLinea').removeAttr('required').attr('readonly', 'readonly').val('');
        }
    });

    $('#tysEnApp').change(() => {
        if ($('#tysEnApp').is(':checked')) {
            $('#urlTysAndroid').removeAttr('readonly').attr('required', 'required');
            $('#urlTysIphone').removeAttr('readonly');
        } else {
            $('#urlTysAndroid').removeAttr('required').attr('readonly', 'readonly').val('');
            $('#urlTysIphone').attr('readonly', 'readonly').val('');
        }
    });

    $('#inmediato').change(() => {
        if ($('#inmediato').is(':checked')) {
            $("#idTipoDuracionTys").val($("#idTipoDuracionTys option:first").val());
            $("#idTipoDiasTys").val($("#idTipoDiasTys option:first").val());

            $('#plazoMaximoRespuesta').removeAttr('required').attr('disabled', 'disabled').val('');
            $('#idTipoDuracionTys').removeAttr('required').attr('disabled', 'disabled');
            $('#idTipoDiasTys').removeAttr('required').attr('disabled', 'disabled');

        } else {
            $('#plazoMaximoRespuesta').removeAttr('disabled').attr('required', 'required');
            $('#idTipoDuracionTys').removeAttr('disabled').attr('required', 'required');
            $('#idTipoDiasTys').removeAttr('disabled').attr('required', 'required');
        }
    });

    $('#idTipoDuracionTys').change(() => {
        //días
        if ($('#idTipoDuracionTys').val() == 1) {
            $('#idTipoDiasTys').removeAttr('disabled').attr('required', 'required');
        } else {
            $('#idTipoDiasTys').removeAttr('required').attr('disabled', 'disabled');
            $("#idTipoDiasTys").val($("#idTipoDiasTys option:first").val());
        }
    });

    textOnlyNumbers($("#plazoMaximoRespuesta"));
    $('#tiposRemtys').change(tiposRemtysChange);
    obtenerCatalogos(setDataCatalogos);
    if (window.MRM_TS_GESTIONAR) {
        $('#idDependencia').val(MRM_TS_GESTIONAR.dependencia.idDependencia);
        $('#dependencia').val(MRM_TS_GESTIONAR.dependencia.nombre);

        if (MRM_TS_GESTIONAR.dependenciaResponsable) {
            $('#idDependencia_ua').val(MRM_TS_GESTIONAR.dependenciaResponsable.idDependencia)
            $('#dependencia_ua').val(MRM_TS_GESTIONAR.dependenciaResponsable.nombre)
        }

        $('#tramiteLoRealiza').val(MRM_TS_GESTIONAR.seccionGeneralesTys.tramiteLoRealiza);
        $('#nombreTramite').val(MRM_TS_GESTIONAR.seccionGeneralesTys.nombreTramite);
        $('#resumen').val(MRM_TS_GESTIONAR.seccionGeneralesTys.resumen);

        const tysEnLinea = MRM_TS_GESTIONAR.seccionGeneralesTys.tysEnLinea;
        $('#tysEnLinea').attr('checked', tysEnLinea);
        if (tysEnLinea)
            $('#urlTysEnLinea').removeAttr('readonly').attr('required', 'required');
        $('#urlTysEnLinea').val(MRM_TS_GESTIONAR.seccionGeneralesTys.urlTysEnLinea);

        const tysEnApp = MRM_TS_GESTIONAR.seccionGeneralesTys.tysEnApp;
        $('#tysEnApp').attr('checked', tysEnApp);
        if (tysEnApp) {
            $('#urlTysAndroid').removeAttr('readonly').attr('required', 'required');
            $('#urlTysIphone').removeAttr('readonly');
        }
        $('#urlTysAndroid').val(MRM_TS_GESTIONAR.seccionGeneralesTys.urlTysAndroid);
        $('#urlTysIphone').val(MRM_TS_GESTIONAR.seccionGeneralesTys.urlTysIphone);

        $('#whatsAppAtencion').val(MRM_TS_GESTIONAR.seccionGeneralesTys.whatsAppAtencion);
        $('#telefonoAtencion1').val(MRM_TS_GESTIONAR.seccionGeneralesTys.telefonoAtencion1);
        $('#telefonoAtencion2').val(MRM_TS_GESTIONAR.seccionGeneralesTys.telefonoAtencion2);
        $('#horariosDeAtencion').val(MRM_TS_GESTIONAR.seccionGeneralesTys.horariosDeAtencion);
        $('#correoAtencion').val(MRM_TS_GESTIONAR.seccionGeneralesTys.correoAtencion);
        $('#inmediato').attr('checked', MRM_TS_GESTIONAR.seccionGeneralesTys.inmediato);

        $('#plazoMaximoRespuesta').val(MRM_TS_GESTIONAR.seccionGeneralesTys.plazoMaximoRespuesta);


        $('#documentoQueObtiene').val(MRM_TS_GESTIONAR.seccionGeneralesTys.documentoQueObtiene);
        $('#fundamentoLegal').val(MRM_TS_GESTIONAR.seccionGeneralesTys.fundamentoLegal);
        $('#vigenciaDocumento').val(MRM_TS_GESTIONAR.seccionGeneralesTys.vigenciaDocumento);
        $('#casosRealizar').val(MRM_TS_GESTIONAR.seccionGeneralesTys.casosRealizar);

        $('#ts-generales-actions-content').hide();

        $('#inmediato').change();

    }

    adminReadOnlyGenerales();
});

var adminReadOnlyGenerales = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    //tiene permiso de edicion el usuario?
    if (tipoPermisoEditar && editablePorPerfil) {
        $('#guardarSeccion').show();
    } else {
        $('#guardarSeccion').remove();
        $('input,select,textarea').attr('disabled', 'disabled');
        $('#dep-seleccionar').remove();
    }
};



var showDependencias = () => {
    obtenerDependenciasUsuario(window.MRM_USUARIO.idUsuario, function(res) {
        const enabled = $.map(res, function(dep) {
            return dep.idDependencia;
        });
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
            $('#idDependencia_ua').val(null);
            $('#dependencia_ua').val('');
        }, dependencias, 'single', enabled);
    });
};

var showDependenciasUnidadAdmin = () => {

    if (!$('#idDependencia').val()) {
        toast('info', 'Primero seleccione una Dependencia u organización', 'Tramite/Servicio');
        return;
    }

    obtenerDependenciasUsuario(window.MRM_USUARIO.idUsuario, function(res) {

        const enabled = $.map(res, function(dep) {
            return dep.idDependencia;
        });
        const dependencia = parseInt($('#idDependencia').val());
        let dependenciaSelect = $('#idDependencia_ua').val();
        if (dependenciaSelect)
            dependenciaSelect = [parseInt(dependenciaSelect)];

        depmodal.show((res) => {
            if (res.length == 0) {
                $('#idDependencia_ua').val(null);
                $('#dependencia_ua').val('');
            } else {
                const dependencia = res[0];
                $('#idDependencia_ua').val(dependencia.idDependencia);
                $('#dependencia_ua').val(dependencia.nombre);
            }
        }, dependenciaSelect, 'single', enabled, false, true, dependencia);
    });
};


var tiposRemtysChange = () => {
    clearSelect($('#categoria'), null, null);
    const idTiposRemtys = $('#tiposRemtys').val();
    if (idTiposRemtys) {
        obtenerCategorias(idTiposRemtys, (res) => {
            res.content.forEach(elemento => {
                $('#categoria').append(new Option(elemento.nombre, elemento.idCategoria));
            });
            if (window.MRM_TS_GESTIONAR && idTiposRemtys == MRM_TS_GESTIONAR.categoria.tipoRemtys.idTipoRemtys) {
                $('#categoria').val(MRM_TS_GESTIONAR.categoria.idCategoria);
            }
        });
    }
};


var setDataCatalogos = (res) => {
    clearSelect($('#tiposRemtys'));
    clearSelect($('#idTipoDuracionTys'));
    clearSelect($('#idTipoDiasTys'));

    res.tiposDuracion.forEach(elemento => {
        $('#idTipoDuracionTys').append(new Option(elemento.nombre, elemento.idTipoDuracionTys));
    });

    res.tiposDias.forEach(elemento => {
        $('#idTipoDiasTys').append(new Option(elemento.nombre, elemento.idTipoDiasTys));
    });

    res.tiposRemtys.forEach(elemento => {
        $('#tiposRemtys').append(new Option(elemento.nombre, elemento.idTipoRemtys));
    });

    if (window.MRM_TS_GESTIONAR) {
        $('#tiposRemtys').val(window.MRM_TS_GESTIONAR.tipoRemtys.idTipoRemtys);
        tiposRemtysChange();
        if (window.MRM_TS_GESTIONAR.seccionGeneralesTys.inmediato === false) {
            $('#idTipoDuracionTys').val(window.MRM_TS_GESTIONAR.seccionGeneralesTys.tipoDuracionTys.idTipoDuracionTys);
            $('#idTipoDuracionTys').change();
            //dias
            if (window.MRM_TS_GESTIONAR.seccionGeneralesTys.tipoDuracionTys.idTipoDuracionTys == 1) {
                $('#idTipoDiasTys').val(window.MRM_TS_GESTIONAR.seccionGeneralesTys.tipoDiasTys.idTipoDiasTys);
            }
        }
    }
};

var obtenerCatalogos = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/generales/catalogos",
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


var guardarTSGenerales = (e) => {
    e.preventDefault();
    $('#guardar').attr('disabled', 'disabled').hide();
    $('#guardarLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    var url = null;
    if (window.MRM_TS_GESTIONAR)
        url = window.MRM_REMTYS_API_URL + "/ts/" + MRM_TS_GESTIONAR.idTramiteServicio + "/generales";
    else
        url = window.MRM_REMTYS_API_URL + "/ts";

    $.ajax({
        type: (window.MRM_TS_GESTIONAR) ? 'PUT' : 'POST',
        url: url,
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "idTipoRemtys": $('#tiposRemtys').val(),
            "idCategoria": $('#categoria').val(),
            "idDependencia": $('#idDependencia').val(),
            "idDependenciaResponsable": $('#idDependencia_ua').val(),
            "idEstatusTys": 1,
            "nombreTramite": $('#nombreTramite').val(),
            "tramiteLoRealiza": $('#tramiteLoRealiza').val(),
            "resumen": $('#resumen').val(),
            "tysEnLinea": $('#tysEnLinea').is(':checked'),
            "urlTysEnLinea": $('#urlTysEnLinea').val(),
            "tysEnApp": $('#tysEnApp').is(':checked'),
            "urlTysAndroid": $('#urlTysAndroid').val(),
            "urlTysIphone": $('#urlTysIphone').val(),
            "whatsAppAtencion": $('#whatsAppAtencion').val(),
            "telefonoAtencion1": $('#telefonoAtencion1').val(),
            "telefonoAtencion2": $('#telefonoAtencion2').val(),
            "horariosDeAtencion": $('#horariosDeAtencion').val(),
            "correoAtencion": $('#correoAtencion').val(),
            "inmediato": $('#inmediato').is(':checked'),
            "plazoMaximoRespuesta": $('#plazoMaximoRespuesta').val(),
            "idTipoDuracionTys": $('#idTipoDuracionTys').val(),
            "idTipoDiasTys": $('#idTipoDiasTys').val(),
            "documentoQueObtiene": $('#documentoQueObtiene').val(),
            "fundamentoLegal": $('#fundamentoLegal').val(),
            "vigenciaDocumento": $('#vigenciaDocumento').val(),
            "casosRealizar": $('#casosRealizar').val()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (!window.MRM_TS_GESTIONAR)
                location.href = window.MRM_REMTYS_APP_URL + '/tramites-servicios';
            else {
                MRM_TS_GESTIONAR = res;
            }
            toast('info', 'Se ha guardado la información', 'Trámite/Servicio');
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                if (e.responseJSON.code == 'ya_existe') {
                    $('#nombreTramite').focus();
                    toast('warning', 'Ya existe un trámite/servicio con el nombre dado, escriba uno distinto.', 'Trámite/Servicio');
                } else {
                    toast('warning', e.responseJSON.message, 'Trámite/Servicio');
                }
            } else {
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Trámite/Servicio');
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