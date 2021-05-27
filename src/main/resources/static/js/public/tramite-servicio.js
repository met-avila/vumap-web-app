$(function() {
    window.scrollTo({ top: 0, left: 0 });
    var urlParams = new URLSearchParams(window.location.search);
    let uuid = urlParams.get('u');

    initTable();
    obtenerTiposPersonas(function(res) {
        res.forEach((item, index) => {
            const checked = (index == 0) ? 'checked' : '';
            const active = (index == 0) ? 'active' : '';
            const element = $(tipoPersonaItemTemplate(item.idTipoPersonaRequisito, item.nombre, checked, active));
            element.appendTo($('#tiposPersonas'));
        });
        obtenerTramiteServicio(uuid, (res) => {
            if (!res) {
                window.location = '/p/error';
            } else {
                mostrarTramiteServicio(res);
            }
        });
    });

    $('#idOficina').change(() => {
        mostrarOficina($('#idOficina').val());
    });

});

const mostrarTramiteServicio = (res) => {
    const ts = res.ts;
    $('.tipoRemtysU').text(ts.tipoRemtys.nombre == 'Tramite' ? 'Trámite' : 'Servicio');
    $('.tipoRemtys').text(ts.tipoRemtys.nombre == 'Tramite' ? 'trámite' : 'servicio');
    $('.nombreTramite').text(ts.seccionGeneralesTys.nombreTramite);
    $('.resumen').text(ts.seccionGeneralesTys.resumen);
    mostrarSeccionGenerales(res);
    mostrarSeccionRequisitos(res);
    mostrarSeccionCostos(res);
    mostrarSeccionHorariosAtencion(res);
    mostrarSeccionProcedimiento(res);
    mostrarSeccionDuracionRespuesta(res);
    mostrarSeccionTSRelacionados(res);
    mostrarSeccionInfoAdicional(res);
    mostrarSeccionTSDocsRelacionados(res);
    mostrarSeccionOficinas(res);
    mostrarSeccionDiagrama(res);
};

var myDiagram;

const mostrarSeccionDiagrama = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Diagrama');
    if (item && item.publicado === true) {
        myDiagram = $("#diagram").dxDiagram({
            contextMenu: { enabled: false },
            toolbar: { visible: false },
            toolbox: {
                visible: false,
                groups: [{ category: "ts", title: "Tipos de actividades" }]
            },
            viewToolbar: {
                visible: true
            },
            propertiesPanel: {
                visibility: 'disabled',

            },
            readOnly: true,
            simpleView: true,
            historyToolbar: { visible: false },
            mainToolbar: { visible: false },
            layout: "tree"
        }).dxDiagram("instance");

        try {
            myDiagram.import(res.tsDiagramaFlujo.jsonFlujo);
        } catch (err) {; }
    } else {
        $('#pdflujots').remove();
    }
}



var oficinasServicio = [];
const mostrarSeccionOficinas = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Otras oficinas que prestan el servicio');
    if (item && item.publicado === true) {
        oficinasServicio = res.tsOficinas;
        if ($.isArray(oficinasServicio) && oficinasServicio.length > 0) {
            oficinasServicio.forEach(item => {
                $('#idOficina').append(new Option(item.nombre, item.idOficinaTys));
            });
            const oficina = oficinasServicio[0];
            mostrarOficina(oficina.idOficinaTys);
            setTimeout(() => {
                $('#js_demo_accordion-3j').removeClass('show');
            }, 500);
        } else {
            $('#pdOficinas').remove();
        }
    } else {
        $('#pdOficinas').remove();
    }
};

const mostrarOficina = (idOficina) => {
    for (let index = 0; index < oficinasServicio.length; index++) {
        const oficina = oficinasServicio[index];
        if (oficina.idOficinaTys == idOficina) {
            let direccion = oficina.calle + ' ' + oficina.numExterior + ' ' + oficina.numInterior;
            direccion += ' ' + oficina.colonia + ' C.P: ' + oficina.codigoPostal;
            $('.ofTitular').text(oficina.titular);
            $('.ofHorariosAtencion').text(oficina.horariosAtencion);
            $('.ofDireccion').text(direccion);
            $('.ofLada').text(oficina.lada);
            $('.ofTelefonos').text(oficina.telefonos);
            $('.ofExtension').text(oficina.extension);
            $('.ofFax').text(oficina.fax);
            $('.ofEmail').text(oficina.email);

            loadMap(parseFloat(oficina.x), parseFloat(oficina.y));
            break;
        }
    }
};

