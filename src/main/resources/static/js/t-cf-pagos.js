$(function() {
    $('#guardarSeccion').show();
    obtenerFormasPagosTS(window.MRM_TS_GESTIONAR.idTramiteServicio, setFormasPagoTS);
    $('#fp-asignar').click(pfAsignarClick);
    $('#fp-quitar').click(pfQuitarClick);
    // textOnlyNumbers($("#montoCosto"));

    $('#montoCosto')
        .inputmask({
            alias: 'decimal',
            allowMinus: false,
            digits: 2,
            max: 9999999999.99,
            rightAlign: false
        });

    $('#elemento-form').submit(guardarTSCostosPagos);
    $('#tramiteTieneCosto').change(tramiteCostoChange);

    $('#idTipoCosto').change(onTipoCostoChange);

    initList();

    adminReadOnlyCostos();
});

var onTipoCostoChange = () => {
    const idTipoCosto = $('#idTipoCosto').val();
    //costo fijo
    if (idTipoCosto == 1) {
        $('#montoCosto').removeAttr('readonly').attr('required', 'required').focus();
        $('#descripcionCosto').attr('readonly', 'readonly').val('');
    } else if (idTipoCosto == 2) {
        $('#montoCosto').attr('readonly', 'readonly').removeAttr('required').val(0);
        $('#descripcionCosto').removeAttr('readonly');
    } else {
        $('#montoCosto').attr('readonly', 'readonly').removeAttr('required').val(0);
        $('#descripcionCosto').attr('readonly', 'readonly').removeAttr('required').val('');
    }
};

var adminReadOnlyCostos = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    const guardarSeccion = $('#guardarSeccion');
    if (tipoPermisoEditar && editablePorPerfil) {
        guardarSeccion.show();
    } else {
        guardarSeccion.remove();
        $('input,select,textarea,#fp-asignar,#fp-quitar').attr('disabled', 'disabled');
        $('.editar, .eliminar').addClass('disabled');

    }
};

var tramiteCostoChange = () => {
    const id = $('#tramiteTieneCosto').val();
    if (id == 1) {
        activarInputs();

    } else {
        desactivarInputs();
    }
};

var desactivarInputs = () => {
    $('#idTipoCosto').attr('disabled', 'disabled');
    $('#idTipoCosto').val(null);
    $('#montoCosto').attr('readonly', 'readonly').val('');
    $('#descripcionCosto').attr('readonly', 'readonly').val('');
    $('#dondePodraPagarse').attr('readonly', 'readonly').val('');
    $('#criteriosResolucion').attr('readonly', 'readonly').val('');


    $('#fp-asignar').attr('readonly', 'readonly');
    $('#fp-quitar').attr('readonly', 'readonly');
    fpDisponibles.option("disabled", true);
    fpSeleccionadas.option("disabled", true);

    setItemsToData(fpDisponibles, dataDisponibles, window.MRM_TS_FORMAS_PAGOS);
    setItemsToData(fpSeleccionadas, dataSeleccionadas, []);

};

var activarInputs = () => {
    $('#idTipoCosto').removeAttr('disabled').attr('required', 'required');
    // $('#montoCosto').removeAttr('readonly').attr('required', 'required');
    // $('#descripcionCosto').removeAttr('readonly').attr('required', 'required');
    $('#dondePodraPagarse').removeAttr('readonly').attr('required', 'required');
    $('#criteriosResolucion').removeAttr('readonly').attr('required', 'required');

    $('#fp-asignar').removeAttr('readonly').attr('required', 'required');
    $('#fp-quitar').removeAttr('readonly').attr('required', 'required');

    fpDisponibles.option("disabled", false);
    fpSeleccionadas.option("disabled", false);
};

