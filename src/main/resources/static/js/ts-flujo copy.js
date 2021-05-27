tramiteServicio = null;

myDiagram = null;

$(function() {

    textOnlyNumbers($("#numeroActividad"));
    textOnlyNumbers($("#duracion"));
    $('#elemento-form').submit(guardar);
    $('.eliminar').click(mostrarEliminarActividad);
    $('.guardarDiagrama').click(guardarDiagrama);

    $('#eliminar').click(eliminar);
    $('.editar').click(mostrarEditarActividad);

    myDiagram = $("#diagram").dxDiagram({
        contextMenu: { enabled: false },
        toolbar: { visible: false },
        toolbox: { visible: false },
        mainToolbar: { visible: false },
        pageOrientation: 'landscape',
        onItemDblClick: onItemDblClick,
        onSelectionChanged: onDiagramSelectionChanged,
        customShapes: [{
                category: "ts",
                type: "inicio",
                title: "Inicio",
                allowEditText: false,
                baseType: 'terminator',
                defaultText: "Inicio",
                connectionPoints: [
                    //  { x: 0.5, y: 1 }
                ]
            },
            {
                category: "ts",
                type: "fin",
                title: "Fin",
                allowEditText: false,
                baseType: 'terminator',
                defaultText: "Fin",
                connectionPoints: [
                    // { x: 0.5, y: 0 }
                ]
            }, {
                category: "ts",
                type: "decisionts",
                title: "Decisión",
                allowEditText: false,
                baseType: 'decision',
                defaultText: "Decisión",
                connectionPoints: []
            }, {
                category: "ts",
                type: "actividad",
                title: "Actividad",
                allowEditText: false,
                baseType: 'rectangle',
                defaultText: "Actividad",
                connectionPoints: []
            }, {
                category: "ts",
                type: "procesots",
                allowEditText: false,
                title: "Proceso",
                baseType: 'data',
                defaultText: "Proceso",
                connectionPoints: []
            }
        ],
        layout: "tree"
    }).dxDiagram("instance");


    clearSelect($("#tipoActorFlujo"));
    clearSelect($("#tipoActividadFlujo"));
    clearSelect($("#estatusActividadFlujo"));
    clearSelect($("#tipoDuracionFlujo"), "Seleccione");

    const id = $(location).attr("href").split('/').reverse()[1];
    if ($.isNumeric(id)) {
        obtenerTramiteServicio(parseInt(id), (res) => {
            tramiteServicio = res;
            let ts = 'trámite: ';
            if (res.tipoRemtys.idTipoRemtys == 2)
                ts = 'servicio: ';
            ts += res.seccionGeneralesTys.nombreTramite;
            $('.nombreTramite').text('Flujo de trabajo para el ' + ts);
            obtenerCatalogosFlujo(mostrarCatalogosFlujo);
            obtenerFlujo(setFlujo);
        });
    } else {
        location.href = window.MRM_REMTYS_APP_URL + '/tramites-servicios';
    }

    $("html").on("mouseup", onHtmlMouseup)
        //setPermisosMenu(12, ['.eliminar', '.editar', '.agregar']);
});

let currentDiagram = null;
const onHtmlMouseup = () => {
    currentDiagram = $.parseJSON(myDiagram.export());
};


const sincronizeDiagrams = () => {
    if (jsonFlujo && currentDiagram) {
        for (let index = 0; index < jsonFlujo.connectors.length; index++) {
            const element = jsonFlujo.connectors[index];
            const item = getConnectorByKey(element.key, currentDiagram);
            if (item) {
                item.beginItemKey = element.beginItemKey;
                item.endItemKey = element.endItemKey;
                jsonFlujo.connectors[index] = item;
            }
        }

        for (let index = 0; index < jsonFlujo.shapes.length; index++) {
            const element = jsonFlujo.shapes[index];
            const item = getShapeByKey(element.key, currentDiagram);
            if (item) {
                jsonFlujo.shapes[index] = item;
            }
        }

        loadJsonToDiagram();
    }
};

const getConnectorByKey = (key, diagram) => {
    if (diagram) {
        for (let index = 0; index < diagram.connectors.length; index++) {
            const element = diagram.connectors[index];
            if (key == element.key)
                return element;
        }
    }
    return null;
};

