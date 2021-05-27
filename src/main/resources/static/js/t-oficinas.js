$(function() {
    $('#guardarSeccion').show();
    textOnlyNumbers($("#codigoPostal"));
    textOnlyNumbers($("#lada"));
    textOnlyNumbers($("#extension"));
    textOnlyNumbers($("#fax"));
    $('#elemento-form').submit(guardar);
    $('#eliminar-elemento-form').submit(eliminar);

    $.get(window.MRM_REMTYS_APP_URL + '/templates/cardOficina.html', function(data) {
        cardTemplate = data;
        loadCards(showCards);
    });

    $('#guardar').click(() => {

        var idsInOrder = $("#jqCards").sortable("toArray");
        if (idsInOrder.length > 0)
            setOrderItems(idsInOrder.join(','));
        else {
            var data = $("#guardar").data();
            if (data.seccionActual.requerida == 1)
                toast('info', 'Primero agregre oficinas.', 'TramiteServicio');
            else {
                let idSeccionCompletada = 9;
                if (MRM_TS_GESTIONAR.tipoRemtys.idTipoRemtys == 2)
                    idSeccionCompletada = 20;
                $("#guardarSeccion").trigger("sectionNoSaved", { idSeccionTys: idSeccionCompletada });
            }
        }
    });

    $("#jqCards").sortable({
        placeholder: "ui-state-highlight"
    });
    adminReadOnlyOficinas();
});

var adminReadOnlyOficinas = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    const guardarSeccion = $('#guardarSeccion');
    const nuevoOficinaBtn = $('.nuevo-oficina-btn');
    if (tipoPermisoEditar && editablePorPerfil) {
        guardarSeccion.show();
        nuevoOficinaBtn.show();
    } else {
        guardarSeccion.remove();
        nuevoOficinaBtn.remove();
        $('textarea').attr('disabled', 'disabled');
        $('.editar, .eliminar').remove();
    }
};

var eliminarOficinaClick = (data) => {
    $('#idEliminar').val(data.idOficinaTys);
    $('#elementoEliminar').text(data.numeroOrden);
    $('#eliminar-elemento-modal').modal('show');
};

var editarOficinaClick = (data) => {
    $('#nombre').val(data.nombre);
    $('#titular').val(data.titular);
    $('#horariosAtencion').val(data.horariosAtencion);
    $('#colonia').val(data.colonia);
    $('#calle').val(data.calle);
    $('#codigoPostal').val(data.codigoPostal);
    $('#numExterior').val(data.numExterior);
    $('#numInterior').val(data.numInterior);
    $('#lada').val(data.lada);
    $('#telefonos').val(data.telefonos);
    $('#extension').val(data.extension);
    $('#fax').val(data.fax);
    $('#email').val(data.email);

    showModal(data);
};

var Oficinas = null;
var showCards = (res) => {
    $('#jqCards').html('');
    Oficinas = res;
    if ($.isArray(res)) {
        res.forEach(item => {
            const htmlCard = $(cardTemplate);
            htmlCard.attr('id', item.idOficinaTys);
            htmlCard.find('.orden').text(item.numeroOrden);

            htmlCard.find('.nombre').text(item.nombre);
            htmlCard.find('.titular').text(item.titular);

            const elementEliminar = htmlCard.find('.eliminar');
            elementEliminar.off('click');
            elementEliminar.on('click', function() {
                eliminarOficinaClick(item);
            });

            const elementEditar = htmlCard.find('.editar');
            elementEditar.off('click');
            elementEditar.on('click', function() {
                editarOficinaClick(item);
            });

            htmlCard.appendTo($('#jqCards'));
        });
    }
    adminReadOnlyOficinas();
};

var setOrderItems = (itemsIds) => {
    $.ajax({
        type: "POST",
        data: {
            'ids[]': itemsIds
        },
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/oficinas/orden',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardardo la sección de oficinas.', 'TramiteServicio');
            showCards(res.oficinas);
            $("#guardarSeccion").trigger("sectionSaved", { idSeccionCompletada: res.idSeccionCompletada });
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Oficinas:Orden');
            console.error(e);
        }
    });
};

var cardTemplate = null;
var loadCards = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/oficinas',
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Oficinas');
            console.error(e);
        }
    });
}

