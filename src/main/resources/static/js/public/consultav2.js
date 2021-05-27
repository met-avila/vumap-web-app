$(function() {
    // loadCardsMasBuscados();
    /*$.get(window.MRM_REMTYS_APP_URL + '/templates/cardTSConsulta.html', function(data) {
        cardTSConsulta = data;
    });*/

    loadTSConsulta();
    obtenerCategorias((res) => {
        allCategorias = res;
        res.forEach(elemento => {
            $('#categorias').append(new Option(elemento.nombre, elemento.nombre));
        });
    });

    $("#palabrasRelacionadas").dxTagBox({
        value: [],
        placeholder: '',
        onValueChanged: (e) => {
            if (e.value.length >= 5) {
                $('#addPalabraRelacionada').attr('disabled', 'disabled');
            } else {
                $('#addPalabraRelacionada').removeAttr('disabled');
            }
        }
    });

    $("#categoriasSeleccionadas").dxTagBox({
        value: [],
        placeholder: '',
        onValueChanged: (e) => {
            if (e.value.length >= 5) {
                $('#addCategoria').attr('disabled', 'disabled');
            } else {
                $('#addCategoria').removeAttr('disabled');
            }
        }
    });

    $("#dependenciasSeleccionadas").dxTagBox({
        value: [],
        placeholder: '',
        onValueChanged: (e) => {
            if (e.value.length >= 5) {
                $('#addDependencia').attr('disabled', 'disabled');
            } else {
                $('#addDependencia').removeAttr('disabled');
            }
        }
    });

    $('#f-nombre').keyup(() => {
        const text = $('#f-nombre').val();
        if (text.length > 0)
            $('#deleteSearchText').show();
        else
            $('#deleteSearchText').hide();
    });

    $('#f-nombre').keydown((e) => {
        if (e.which == 13) {
            filtrar();
        }
    });

    $('#deleteSearchText').click(() => {
        limpiarFiltros();
        $('#f-nombre').val('').focus();
        $('#deleteSearchText').hide();
    });
});

$('#aplicarFiltrosCD').click(() => {
    loadTSConsulta(obtenerFiltroModal());
});

const loadTSConsulta = (filtro) => {
    $('#ts-pagination').pagination({
        dataSource: window.MRM_REMTYS_API_URL + '/p/tramites-servicios',
        locator: 'content',
        pageSize: pageSize,
        ajax: {
            beforeSend: function() {
                if (!filtro) {
                    const nombreTS = $.trim($('#f-nombre').val());
                    if (nombreTS.length > 0)
                        this.url += '&p=' + nombreTS;
                } else {
                    this.url += '&its=' + filtro.its;
                    this.url += '&p=' + filtro.p;
                    this.url += '&c=' + filtro.c;
                    this.url += '&d=' + filtro.d;
                    this.url += '&el=' + filtro.el;
                    this.url += '&am=' + filtro.am;
                    this.url += '&pr=' + filtro.pr;

                    $('#limpiarFiltrosCD').attr('disabled', 'disabled');
                    $('#aplicarFiltrosCD').hide();
                    $('#aplicarFiltrosCDLoading').show();
                }
            }
        },
        totalNumberLocator: function(res) {
            $('#tsEncontrados').text(res.totalElements);
            return res.totalElements;
        },
        callback: function(data, pagination) {
            showCardsConsulta(data);
            $('#limpiarFiltrosCD').removeAttr('disabled');
            $('#aplicarFiltrosCD').show();
            $('#aplicarFiltrosCDLoading').hide();
            $('#filtros-modal').modal('hide');
        }
    })
};

var allCategorias = [];
const obtenerFiltroModal = () => {
    let filtros = { p: '', c: '', d: '', its: '' };
    let idts = [];
    if ($('#tsTramite').is(':checked'))
        idts.push(1);
    if ($('#tsServicio').is(':checked'))
        idts.push(2);
    if (idts.length > 0) {
        filtros.its = idts.join(',');
        existeFiltro = true;
    }

    filtros.el = $('#enLinea').is(':checked')
    filtros.am = $('#appMovil').is(':checked')
    filtros.pr = $('#presencial').is(':checked')

    const palabras = $("#palabrasRelacionadas").dxTagBox("instance").option("value");
    if (palabras.length > 0)
        filtros.p = palabras.join(',');

    const catSel = obtenerCategoriasSel();
    if (catSel.length > 0)
        filtros.c = catSel.join(',');

    const depSel = obtenerDependenciasSel();
    if (depSel.length > 0)
        filtros.d = depSel.join(',');

    return filtros;

};