const getShapeByKey = (key, diagram) => {
    if (diagram) {
        for (let index = 0; index < diagram.shapes.length; index++) {
            const element = diagram.shapes[index];
            if (key == element.key)
                return element;
        }
    }
    return null;
};

const onItemDblClick = (e) => {
    if (e.item && e.item.itemType == 'shape') {
        elementoSeleccionadoDiagrama = getShapeByKey(e.item.id, jsonFlujo);
        mostrarEditarActividad();
    }
};

selectedItem = null;
elementoSeleccionadoDiagrama = null;

function onDiagramSelectionChanged(e) {
    elementoSeleccionadoDiagrama = null;
    if (e.items.length == 0) {
        sincronizeDiagrams();
    } else {
        if (selectedItem) {
            if (selectedItem.id != e.items[0].id) {
                sincronizeDiagrams();
            }
        }
        selectedItem = e.items[0];
    }

    $('.eliminar').attr('disabled', 'disabled');
    $('.editar').attr('disabled', 'disabled');

    if (e.items.length == 1) {
        const item = e.items[0];
        if (item.itemType == 'shape') {
            elementoSeleccionadoDiagrama = getShapeByKey(item.id, jsonFlujo);
            $('.eliminar').removeAttr('disabled');
            $('.editar').removeAttr('disabled');
        }
    }
}

jsonFlujo = null;
const setFlujo = (res) => {
    if (res) {
        if (res.jsonFlujo) {
            try {
                jsonFlujo = $.parseJSON(res.jsonFlujo);
                myDiagram.import(res.jsonFlujo);
            } catch (err) {; }
        }
        if (jsonFlujo == null) {
            jsonFlujo = $.parseJSON(myDiagram.export());
            obtenerActividadesFlujo((res) => {
                if (res && $.isArray(res)) {
                    for (let index = 0; index < res.length; index++) {
                        const item = res[index];
                        item.id = item.idActividadFlujo;
                        addActividadToDiagram(item);
                    }
                    loadJsonToDiagram();
                }
            });
        }
    } else
        jsonFlujo = $.parseJSON(myDiagram.export());
};

const loadJsonToDiagram = () => {
    myDiagram.import(JSON.stringify(jsonFlujo));
    $('.eliminar').attr('disabled', 'disabled');
    $('.editar').attr('disabled', 'disabled');
};

indexActividad = 0;
const getuuidNode = () => {
    return new Date().getTime().toString() + 'node' + ++indexActividad;
};

indexEdge = 0;
const getuuidEdge = () => {
    return new Date().getTime().toString() + 'edge' + ++indexEdge;
};

const updateActividadToDiagram = (actividad) => {
    actividad.key = getuuidNode();
    actividad.x = 0;
    actividad.y = 0;

    if (actividad.idActividadPredecesora) {
        const actPre = getActividadFromDiagram(actividad.idActividadPredecesora);
        if (actPre) {
            actividad.x = actPre.x;
            actividad.y = actPre.y + 1300;
        }
    }

    for (let index = 0; index < jsonFlujo.shapes.length; index++) {
        const element = jsonFlujo.shapes[index];
        if (actividad.idActividadFlujo == element.dataKey) {
            jsonFlujo.shapes[index].type = getActividadType(actividad.tipoActividad.idTipoActividad);
            jsonFlujo.shapes[index].text = actividad.nombre;
            break;
        }
    }
};

const addActividadToDiagram = (actividad) => {
    actividad.key = getuuidNode();
    actividad.x = 0;
    actividad.y = 0;
    if (actividad.idActividadPredecesora) {
        const actPre = getActividadFromDiagram(actividad.idActividadPredecesora);
        if (actPre) {
            actividad.x = actPre.x;
            actividad.y = actPre.y + 1300;
            addEdgeToDiagram(actPre.key, actividad.key);
        }
    }

    jsonFlujo.shapes.push({
        key: actividad.key,
        dataKey: actividad.idActividadFlujo,
        type: getActividadType(actividad.tipoActividad.idTipoActividad),
        text: actividad.nombre,
        x: actividad.x,
        y: actividad.y
    });

};