const mostrarSeccionTSDocsRelacionados = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Documentos relacionados');
    if (item && item.publicado === true) {
        const items = res.tsDocumentos;
        if ($.isArray(items)) {
            $.get(window.MRM_REMTYS_APP_URL + '/templates/cardDocumentoPublic.html', function(data) {
                let cardTemplate = data;
                items.forEach(item => {
                    const htmlCard = $(cardTemplate);
                    htmlCard.attr('id', item.idDocumentoTys);
                    htmlCard.find('.nombreMostrarLink').text(item.nombreMostrarLink);
                    htmlCard.find('.nombreMostrarLink').attr('href', item.url);
                    htmlCard.appendTo($('#jqCardsDocumentos'));
                });
            });
        }
    } else {
        $('#pddocumentos').remove();
    }
}

const mostrarSeccionInfoAdicional = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Información adicional');
    if (item && item.publicado === true) {
        const items = res.tsInfoAdicional;
        $('.infoAdicional').html(items.infoAdicional);
        $('.infoAdicional').find('p').css('margin', '0px');
    } else {
        $('#pdinfoAdicional').remove();
    }
}

const mostrarSeccionTSRelacionados = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Trámites y servicios relacionados');
    if (item && item.publicado === true) {
        const items = res.tsRelacionados;
        if ($.isArray(items)) {
            $.get(window.MRM_REMTYS_APP_URL + '/templates/cardTSRelacionadoPublic.html', function(data) {
                let cardTemplate = data;
                items.forEach(item => {
                    const htmlCard = $(cardTemplate);
                    htmlCard.attr('id', item.idRelacionadoTys);
                    htmlCard.find('.nombreTSRelacionado').text(item.tramiteServicioRelacionado.seccionGeneralesTys.nombreTramite);
                    htmlCard.find('.tipoTSRelacionado').text(item.tramiteServicioRelacionado.tipoRemtys.nombre);
                    htmlCard.find('.categoriaTSRelacionado').text(item.tramiteServicioRelacionado.categoria.nombre);
                    htmlCard.find('.dependenciaTSRelacionado').text(item.tramiteServicioRelacionado.dependencia.nombre);
                    htmlCard.find('.razonRelacion').text(item.razonRelacion);

                    htmlCard.appendTo($('#jqCardsRelacionados'));
                });
            });
        }
    } else {
        $('#pdrelacionados').remove();
    }
}

const mostrarSeccionDuracionRespuesta = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Generales');
    if (item && item.publicado === true) {
        const ts = res.ts;
        $('.documentoQueObtiene').text(ts.seccionGeneralesTys.documentoQueObtiene);

        let plazo = '';
        if (ts.seccionGeneralesTys.inmediato) {
            plazo = 'Inmediato';
        } else {
            //dias
            if (ts.seccionGeneralesTys.tipoDuracionTys == 1) {
                let plazoRespuesta = ts.seccionGeneralesTys.plazoMaximoRespuesta;
                plazoRespuesta += ' ' + ts.seccionGeneralesTys.tipoDuracionTys.nombre;
                plazoRespuesta += ' ' + ts.seccionGeneralesTys.tipoDiasTys.nombre;
                plazo = plazoRespuesta;
            } else {
                let plazoRespuesta = ts.seccionGeneralesTys.plazoMaximoRespuesta;
                plazoRespuesta += ' ' + ts.seccionGeneralesTys.tipoDuracionTys.nombre;
                plazo = plazoRespuesta;
            }
        }

        $('.plazoRespuesta').text(plazo);
    } else {
        $('#pdduracion').remove();
    }
}