var elementoModificar = null;
var guardar = (e) => {
    e.preventDefault();
    $('#guardarElemento').attr('disabled', 'disabled').hide();
    $('#guardarElementoLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    const url = window.MRM_REMTYS_API_URL + '/ts/' + MRM_TS_GESTIONAR.idTramiteServicio + '/oficinas';

    const pointFeature = capaHUbicar.getSource().getFeatures()[0];
    const center = pointFeature.getGeometry().getCoordinates();
    const point = ol.proj.toLonLat(center);

    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: url + ((elementoModificar) ? ('/' + elementoModificar.idOficinaTys) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "nombre": $('#nombre').val(),
            "titular": $('#titular').val(),
            "horariosAtencion": $('#horariosAtencion').val(),
            "colonia": $('#colonia').val(),
            "calle": $('#calle').val(),
            "codigoPostal": $('#codigoPostal').val(),
            "numExterior": $('#numExterior').val(),
            "numInterior": $('#numInterior').val(),
            "x": point[0],
            "y": point[1],
            "lada": $('#lada').val(),
            "telefonos": $('#telefonos').val(),
            "extension": $('#extension').val(),
            "fax": $('#fax').val(),
            "email": $('#email').val()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            elementoModificar = null;
            loadCards(showCards);
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado la oficina', 'Oficina');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                if (e.responseJSON.code == 'no_existe_oficina') {
                    toast('info', 'La oficina ya no existe, actualice su página.', 'Oficinas');
                } else if (e.responseJSON.code == 'ya_existe_oficina') {
                    toast('info', 'La oficina con el nombre dado ya existe, escriba uno distinto.', 'Oficinas');
                }
            } else
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Oficinas');
            console.error(e);

        },
        complete: function() {
            $('#guardarElemento').removeAttr("disabled").show();
            $('#guardarElementoLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

var showModal = (elemento) => {
    obtenerMiMunicipio((mimunicipio) => {
        if (!mimunicipio.claveMun) {
            toast('info', 'Primero establesca los valores para Mi municipio.', 'Oficinas');
            return;
        }

        if (elemento) {
            elementoModificar = elemento;
            $('#elemento-modal-title').text('Modificar oficina');
        } else {
            limpiarModal();
            elementoModificar = null;
            $('#elemento-modal-title').text('Nueva oficina');
        }
        $('#claveMun').val(mimunicipio.claveMun);
        $('#nombreMunicipio').val(mimunicipio.municipio.nombre);
        $('#elemento-modal').modal('show');
        setTimeout(function() {
            $('#nombreOficina').focus();
            var x = mimunicipio.municipio.x;
            var y = mimunicipio.municipio.y;
            if (elementoModificar != null) {
                x = elementoModificar.x;
                y = elementoModificar.y;
            }
            loadMap(parseFloat(x), parseFloat(y));
        }, 300);
    });
};

var limpiarModal = () => {
    $("#elemento-form :input:text").val('');
};

var eliminar = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled')

    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + '/ts/' + window.MRM_TS_GESTIONAR.idTramiteServicio + '/oficinas/' + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            loadCards(showCards);
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado el oficina', 'Oficina');
        },
        complete: function() {
            $('#eliminar').removeAttr("disabled").show();
            $('#eliminarLoading').hide();
            $('#cancelarEliminar').removeAttr("disabled");
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            toast('warning', 'No se pudo eliminar la oficina, intente más tarde.', 'Oficinas');
            console.error(e)
        }
    });
};


var mapa = null;

var loadMap = (x, y) => {
    if (mapa == null) {
        mapa = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                }),
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([x, y]),
                zoom: 10
            })
        });
        iniciarCapaHUbicar(x, y);
    } else {
        setCoordinatesToPin(ol.proj.fromLonLat([x, y]));
        mapa.getView().setCenter(ol.proj.fromLonLat([x, y]));
        mapa.getView().setZoom(10);
    }
};

capaHUbicar = null;

function iniciarCapaHUbicar(x, y) {
    var estilo = obtenerEstiloIcono('/img/pin.png', 32);

    capaHUbicar = new ol.layer.Vector({
        style: estilo,
        source: new ol.source.Vector({})
    });
    capaHUbicar.setZIndex(999);

    mapa.addLayer(capaHUbicar);
    capaHUbicar.getSource().clear(true);

    var feature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([x, y]))
    });
    feature.set('id', 'PIN');
    feature.set('tipo', 'PIN');

    capaHUbicar.getSource().addFeature(feature);
    agregarDragMapa();
    clickMapaHUbicar = mapa.on('singleclick', (args) => {
        setCoordinatesToPin(args.coordinate)
    });
}

function obtenerEstiloIcono(icono, alto) {
    alto = alto || 24;
    var estilo = null;
    estilo = new ol.style.Style({
        image: new ol.style.Icon({
            anchor: [0.5, alto],
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            opacity: 1,
            src: icono
        })
    });
    return estilo;
}


var clickMapaHUbicar = null;
var dragInteraction = null;
var dragFeature = null;
var dragCoordinate = null;
var dragCursor = 'pointer';
var dragPrevCursor = null;

function agregarDragMapa() {
    if (dragInteraction === null) {
        dragInteraction = new ol.interaction.Pointer({
            handleDownEvent: function(event) {

                var feature = mapa.forEachFeatureAtPixel(event.pixel,
                    function(feature, layer) {
                        return feature;
                    });

                if (feature && feature.get('id') === 'PIN') {
                    dragCoordinate = event.coordinate;
                    dragFeature = feature;
                    return true;
                }

                return false;
            },
            handleDragEvent: function(event) {
                var deltaX = event.coordinate[0] - dragCoordinate[0];
                var deltaY = event.coordinate[1] - dragCoordinate[1];

                var geometry = dragFeature.getGeometry();
                geometry.translate(deltaX, deltaY);

                dragCoordinate[0] = event.coordinate[0];
                dragCoordinate[1] = event.coordinate[1];
            },
            handleMoveEvent: function(event) {
                if (dragCursor) {
                    var map = event.map;

                    var feature = mapa.forEachFeatureAtPixel(event.pixel,
                        function(feature, layer) {
                            return feature;
                        });

                    var element = event.map.getTargetElement();

                    if (feature) {
                        if (element.style.cursor != dragCursor) {
                            dragPrevCursor = element.style.cursor;
                            element.style.cursor = dragCursor;
                        }
                    } else if (dragPrevCursor !== undefined) {
                        element.style.cursor = dragPrevCursor;
                        dragPrevCursor = undefined;
                    }
                }
            },
            handleUpEvent: function(event) {
                dragCoordinate = null;
                dragFeature = null;
                return false;
            }
        });

        mapa.addInteraction(dragInteraction);

    }
}

function setCoordinatesToPin(coordinate) {
    capaHUbicar.getSource().clear(true);
    var feature = new ol.Feature({
        geometry: new ol.geom.Point(coordinate)
    });

    feature.set('id', 'PIN');
    feature.set('tipo', 'PIN');
    capaHUbicar.getSource().addFeature(feature);
}