const addEdgeToDiagram = (beginItemKey, endItemKey) => {
    const key = getuuidEdge();
    jsonFlujo.connectors.push({
        key: key,
        beginItemKey: beginItemKey,
        endItemKey: endItemKey,
        beginConnectionPointIndex: 2,
        endConnectionPointIndex: 0,
        points: [{
                x: 2160,
                y: 1080
            },
            {
                x: 2160,
                y: 1620
            }
        ],
    });
};

const getActividadFromDiagram = (idActividad) => {
    if (jsonFlujo) {
        if ($.isArray(jsonFlujo.shapes)) {
            for (let index = 0; index < jsonFlujo.shapes.length; index++) {
                const element = jsonFlujo.shapes[index];
                if (element.dataKey == idActividad)
                    return element;
            }
        }
    }
    return null;
};

const getActividadType = (idTipoActividad) => {
    if (idTipoActividad == 1)
        return 'inicio';
    else if (idTipoActividad == 2)
        return 'fin';
    else if (idTipoActividad == 3)
        return 'decisionts';
    else if (idTipoActividad == 4)
        return 'actividad';
    else if (idTipoActividad == 5)
        return 'procesots';
    else
        return 'rectangle';

};

const guardarDiagrama = () => {
    sincronizeDiagrams();
    guardarDiagramaFlujo((res) => {
        toast('info', 'Se ha guardado la estructura del diagrama', 'Flujo de trabajo');
    });
};

const guardarDiagramaFlujo = (callback) => {
    const url = window.MRM_REMTYS_API_URL + '/ts/' + tramiteServicio.idTramiteServicio + '/flujo';
    $.ajax({
        type: "PUT",
        url: url,
        data: {
            d: myDiagram.export()
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 400 && e.responseJSON.code == 'no_existe')
                toast('info', 'Primero agregue actividades al flujo.', 'Flujo de trabajo');
            else if (e.status == 403)
                window.location = window.MRM_REMTYS_APP_URL;
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Flujo');
            console.error(e);
        }
    });
};


const obtenerFlujo = (callback) => {
    const url = window.MRM_REMTYS_API_URL + '/ts/' + tramiteServicio.idTramiteServicio + '/flujo';
    $.ajax({
        type: "GET",
        url: url,
        data: {
            idtr: tramiteServicio.tipoRemtys.idTipoRemtys
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = window.MRM_REMTYS_APP_URL;
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Flujo');
            console.error(e);
        }
    });
};

const obtenerActividadesFlujo = (callback) => {
    const url = window.MRM_REMTYS_API_URL + '/ts/' + tramiteServicio.idTramiteServicio + '/flujo/actividades';
    $.ajax({
        type: "GET",
        url: url,
        data: {
            idtr: tramiteServicio.tipoRemtys.idTipoRemtys
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = window.MRM_REMTYS_APP_URL;
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Flujos:Actividades');
            console.error(e);
        }
    });
};

const mostrarCatalogosFlujo = (res) => {
    res.tipoActorFlujo.forEach(elemento => {
        $('#tipoActorFlujo').append(new Option(elemento.nombre, elemento.idTipoActorFlujo));
    });

    res.tipoActividadFlujo.forEach(elemento => {
        $('#tipoActividadFlujo').append(new Option(elemento.nombre, elemento.idTipoActividad));
    });

    res.estatusActividadFlujo.forEach(elemento => {
        $('#estatusActividadFlujo').append(new Option(elemento.nombre, elemento.idEstatusActividad));
    });
    res.tipoDuracionFlujo.forEach(elemento => {
        $('#tipoDuracionFlujo').append(new Option(elemento.nombre, elemento.idTipoDuracion));
    });
};

const obtenerCatalogosFlujo = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/flujos/catalogos",
        data: {
            idtr: tramiteServicio.tipoRemtys.idTipoRemtys
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = window.MRM_REMTYS_APP_URL;
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Flujos:Catálogos');
            console.error(e);
        }
    });
};

const obtenerTramiteServicio = (idTramiteServicio, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/" + idTramiteServicio,
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = window.MRM_REMTYS_APP_URL;
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:TS-Generales-Catálogos');
            console.error(e);
        }
    });
};