const mostrarSeccionProcedimiento = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Procedimiento ciudadano');
    if (item && item.publicado === true) {
        const pro = res.tsProcedimiento;
        if ($.isArray(pro)) {
            $.get(window.MRM_REMTYS_APP_URL + '/templates/cardProcedimientoPublic.html', function(data) {
                let cardProcedimiento = data;
                pro.forEach(item => {
                    const htmlCard = $(cardProcedimiento);
                    htmlCard.attr('id', item.idProcedimientoTys);
                    htmlCard.find('.orden').text(item.numeroOrden);
                    htmlCard.find('.tipoActorFlujo').text(item.tipoActorFlujo.nombre);
                    htmlCard.find('.descripcion').text(item.descripcion);
                    htmlCard.appendTo($('#jqCardsProcedimiento'));
                });
            });
        }
    } else {
        $('#pdprocedimiento').remove();
    }
}

const mostrarSeccionHorariosAtencion = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Generales');
    if (item && item.publicado === true) {
        const ts = res.ts;
        $('.horariosDeAtencion').text(ts.seccionGeneralesTys.horariosDeAtencion);
        $('.nombreUbicacion').text(ts.dependencia.ubicacion.nombre);
        $('.direccionUbicacion').text(ts.dependencia.ubicacion.direccionAMostrar);
    } else {
        $('#pdhorariosAtencion').remove();
    }
}

const mostrarSeccionCostos = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Costos y formas de pago');
    if (item && item.publicado === true) {
        const costos = res.tsCostos;
        if (costos) {
            $('.tramiteTieneCosto').text(costos.tramiteTieneCosto ? 'Si' : 'No');
            if (costos.tramiteTieneCosto === true) {
                const costo = parseFloat(costos.montoCosto, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString()
                $('.montoCosto').text('$ ' + costo + ' MXN');
                $('.dondePodraPagarse').text(costos.dondePodraPagarse);
                $('.formasPagos').text($.map(costos.formasPagos, (item) => { return item.nombre; }));
                $('.descripcionCosto').text(costos.descripcionCosto);
                $('.criteriosResolucion').text(costos.criteriosResolucion);

            } else {
                $('.tramiteTieneCosto').text('No');
                $('#contenedorCostos').remove();
            }
        } else {
            $('.tramiteTieneCosto').text('No');
            $('#contenedorCostos').remove();
        }
    } else {
        $('#pdcostos').remove();
    }
}

var tsRequisitos = [];
const initTable = () => {
    $('#dt-requisitos').dataTable({
        searching: false,
        paging: false,
        info: false,
        ordering: false,
        language: {
            emptyTable: "Sin datos"
        },
        columnDefs: [{ targets: '_all', className: "truncate" }],
        columns: [{
                title: "Número",
                data: 'numero',
                width: "10%"
            },
            {
                title: "Descripción",
                data: 'descripcion',
                width: "50%"
            }, {
                title: "Original",
                data: 'originalDetalle',
                width: "20%"
            }, {
                title: "Copias",
                data: 'copiasDetalle',
                width: "20%"
            }
        ],
        data: [],
    });
};

const mostrarRequisitos = () => {
    const id = $("input[name='options-tipo-persona']:checked").val();

    let requisitos = [];
    for (let index = 0; index < tsRequisitos.length; index++) {
        const element = tsRequisitos[index];
        if (element.tipoPersonaRequisitos.idTipoPersonaRequisito == id) {
            requisitos.push(element);
        }
    }

    if (requisitos.length > 0)
        $('#fundamentoJuridicoContainer').show();
    else
        $('#fundamentoJuridicoContainer').hide();


    $('#dt-requisitos').DataTable().clear();
    $('#dt-requisitos').DataTable().rows.add(requisitos).draw();

    mostrarFundamentoJuridico();
};

var tsFundamentos = [];
const mostrarFundamentoJuridico = () => {
    const id = $("input[name='options-tipo-persona']:checked").val();
    let fundamento = null;

    for (let index = 0; index < tsFundamentos.length; index++) {
        const element = tsFundamentos[index];
        if (element.idTipoPersonaRequisito == id) {
            fundamento = element.fundamentoJuridico;
            break;
        }
    }
    $('#fundamentoJuridico').text(null);
    if (fundamento) {
        $('#fundamentoJuridico').text(fundamento);
    }
};