const obtenerCategoriasSel = () => {
    const categoriasSel = $("#categoriasSeleccionadas").dxTagBox("instance").option("value");

    let catSel = [];

    for (let index = 0; index < allCategorias.length; index++) {
        const element = allCategorias[index];
        if ($.inArray(element.nombre, categoriasSel) != -1) {
            catSel.push(element.idCategoria);
        }
    }

    return catSel;
};

const obtenerDependenciasSel = () => {
    const depencenciasSel = $("#dependenciasSeleccionadas").dxTagBox("instance").option("value");
    let DepSel = [];
    const allDependencias = depmodal.getAllDependencias();
    for (let index = 0; index < allDependencias.length; index++) {
        const element = allDependencias[index];
        if ($.inArray(element.nombre, depencenciasSel) != -1) {
            DepSel.push(element.idDependencia);
        }
        searchChild(depencenciasSel, element, DepSel);
    }
    return DepSel;
};

const searchChild = (nombres, parent, DepSel) => {
    if (parent.dependencias) {
        for (let index = 0; index < parent.dependencias.length; index++) {
            const dependencia = parent.dependencias[index];
            if ($.inArray(dependencia.nombre, nombres) != -1) {
                DepSel.push(dependencia.idDependencia);
            }
            item = searchChild(nombres, dependencia, DepSel);
        }
    }
    return null;
}

const filtrar = () => {
    loadTSConsulta();
};

const limpiarFiltros = () => {
    $('#limpiarFiltrosCD').click();
    $('#f-nombre').val('');
    loadTSConsulta();
};




$('#aplicarFiltros').click(() => {
    loadTSConsulta();
});

$('#limpiarFiltrosCD').click(() => {
    $('#dependencia').val('');
    $('#idDependencia').val(null);
    $('#tsTramite').prop('checked', false);
    $('#tsServicio').prop('checked', false);

    $('#enLinea').prop('checked', false);
    $('#appMovil').prop('checked', false);
    $('#presencial').prop('checked', false);

    $('#palabraRelacionada').val('');
    $("#categorias").val($("#categorias option:first").val());

    $("#palabrasRelacionadas").dxTagBox("instance").option("value", []);
    $("#categoriasSeleccionadas").dxTagBox("instance").option("value", []);
    $("#dependenciasSeleccionadas").dxTagBox("instance").option("value", []);

});

var showDependencias = () => {
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
    }, dependencias, 'single', null);
};


$('#addDependencia').click(() => {
    const pl = $.trim($('#dependencia').val());
    let items = $("#dependenciasSeleccionadas").dxTagBox("instance").option("value");
    if (pl.length > 0) {
        let exist = false;

        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (element == pl) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            items.push(pl);
            $("#dependenciasSeleccionadas").dxTagBox("instance").option("value", items);
            $('#dependencia').val('');
            $('#idDependencia').val(null);
        }
    }
});

$('#addCategoria').click(() => {
    const pl = $.trim($('#categorias').val());
    let items = $("#categoriasSeleccionadas").dxTagBox("instance").option("value");
    if (pl.length > 0) {
        let exist = false;

        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (element == pl) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            items.push(pl);
            $("#categoriasSeleccionadas").dxTagBox("instance").option("value", items);
        }
    }
});

$('#addPalabraRelacionada').click(() => {
    const pl = $.trim($('#palabraRelacionada').val());
    let items = $("#palabrasRelacionadas").dxTagBox("instance").option("value");
    if (pl.length > 0) {
        let exist = false;

        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (element == pl) {
                exist = true;
                break;
            }
        }
        if (!exist) {
            items.push(pl);
            $("#palabrasRelacionadas").dxTagBox("instance").option("value", items);
            $('#palabraRelacionada').val('').focus();
        }
    }
});

const mostrarMasfiltros = () => {
    $('#filtros-modal').modal('show');
};