var elementoModificar = null;
const showModal = (element) => {
    limpiarModal();
    if (element) {
        elementoModificar = element;
        $("#numeroActividad").val(element.numero);
        if (element.tipoActorFlujo)
            $("#tipoActorFlujo").val(element.tipoActorFlujo.idTipoActorFlujo);

        $("#nombre").val(element.nombre);
        if (element.dependencia) {
            $("#dependencia").val(element.dependencia.nombre);
            $("#idDependencia").val(element.dependencia.idDependencia);
        }

        $("#requerida").prop('checked', element.actividadRequerida);
        $("#duracion").val(element.duracion);

        if (element.tipoActividad)
            $("#tipoActividadFlujo").val(element.tipoActividad.idTipoActividad);
        if (element.estatusActividad)
            $("#estatusActividadFlujo").val(element.estatusActividad.idEstatusActividad);
        if (element.tipoDuracion)
            $("#tipoDuracionFlujo").val(element.tipoDuracion.idTipoDuracion);
        $("#descripcion").val(element.descripcion);

        $('#elemento-modal-title').text('Modificar actividad');
    } else {
        elementoModificar = null;

        $('#elemento-modal-title').text('Nueva actividad');
    }

    obtenerActividadesFlujo((res) => {
        clearSelect($("#idActividadPredecesora"));
        res.forEach(elemento => {
            $('#idActividadPredecesora').append(new Option(elemento.nombre, elemento.idActividadFlujo));
        });

        if (elementoModificar) {
            $('#idActividadPredecesora').val(elementoModificar.idActividadPredecesora);
            $('#idActividadPredecesora').attr('disabled', 'disabled');
        } else {
            $('#idActividadPredecesora').removeAttr('disabled');
        }

        $('#elemento-modal').modal('show');
    });
};

const limpiarModal = () => {
    $("#numeroActividad").val('');
    $("#tipoActorFlujo").val('');
    clearSelect($("#idActividadPredecesora"));
    $("#nombre").val('');
    $("#dependencia").val('');
    $("#idDependencia").val(null);
    $("#requerida").prop('checked', false);
    $("#duracion").val('');
    $("#descripcion").val('');
    $("#tipoActividadFlujo").val($("#tipoActividadFlujo option:first").val());
    $("#estatusActividadFlujo").val($("#estatusActividadFlujo option:first").val());
    $("#tipoDuracionFlujo").val($("#tipoDuracionFlujo option:first").val());
};

const guardar = (e) => {
    e.preventDefault();
    $('#guardarElemento').attr('disabled', 'disabled').hide();
    $('#guardarElementoLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    const url = window.MRM_REMTYS_API_URL + '/ts/' + tramiteServicio.idTramiteServicio + '/flujo/actividades';
    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: url + ((elementoModificar) ? ('/' + elementoModificar.idActividadFlujo) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "idActividadPredecesora": $("#idActividadPredecesora").val(),
            "numero": $("#numeroActividad").val(),
            "idTipoActorFlujo": $("#tipoActorFlujo").val(),
            "idDependencia": $("#idDependencia").val(),
            "idTipoActividadFlujo": $("#tipoActividadFlujo").val(),
            "idEstatusActividad": $("#estatusActividadFlujo").val(),
            "idTipoDuracionFlujo": $("#tipoDuracionFlujo").val(),
            "duracion": $("#duracion").val(),
            "actividadRequerida": $("#requerida").prop('checked'),
            "nombre": $("#nombre").val(),
            "descripcion": $("#descripcion").val()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (elementoModificar == null) {
                addActividadToDiagram(res);
            } else {
                updateActividadToDiagram(res);
            }
            loadJsonToDiagram();
            guardarDiagramaFlujo((res) => {});
            elementoModificar = null;
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado la actividad', 'Actividades');
        },
        error: function(e) {
            if (e.status == 400) {
                if (e.responseJSON.code == 'ya_existe_nombre') {
                    $('#nombre').focus();
                    toast('warning', 'Ya existe una actividad con el nombre dado, escriba uno distinto.', 'Actividades');
                } else if (e.responseJSON.code == 'ya_existe_inicio') {
                    toast('warning', 'Ya existe una actividad de inicio en el flujo, elija otro tipo de actividad.', 'Actividades');
                } else if (e.responseJSON.code == 'ya_existe_fin') {
                    toast('warning', 'Ya existe una actividad de fin en el flujo, elija otro tipo de actividad.', 'Actividades');
                } else if (e.responseJSON.code == 'ya_existe_numero') {
                    $("#numeroActividad").focus();
                    toast('warning', 'Ya existe una actividad con número ' + $("#numeroActividad").val() + ' el flujo, escriba uno distinto.', 'Actividades');
                }
            } else {
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Actividades');
            }
            console.error(e);

        },
        complete: function() {
            $('#guardarElemento').removeAttr("disabled").show();
            $('#guardarElementoLoading').hide();
            $('#cancelar').removeAttr("disabled");
        }
    });
};