const mostrarSeccionRequisitos = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Requisitos');
    if (item && item.publicado === true) {
        tsRequisitos = res.tsRequisitos;
        tsFundamentos = res.tsRequisitosPersonas;

        for (let index = 0; index < tsRequisitos.length; index++) {
            const element = tsRequisitos[index];
            let originalDetalle = element.original;
            if (element.originalDetalle && element.originalDetalle.length > 0)
                originalDetalle += ' (' + element.originalDetalle + ')';
            if (originalDetalle == 'NO_APLICA')
                originalDetalle = 'No aplica';
            element.originalDetalle = originalDetalle;

            let copiasDetalle = '';
            if (element.copiasDetalle && element.copiasDetalle.length > 0) {
                copiasDetalle = element.copiasDetalle + '\n (' + element.numeroCopias + ')';
            } else {
                if (element.copias == 'SI') {
                    copiasDetalle = element.copias += ' (' + element.numeroCopias + ')';
                } else
                    copiasDetalle = element.copias;
            }
            if (copiasDetalle == 'NO_APLICA')
                copiasDetalle = 'No aplica';
            element.copiasDetalle = copiasDetalle;
        }

        mostrarRequisitos();
    } else {
        $('#pdrequisitos').remove();
    }
};

const mostrarSeccionGenerales = (res) => {
    const pu = res.pu;
    const item = obtenerPublicacionSeccion(pu, 'Generales');
    if (item && item.publicado === true) {
        const ts = res.ts;
        $('.tramiteLoRealiza').text(ts.seccionGeneralesTys.tramiteLoRealiza);
        $('.dependencia').text(ts.dependencia.nombre);
        if (ts.dependenciaResponsable)
            $('.dependenciaResponsable').text(ts.dependenciaResponsable.nombre);
        $('.documentoQueObtiene').text(ts.seccionGeneralesTys.documentoQueObtiene);
        $('.vigenciaDocumento').text(ts.seccionGeneralesTys.vigenciaDocumento);
        $('.casosRealizar').text(ts.seccionGeneralesTys.casosRealizar);
        $('.fundamentoLegal').text(ts.seccionGeneralesTys.fundamentoLegal);


    } else {
        $('#pdgenerales').remove();
    }
};


const obtenerPublicacionSeccion = (pu, nombre) => {
    let item = null;
    if ($.isArray(pu)) {
        for (let index = 0; index < pu.length; index++) {
            const p = pu[index];
            if (p.seccion.nombre == nombre) {
                item = p;
                break;
            }
        }
    }
    return item;
};

const obtenerTramiteServicio = (uuid, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/p/tramites-servicios/" + uuid,
        data: {},
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TramitesServicios');
            console.error(e);
        }
    });
};

const obtenerPublicacionTS = (uuid, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/p/tramites-servicios/" + uuid + "/publicacion",
        data: {},
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Publicacion');
            console.error(e);
        }
    });
};

var tipoPersonaItemTemplate = (id, nombre, publicado, active) => `
    <label class="btn btn-info waves-effect waves-themed ${active}">
        <input onchange="mostrarRequisitos()" ${publicado} type="radio" name="options-tipo-persona" value="${id}" id="tpr-${id}">${nombre}
    </label>
`;

var obtenerTiposPersonas = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/p/requisitos/tipos-personas",
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TiposPersonas');
            console.error(e);
        }
    });
};


function initAppForms(parentClass, focusClass, disabledClass) {

    function setClass(e, parentClass, focusClass) {
        $(e).parents(parentClass).addClass(focusClass);
    }

    function deleteClass(e, parentClass, focusClass) {
        /*if(e.value.length) {

        } else {*/
        $(e).parents(parentClass).removeClass(focusClass);
        /*}*/
    }

    $(parentClass).each(function() {
        var input = $(this).find('.form-control');
        input.on('focus', function() {
            setClass(this, parentClass, focusClass);
        });
        input.on('blur', function() {
            deleteClass(this, parentClass, focusClass);
        });
    });
}


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


capaHUbicar = null;

function iniciarCapaHUbicar(x, y) {
    var estilo = obtenerEstiloIcono(window.MRM_REMTYS_APP_URL + '/img/pin.png', 32);

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

function setCoordinatesToPin(coordinate) {
    capaHUbicar.getSource().clear(true);
    var feature = new ol.Feature({
        geometry: new ol.geom.Point(coordinate)
    });

    feature.set('id', 'PIN');
    feature.set('tipo', 'PIN');
    capaHUbicar.getSource().addFeature(feature);
}