var guardarTSCostosPagos = (e) => {
    e.preventDefault();
    $('#guardar').attr('disabled', 'disabled').hide();
    $('#guardarLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    const idsfp = $.map(dataSeleccionadas, (item) => { return item.idFormaPago }).join(',');

    $.ajax({
        type: 'POST',
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/costos-formas-pago',
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "tramiteTieneCosto": $('#tramiteTieneCosto').val() == 1,
            "idTipoCosto": $('#idTipoCosto').val(),
            "montoCosto": $('#montoCosto').val(),
            "descripcionCosto": $('#descripcionCosto').val(),
            "dondePodraPagarse": $('#dondePodraPagarse').val(),
            "criteriosResolucion": $('#criteriosResolucion').val(),
            "idsFormasPagos": idsfp
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardado la información de costos y formas de pago', 'Trámite/Servicio');
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Trámite/Servicio');
        },
        complete: function() {
            $('#guardar').removeAttr("disabled").show();
            $('#guardarLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

var pfAsignarClick = () => {
    let itemsToAdd = fpDisponibles.option("selectedItems");
    if (!$.isArray(itemsToAdd)) itemsToAdd = [];

    let selectedItems = fpSeleccionadas.option("items");
    if (!$.isArray(selectedItems)) selectedItems = [];

    let items = itemsToAdd.concat(selectedItems);
    let ids = $.map(items, (element) => { return element.idFormaPago; });

    items = $.grep(window.MRM_TS_FORMAS_PAGOS, function(item, i) {
        return $.inArray(item.idFormaPago, ids) != -1;
    });

    setItemsToData(fpSeleccionadas, dataSeleccionadas, items);

    items = fpDisponibles.option("items");
    ids = $.map(itemsToAdd, (element) => { return element.idFormaPago; });

    items = $.grep(items, function(item, i) {
        return $.inArray(item.idFormaPago, ids) == -1;
    });

    setItemsToData(fpDisponibles, dataDisponibles, items);
};

var pfQuitarClick = () => {
    let itemsToAdd = fpSeleccionadas.option("selectedItems");
    if (!$.isArray(itemsToAdd)) itemsToAdd = [];

    let selectedItems = fpDisponibles.option("items");
    if (!$.isArray(selectedItems)) selectedItems = [];

    let items = itemsToAdd.concat(selectedItems);
    let ids = $.map(items, (element) => { return element.idFormaPago; });

    items = $.grep(window.MRM_TS_FORMAS_PAGOS, function(item, i) {
        return $.inArray(item.idFormaPago, ids) != -1;
    });

    setItemsToData(fpDisponibles, dataDisponibles, items);

    items = fpSeleccionadas.option("items");
    ids = $.map(itemsToAdd, (element) => { return element.idFormaPago; });

    items = $.grep(items, function(item, i) {
        return $.inArray(item.idFormaPago, ids) == -1;
    });

    setItemsToData(fpSeleccionadas, dataSeleccionadas, items);
};

var setFormasPagoTipoCostos = (res, args) => {
    clearSelect($('#idTipoCosto'));
    res.tc.forEach(elemento => {
        $('#idTipoCosto').append(new Option(elemento.nombre, elemento.idTipoCosto));
    });

    if (window.MRM_TS_GESTIONAR) {
        if (args && args.tipoCosto) {
            $('#idTipoCosto').val(args.tipoCosto.idTipoCosto);
            onTipoCostoChange();
        }
    }

    res.cfp.forEach(element => {
        element.text = element.nombre;
    });

    window.MRM_TS_FORMAS_PAGOS = res.cfp;

    let selectedItems = [];
    let items = [];

    if (args) {
        if (args.formasPagos) {
            const ids = $.map(args.formasPagos, (element) => { return element.idFormaPago; });
            selectedItems = $.grep(res.cfp, function(item, i) {
                return $.inArray(item.idFormaPago, ids) != -1;
            });
            items = $.grep(res.cfp, function(item, i) {
                return $.inArray(item.idFormaPago, ids) == -1;
            });
        } else {
            items = res.cfp;
        }
    } else {
        items = res.cfp;
    }

    setItemsToData(fpDisponibles, dataDisponibles, items);
    setItemsToData(fpSeleccionadas, dataSeleccionadas, selectedItems);
};

var setItemsToData = (element, data, items) => {
    while (data.length) {
        data.pop();
    }
    if (items.length > 0)
        items.forEach(item => {
            data.push(item);
        });
    element.reload();
};

var setFormasPagoTS = (res) => {

    obtenerFormasPagosTipoCostos(setFormasPagoTipoCostos, res);

    $('#tramiteTieneCosto').val((res.tramiteTieneCosto) ? 1 : 0);
    $('#montoCosto').val(res.montoCosto);
    $('#descripcionCosto').val(res.descripcionCosto);
    $('#dondePodraPagarse').val(res.dondePodraPagarse);
    $('#criteriosResolucion').val(res.criteriosResolucion);

    if (!res.tramiteTieneCosto)
        desactivarInputs();
    else
        activarInputs();

    adminReadOnlyCostos();
};

var obtenerFormasPagosTS = (idTramiteServicio, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/" + idTramiteServicio + "/costos-formas-pago",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TS-Formas-Pagos');
            console.error(e);
        }
    });
};

var obtenerFormasPagosTipoCostos = (callback, args) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/costos-formas-pago",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res, args);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Formas-Pagos');
            console.error(e);
        }
    });
};

var dataDisponibles = [];
var dataSeleccionadas = [];
var initList = () => {
    fpDisponibles = $("#fpDisponibles").dxList({
        dataSource: dataDisponibles,
        height: 230,
        noDataText: '',
        showSelectionControls: true,
        selectionMode: "multiple"
    }).dxList("instance");

    fpSeleccionadas = $("#fpSeleccionadas").dxList({
        dataSource: dataSeleccionadas,
        noDataText: '',
        height: 230,
        showSelectionControls: true,
        selectionMode: "multiple"
    }).dxList("instance");
};