const getConnectorWhereFrom = (key, diagram) => {
    if (diagram) {
        for (let index = 0; index < diagram.connectors.length; index++) {
            const element = diagram.connectors[index];
            if (key == element.beginItemKey)
                return element;
        }
    }
    return null;
};

const mostrarEliminarActividad = () => {
    const item = getConnectorWhereFrom(elementoSeleccionadoDiagrama.key, jsonFlujo);
    if (item) {
        toast('info', 'Para eliminar la actividad, primero elimine las actividades hijas', 'Actividades');
        return;
    }

    $('#elementoEliminar').text(elementoSeleccionadoDiagrama.text);
    $('#idEliminar').val(elementoSeleccionadoDiagrama.dataKey);
    $('#eliminar-elemento-modal').modal('show');
};


const eliminarActividadDiagrama = () => {
    if (elementoSeleccionadoDiagrama) {
        for (let index = jsonFlujo.connectors.length - 1; index >= 0; index--) {
            const element = jsonFlujo.connectors[index];
            if (elementoSeleccionadoDiagrama.key == element.endItemKey) {
                jsonFlujo.connectors.splice(index, 1);
            }
        }

        for (let index = jsonFlujo.shapes.length - 1; index >= 0; index--) {
            const element = jsonFlujo.shapes[index];
            if (elementoSeleccionadoDiagrama.key == element.key) {
                jsonFlujo.shapes.splice(index, 1);
            }
        }
        loadJsonToDiagram();

        elementoSeleccionadoDiagrama = null;
        $('#elementoEliminar').text('');
        $('#idEliminar').val(null);
    }
};

const mostrarEditarActividad = () => {
    obtenerActividadFlujo((res) => {
        showModal(res);
    });

};

const obtenerActividadFlujo = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + '/ts/' + tramiteServicio.idTramiteServicio + '/flujo/actividades/' + elementoSeleccionadoDiagrama.dataKey,
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = window.MRM_REMTYS_APP_URL;
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Actividades');
            console.error(e);
        }
    });
};

var showDependencias = () => {
    obtenerDependenciasUsuario(window.MRM_USUARIO.idUsuario, (res) => {
        const enabledItems = $.map(res, function(n, i) { return n.idDependencia; });
        var dependencias = [];
        const dependencia = $('#idDependencia').val();
        if (dependencia)
            dependencias.push(parseInt(dependencia));
        let select = [];
        if (elementoModificar) {
            select.push(elementoModificar.idDependencia);
            if ($.inArray(elementoModificar.idDependencia, enabledItems) != -1)
                enabledItems.splice($.inArray(elementoModificar.idDependencia, enabledItems), 1);
        } else {

        }

        depmodal.show((res) => {
            if (res.length == 0) {
                $('#idDependencia').val(null);
                $('#dependencia').val('');
            } else {
                const dependencia = res[0];
                $('#idDependencia').val(dependencia.idDependencia);
                $('#dependencia').val(dependencia.nombre);
            }
        }, dependencias, 'single', enabledItems, false);
    });
};

const eliminar = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled')
    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + '/ts/' + tramiteServicio.idTramiteServicio + '/flujo/actividades/' + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            eliminarActividadDiagrama();
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado la actividad', 'Actividades');
            guardarDiagramaFlujo((res) => {});
        },
        error: function(e) {
            if (e.status == 400) {
                if (e.responseJSON.code == 'no_existe')
                    toast('warning', 'La actividad ya no existe, actualize su página por favor.', 'Actividades');
                else if (e.responseJSON.code == 'con_act_hijas')
                    toast('warning', 'La actividad no se puede eliminar ya que contiene actividades hijas.', 'Actividades');
            } else {
                toast('warning', 'No se pudo eliminar la actividad, intente más tarde.', 'Actividades');
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