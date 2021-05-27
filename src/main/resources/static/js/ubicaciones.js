$(function() {
    loadCards();
    textOnlyNumbers($("#codigoPostal"));
    $('#elemento-form').submit(guardar);
    $('#eliminar-elemento-form').submit(eliminar);
});
var mapa = null;

const loadMap = (x, y) => {
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

const dirChanged = () => {
    if (elementoModificar) return;
    let dir = '';

    const calle = $.trim($('#calle').val());
    const colonia = $.trim($('#colonia').val());
    const codigoPostal = $.trim($('#codigoPostal').val());
    const numExterior = $.trim($('#numExterior').val());
    const numInterior = $.trim($('#numInterior').val());

    dir += calle;

    if (dir.length > 0)
        dir += ' ';
    dir += numExterior;

    if (dir.length > 0)
        dir += ' ';
    dir += numInterior;

    if (dir.length > 0)
        dir += ' ';
    dir += colonia;

    if (dir.length > 0)
        dir += ' ';
    dir += codigoPostal;

    $('#direccionAMostrar').val(dir);

};

const loadCards = () => {
    $("#jqCards")
        .jqCards({
            url: window.MRM_REMTYS_API_URL + "/ubicaciones",
            datatype: "json",
            data: {},
            urlTemplateCard: 'templates/cardUbicacion.html',
            selectorFilterControl: 'panelFiltro',
            filterControl: {
                layoutFilter: [{
                    selector: '#f-colonia',
                    property: 'co',
                    controlType: jqCards.controlType.InputText
                }, {
                    selector: '#f-calle',
                    property: 'ca',
                    controlType: jqCards.controlType.InputText
                }]
            },
            layoutCard: [{
                    selector: '.eliminar',
                    event: 'click',
                    eventFunction: function(elemento) {
                        $('#idEliminar').val(elemento.idUbicacion);
                        $('#elementoEliminar').text(elemento.nombre);
                        $('#eliminar-elemento-modal').modal('show');
                    }
                },
                {
                    selector: '.editar',
                    event: 'click',
                    eventFunction: function(obj) {
                        $('#nombre').val(obj.nombre);
                        $('#colonia').val(obj.colonia);
                        $('#calle').val(obj.calle);
                        $('#direccionAMostrar').val(obj.direccionAMostrar);
                        $('#codigoPostal').val(obj.codigoPostal);
                        $('#numExterior').val(obj.numExterior);
                        $('#numInterior').val(obj.numInterior);
                        showModal(obj);
                    }
                }
            ],
            numCards: 10,
            preloadCard: function(data, card) {
                card.find('.nombre').text(data.nombre);
                card.find('.direccionAMostrar').text(data.direccionAMostrar);

                return card;
            },
            initLoadCards: function() {
                //  $(".preloader-background").show();
            },
            loadCardsComplete: function() {
                setPermisosMenu(6, ['.eliminar', '.editar', '.agregar']);
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
    $("#jqCards").jqCards('cleanFilter');
    $("#jqCards").jqCards('reload');
}

var elementoModificar = null;
const showModal = (elemento) => {
    obtenerMiMunicipio((mimunicipio) => {
        if (!mimunicipio.claveMun) {
            toast('info', 'Primero establesca los valores para Mi municipio.', 'Ubicaciones');
            return;
        }

        if (elemento) {
            elementoModificar = elemento;
            $('#elemento-modal-title').text('Modificar ubicación');
        } else {
            limpiarModal();
            elementoModificar = null;
            $('#elemento-modal-title').text('Nueva ubicación');
        }
        $('#claveMun').val(mimunicipio.claveMun);
        $('#nombreMunicipio').val(mimunicipio.municipio.nombre);
        $('#elemento-modal').modal('show');
        setTimeout(function() {
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

const limpiarModal = () => {
    $("#elemento-form :input:text").val('');
};

const guardar = (e) => {
    e.preventDefault();
    $('#guardar').attr('disabled', 'disabled').hide();
    $('#guardarLoading').show();
    $('#cancelar').attr('disabled', 'disabled')
    const pointFeature = capaHUbicar.getSource().getFeatures()[0];
    const center = pointFeature.getGeometry().getCoordinates();
    const point = ol.proj.toLonLat(center);
    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: window.MRM_REMTYS_API_URL + "/ubicaciones" + ((elementoModificar) ? ('/' + elementoModificar.idUbicacion) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "nombre": $('#nombre').val(),
            "direccionAMostrar": $('#direccionAMostrar').val(),
            "colonia": $('#colonia').val(),
            "calle": $('#calle').val(),
            "numExterior": $('#numExterior').val(),
            "numInterior": $('#numInterior').val(),
            "codigoPostal": $('#codigoPostal').val(),
            "x": point[0],
            "y": point[1]
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            limpiarFiltros();
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado la ubicación', 'Ubicaciones');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400 && e.responseJSON.code == 'ubicacion_ya_existe') {
                $('#nombre').focus();
                toast('warning', 'Ya existe una ubicación con el nombre dado, escriba uno distinto.', 'Ubicaciones');
            } else {
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Ubicaciones');
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
        url: window.MRM_REMTYS_API_URL + "/ubicaciones/" + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            limpiarFiltros();
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado la ubicación', 'Ubicaciones');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                $('#eliminar-elemento-modal').modal('hide');
                limpiarFiltros();
            } else {
                toast('warning', 'No se pudo eliminar la ubicación, intente más tarde.', 'Ubicaciones');
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

capaHUbicar = null;

function iniciarCapaHUbicar(x, y) {
    var estilo = obtenerEstiloIcono('img/pin.png', 32);

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