var cardTSConsulta = null;
var pageSize = 12;
var loadCardsConsulta = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + '/p/tramites-servicios',
        data: {
            p: 0,
            ps: pageSize
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            toast('info', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Tramites/Servicios:Public');
            console.error(e);
        }
    });
}


var showCardsConsulta = (res) => {

    $('#dependenciasContainer').html('');
    if ($.isArray(res)) {
        const data = buildDataFromTS(res);

        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            const acordionItem = $(acordionItemTemplate(item.data.id, item.nombre, index == 0, index == 0 ? 'show' : '', index != 0 ? 'collapsed' : ''));
            const tsContainer = acordionItem.find('#acordionTSContainer' + item.data.id);
            item.data.ts.forEach(ts => {
                $('<p class="h5"><a class="text-dark" style="text-decoration: underline !important;" href="tramites-servicios?u=' + ts.uuid + '">' + ts.seccionGeneralesTys.nombreTramite + '</a></p>').appendTo(tsContainer)
            });
            acordionItem.appendTo($('#dependenciasContainer'));
        }
    }
};

const buildDataFromTS = (data) => {
    let dependencias = {};
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let dependencia = dependencias[element.dependencia.nombre];
        if (dependencia) {
            if (!dependencia.ts)
                dependencia.ts = [];
            dependencia.ts.push(element);
        } else {
            dependencias[element.dependencia.nombre] = {
                id: element.dependencia.idDependencia,
                nombre: element.dependencia.nombre,
                ts: [element]
            };
        }
    }
    var sortedDict = [];
    var keys = Object.keys(dependencias);
    keys.sort();

    for (let i = 0; i < keys.length; i++) {
        sortedDict.push({ 'nombre': keys[i], 'data': dependencias[keys[i]] });
    }
    return sortedDict;
};

const acordionItemTemplate = (id, nombre, expanded, show, collapsed) => `
        <div class="card">
            <div class="card-header">
                <a href="javascript:void(0);" class="card-title ${collapsed}" data-toggle="collapse" data-target="#acordionHeader${id}" aria-expanded="${expanded}">
                <i class="fal fa-university width-2 fs-xl"></i> ${nombre}
                    <span class="ml-auto">
                        <span class="collapsed-reveal">
                            <i class="fal fa-chevron-up fs-xl"></i>
                        </span>
                    <span class="collapsed-hidden">
                            <i class="fal fa-chevron-down fs-xl"></i>
                        </span>
                    </span>
                </a>
            </div>
            <div id="acordionHeader${id}" class="collapse ${show}" data-parent="#dependenciasContainer">
                <div id="acordionTSContainer${id}" class="card-body">
                </div>
            </div>
        </div>
`;


const loadCardsMasBuscados = () => {
    $("#jqCardsMasBuscados").jqCards({
        url: window.MRM_REMTYS_API_URL + "/p/tramites-servicios/mas-buscados",
        datatype: "json",
        data: {},
        urlTemplateCard: window.MRM_REMTYS_APP_URL + '/templates/cardTramiteServicioMasBuscado.html',
        filterControl: {
            layoutFilter: []
        },
        layoutCard: [{
            selector: '.realizar-linea',
            event: 'click',
            eventFunction: function(elemento) {}
        }, {
            selector: '.ver-informacion',
            event: 'click',
            eventFunction: function(elemento) {}
        }],
        numCards: 9,
        preloadCard: function(data, card) {
            card.find('.nombreTramite').text(data.seccionGeneralesTys.nombreTramite);
            card.find('.nombreCategoria').text(data.categoria.nombre);
            card.find('.nombreDependencia').text(data.dependencia.nombre);
            card.find('.tipoRemtys').text(data.tipoRemtys.nombre);

            card.find('.ver-informacion').attr('href', 'tramites-servicios?u=' + data.uuid);
            if (data.seccionGeneralesTys.tysEnLinea === true)
                card.find('.realizar-linea').attr('href', data.seccionGeneralesTys.urlTysEnLinea);
            else
                card.find('.realizar-linea').remove();
            return card;
        }
    });
}

const obtenerCategorias = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/p/categorias",
        data: {},
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = window.MRM_REMTYS_APP_URL;
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Categorías');
            console.error(e);
        }
    });
};