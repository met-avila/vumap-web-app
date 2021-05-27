tramiteServicio = null;

myDiagram = null;

$(function() {

    $('#diagram').css('height', window.innerHeight - 170);

    textOnlyNumbers($("#duracion"));
    $('#elemento-form').submit(guardar);
    //$('.eliminar').click(mostrarEliminarActividad);
    $('.guardarDiagrama').click(() => {
        guardarDiagrama(true);
    });

    $('#cancelar,#cancelarEliminar').click(() => {
        loadJsonToDiagram();
    });

    $('#eliminar').click(eliminar);
    $('.editar').click(mostrarEditarActividad);

    $('#tipoActorFlujo').change(onTipoActorFlujoChange);

    myDiagram = $("#diagram").dxDiagram({
        contextMenu: { enabled: false },
        toolbar: { visible: false },
        toolbox: {
            visible: true,
            groups: [{ category: "ts", title: "Tipos de actividades" }]
        },
        viewToolbar: {
            visible: true
        },
        propertiesPanel: {
            visibility: 'disabled',

        },
        simpleView: true,
        historyToolbar: { visible: false },
        mainToolbar: { visible: false },
        //pageOrientation: 'landscape',
        onItemDblClick: onItemDblClick,
        itemClick: onItemClick,
        onSelectionChanged: onDiagramSelectionChanged,
        customShapes: [{
                category: "ts",
                type: "inicio",
                title: "Inicio",
                backgroundImageUrl: "/img/inicio.png",
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

            obtenerSeguimientoTS((data) => {
                window.MRM_SEGUIMIENTO_TS = data.seguimientos;
                adminReadOnlyDiagrama();
            });
        });
    } else {
        location.href = window.MRM_REMTYS_APP_URL + '/tramites-servicios';
    }

    $("#diagram").on("mouseup", onDiagramMouseup);
    //setPermisosMenu(12, ['.eliminar', '.editar', '.agregar']);

    $('#idActividadPredecesora').change(onActividadPredecesoraChange);

    $('#tipoDuracionFlujo').change(tipoDuracionFlujoChange);
});

var tipoDuracionFlujoChange = () => {
    //días
    if ($('#tipoDuracionFlujo').val() == 1) {
        $('#idTipoDiasTys').removeAttr('disabled').attr('required', 'required');
    } else {
        $('#idTipoDiasTys').removeAttr('required').attr('disabled', 'disabled');
        $("#idTipoDiasTys").val($("#idTipoDiasTys option:first").val());
    }
}

var onActividadPredecesoraChange = (a) => {
    const tipo = $("#idActividadPredecesora option:selected").attr('tipo');
    //Si es decisión
    if (tipo == 'decisionts') {
        $('#tipoDecision').attr('required', 'required').val(1);
        $('.tipoDecisionContainer').show();
    } else {
        $('#tipoDecision').removeAttr('required').val(1);
        $('.tipoDecisionContainer').hide();
    }
};

var onTipoActorFlujoChange = () => {
    const idTipoActor = $('#tipoActorFlujo').val();
    //Servidor Público
    if (idTipoActor == 1) {
        $('#btnMostrarDependencias').removeClass('disabled');
        $('#dependencia').attr('required', 'required').removeAttr('disabled');
    } else {
        $('#btnMostrarDependencias').addClass('disabled');
        $('#dependencia').attr('disabled', 'disabled').removeAttr('required').val('');
        $('#idDependencia').val(null);
    }
};

var obtenerSeguimientoTS = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/" + tramiteServicio.idTramiteServicio + "/seguimiento",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Seguimiento');
            console.error(e);
        }
    });
};

var adminReadOnlyDiagrama = () => {
    const tipoPermisoEditar = obtenerTipoPermisoMenuPerfilUsuario(3);
    const editablePorPerfil = esEditableTSPorPerfilUsuario();
    if (tipoPermisoEditar && editablePorPerfil) {} else {
        myDiagram.option('disabled', true);
        $('#guardar,#dep-seleccionar').remove();
        $('#elemento-modal').find('input, select, textarea').attr('disabled', 'disabled');
    }
};

var obtenerTipoPermisoMenuPerfilUsuario = (idTipoPermiso) => {
    let tipoPermiso = null;
    const menus = MRM_USUARIO.perfil.menus;
    menus.forEach(menu => {
        if (menu.idMenu == 8 && menu.permisosMenu) //tramites y servicios
        {
            menu.permisosMenu.forEach(pm => {
                if (pm.tipoPermisoMenu.idTipoPermiso == idTipoPermiso) {
                    tipoPermiso = pm.tipoPermisoMenu;
                }
            });
        }
    });

    return tipoPermiso;
};


var esEditableTSPorPerfilUsuario = () => {
    let editable = false;
    if (window.MRM_SEGUIMIENTO_TS && $.isArray(window.MRM_SEGUIMIENTO_TS)) {
        let ultimoSeguimiento = window.MRM_SEGUIMIENTO_TS[window.MRM_SEGUIMIENTO_TS.length - 1];
        if (ultimoSeguimiento.idPerfilAtiende == MRM_USER.perfil.idPerfil)
            editable = true;
    }
    return editable;
};

let currentDiagram = null;
const onDiagramMouseup = () => {
    currentDiagram = $.parseJSON(myDiagram.export());

    onInsertElementOnDiagram();
    onInsertEdgeOnDiagram();

    //Is diagram distin : save diagram only if not activity
    let isInsertActivity = false;
    if (isInsertElementOnDiagram()) {
        const element = getInsertedElementOnDiagram();
        if (element && (element.type == 'actividad' || element.type == 'procesots' || element.type == 'decisionts')) {
            isInsertActivity = true;
        }
    }
    if (!isInsertActivity) {
        if (diagramsAreUnsincronized()) {
            setTimeout(() => {
                guardarDiagrama(false);
            }, 210);
        }
    }
};

const diagramsAreUnsincronized = () => {
    let unsincronized = false;
    if (currentDiagram.connectors.length != jsonFlujo.connectors.length || currentDiagram.shapes.length != jsonFlujo.shapes.length)
        unsincronized = true;

    for (let index = 0; index < currentDiagram.connectors.length; index++) {
        const element = currentDiagram.connectors[index];
        const edgeJsonFlujo = getConnectorByKey(element.key, jsonFlujo);
        if (edgeJsonFlujo) {
            if (!areEqualsConnectors(element, edgeJsonFlujo)) {
                unsincronized = true;
                break;
            }
        } else {
            unsincronized = true;
            break;
        }
    }

    if (!unsincronized) {
        for (let index = 0; index < currentDiagram.shapes.length; index++) {
            const element = currentDiagram.shapes[index];
            const shapeJsonFlujo = getShapeByKey(element.key, jsonFlujo);
            if (shapeJsonFlujo) {
                if (!areEqualsShapes(element, shapeJsonFlujo)) {
                    unsincronized = true;
                    break;
                }
            } else {
                unsincronized = true;
                break;
            }
        }
    }
    return unsincronized;
};

const areEqualsShapes = (a, b) => {
    let isEqual = true;

    if (a.dataKey != b.dataKey)
        isEqual = false;
    else if (a.height != b.height)
        isEqual = false;
    else if (a.text != b.text)
        isEqual = false;
    else if (a.width != b.width)
        isEqual = false;
    else if (a.x != b.x)
        isEqual = false;
    else if (a.y != b.y)
        isEqual = false;

    return isEqual;
};


const areEqualsConnectors = (a, b) => {
    let isEqual = true;

    if (a.beginConnectionPointIndex != b.beginConnectionPointIndex)
        isEqual = false;
    else if (a.beginItemKey != b.beginItemKey)
        isEqual = false;
    else if (a.endConnectionPointIndex != b.endConnectionPointIndex)
        isEqual = false;
    else if (a.endItemKey != b.endItemKey)
        isEqual = false;
    else if (a.points.length != b.points.length)
        isEqual = false;
    else {
        for (let index = 0; index < a.points.length; index++) {
            const pointA = a.points[index];
            const pointB = b.points[index];

            if (pointA.x != pointB.x || pointA.y != pointB.y) {
                isEqual = false;
                break;
            }
        }
    }

    return isEqual;
};

const onInsertEdgeOnDiagram = () => {
    if (isInsertEdgeOnDiagram()) {
        const edge = getInsertedEdgeOnDiagram();
        if (edge) {
            if (edge.beginItemKey && edge.endItemKey) {
                manageInsertedEdge(edge);
            } else { //conector huerfano, quitarlo del diagrama
                setTimeout(() => {
                    loadJsonToDiagram();
                }, 100);
            }
        }
    }
};

const manageInsertedEdge = (edge) => {
    let isValid = true;
    const from = getShapeByKey(edge.beginItemKey, currentDiagram);
    const to = getShapeByKey(edge.endItemKey, currentDiagram);

    //No salir desde fin, No llegar a inicio
    if (from.type == 'fin' || to.type == 'inicio')
        isValid = false;
    else {
        //Solo permitir un enlace que salga de inicio
        if (from.type == 'inicio') {
            const shape = getShapeConectedFromEdgeByType('inicio', currentDiagram)
            if (shape != null)
                isValid = false;
        }
        //No permitir conexiones entre actividades
        if ((from.type != 'inicio' && from.type != 'fin') && (to.type != 'inicio' && to.type != 'fin'))
            isValid = false;
    }


    if (!isValid) {
        setTimeout(() => {
            loadJsonToDiagram();

        }, 100);
    } else {
        //Se insertó un edge hacia fin
        if (to.type = 'fin') {
            saveIdsActividadesFin();
        }
    }

};

const saveIdsActividadesFin = () => {
    let ids = getIdsActividadesFin();
    const url = window.MRM_REMTYS_API_URL + '/ts/' + tramiteServicio.idTramiteServicio + '/flujo/actividades-fin';
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            "ids": ids.join(',')
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            guardarDiagrama(false);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            console.error(e);
        }
    });
};

const getIdsActividadesFin = () => {
    const diagramc = $.parseJSON(myDiagram.export());
    let ids = [];
    for (let index = 0; index < diagramc.shapes.length; index++) {
        const element = diagramc.shapes[index];
        if (element.type == 'fin') {
            const edges = getConnectorsWhereTo(element.key, diagramc);
            for (let j = 0; j < edges.length; j++) {
                const edge = edges[j];
                const shape = getShapeByKey(edge.beginItemKey, diagramc)
                if (shape) {
                    ids.push(shape.dataKey);
                }
            }
        }
    }
    return ids;
};

const getInsertedEdgeOnDiagram = () => {
    for (let index = 0; index < currentDiagram.connectors.length; index++) {
        const element = currentDiagram.connectors[index];
        const item = getConnectorByKey(element.key, jsonFlujo);
        if (item == null) {
            return element;
        }
    }
    return null;
};

const isInsertEdgeOnDiagram = () => {
    if (currentDiagram && jsonFlujo) {
        if (currentDiagram.connectors.length > jsonFlujo.connectors.length) {
            return true;
        }
    }
    return false;
};

const onInsertElementOnDiagram = () => {
    if (isInsertElementOnDiagram()) {
        const element = getInsertedElementOnDiagram();
        if (element) {
            switch (element.type) {
                case 'actividad':
                case 'procesots':
                case 'decisionts':
                    {
                        onInsertActividadOnDiagram(element.type);
                        break;
                    }
                case 'inicio':
                    {
                        onInsertInicioOnDiagram();
                        break;
                    }
                case 'fin':
                    {
                        onInsertFinOnDiagram();
                        break;
                    }
            }
        }
    }
};

const onInsertFinOnDiagram = () => {
    const inicio = getShapeByType('inicio', jsonFlujo);
    //Debe haber un inicio primero
    if (inicio == null) {
        setTimeout(() => {
            loadJsonToDiagram();
        }, 100);
        toast('info', 'Primero agregue un elemento de inicio al flujo.', 'Actividades');
        return;
    }

    const item = getInsertedElementOnDiagram();
    if (item) {
        jsonFlujo.shapes.push(item);
        setTimeout(() => {
            sincronizeDiagrams();
        }, 100);
    }
};

const onInsertActividadOnDiagram = (type) => {
    const inicio = getShapeByType('inicio', jsonFlujo);
    //Debe haber un inicio primero
    if (inicio == null) {
        setTimeout(() => {
            loadJsonToDiagram();
        }, 100);
        toast('info', 'Primero agregue un elemento de inicio al flujo.', 'Actividades');
        return;
    }
    let idTipoActividad = getIdTipoActividadByTypeElement(type);
    $("#tipoActividadFlujo").val(idTipoActividad);
    fillActividadPredecesoraSelect();
    showModal();
};

const fillActividadPredecesoraSelect = () => {
    clearSelect($('#idActividadPredecesora'));
    jsonFlujo.shapes.forEach(item => {
        if (item.type != 'fin') {
            const option = $("<option>").attr('tipo', item.type).val(item.dataKey).text(item.text);
            $('#idActividadPredecesora').append(option);
        }
    });
};

const getIdTipoActividadByTypeElement = (type) => {
    let idTipoActividad = null;
    if (type == 'actividad') idTipoActividad = 1;
    else if (type == 'procesots') idTipoActividad = 2;
    else if (type == 'decisionts') idTipoActividad = 3;

    return idTipoActividad;
}

const isInsertElementOnDiagram = () => {
    if (currentDiagram && jsonFlujo) {
        if (currentDiagram.shapes.length > jsonFlujo.shapes.length) {
            return true;
        }
    }
    return false;
};

const getInsertedElementOnDiagram = () => {
    for (let index = 0; index < currentDiagram.shapes.length; index++) {
        const element = currentDiagram.shapes[index];
        const item = getShapeByKey(element.key, jsonFlujo);
        if (item == null) {
            return element;
        }
    }
    return null;
};

const onInsertInicioOnDiagram = () => {
    const type = 'inicio';
    const shapes = getShapesByType(type, currentDiagram);
    if (shapes.length > 1) {
        let shape = getShapeByType(type, jsonFlujo);
        if (shape != null) {
            toast('info', 'Solo se permite un elemento inicio en el diagrama.', 'Actividades');
            setTimeout(() => {
                loadJsonToDiagram();
            }, 100);
        }
    } else {
        //Agregar el primer elemento de inicio en el diagrama
        shape = getShapeByTypeAndKey(shapes[0].type, shapes[0].key, jsonFlujo);
        if (shape == null) {
            shapes[0].dataKey = 'inicio';
            jsonFlujo.shapes.push(shapes[0]);
            setTimeout(() => {
                sincronizeDiagrams();
            }, 100);
        }
    }
};





const sincronizeDiagrams = () => {
    if (jsonFlujo && currentDiagram) {
        jsonFlujo.connectors = [];
        for (let index = 0; index < currentDiagram.connectors.length; index++) {
            const element = currentDiagram.connectors[index];
            jsonFlujo.connectors.push(element);
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
    if (e.item && e.item.itemType == 'shape' && e.item.type != 'inicio' && e.item.type != 'fin') {
        fillActividadPredecesoraSelect();
        elementoSeleccionadoDiagrama = getShapeByKey(e.item.id, jsonFlujo);
        mostrarEditarActividad();
    }
};


const onItemClick = (e) => {};


selectedItem = null;
elementoSeleccionadoDiagrama = null;
elementoEliminar = null;
const checkIfElementDelete = () => {
    if (myDiagram && jsonFlujo) {
        const diagram = $.parseJSON(myDiagram.export());
        for (let index = jsonFlujo.shapes.length - 1; index >= 0; index--) {
            const item = jsonFlujo.shapes[index];
            const shape = getShapeByKey(item.key, diagram);
            if (shape == null) {
                isDeleted = true;

                const edge = getConnectorWhereFrom(item.key, jsonFlujo);
                if (edge) {
                    toast('info', 'Primero debe eliminar las actividades hijas', 'Flujo de trabajo');
                    loadJsonToDiagram();
                    return;
                }

                if (item.type == 'inicio') {
                    if (jsonFlujo.shapes.length > 1) {
                        toast('info', 'Primero debe eliminar las actividades hijas', 'Flujo de trabajo');
                        loadJsonToDiagram();
                    } else {
                        jsonFlujo.shapes = [];
                        loadJsonToDiagram();
                    }

                } else if (item.type == 'fin') {
                    jsonFlujo.shapes.splice(index, 1);
                    deleteEdgeFromShapeKey(item.key, jsonFlujo);
                    loadJsonToDiagram();
                    //Se elimina un shape fin, guardar actividades fin
                    saveIdsActividadesFin();
                } else if (item.type != 'inicio') {
                    elementoEliminar = item;
                    $('#idEliminar').val(item.dataKey);
                    $('#elementoEliminar').text(item.text);
                    $('#eliminar-elemento-modal').modal('show');
                }
                break;
            }
        }
    }
};

const deleteEdgeFromShapeKey = (key, diagram) => {
    if (diagram) {
        for (let index = diagram.connectors.length - 1; index >= 0; index--) {
            const element = diagram.connectors[index];
            if (key == element.beginItemKey || key == element.endItemKey)
                diagram.connectors.splice(index, 1);
        }
    }
};
selectedItems = [];

function onDiagramSelectionChanged(e) {
    if (e.items.length == 0) {
        if (selectedItems.length == 1) {
            checkIfElementDelete(e);
            checkIfEdgeDelete(e);
            checkIfOrphanEdge();
        } else {
            loadJsonToDiagram();
        }
    }
    selectedItems = e.items;
}

const checkIfOrphanEdge = () => {
    const diagram = $.parseJSON(myDiagram.export());
    for (let index = diagram.connectors.length - 1; index >= 0; index--) {
        const item = diagram.connectors[index];
        if (!item.beginItemKey || !item.endItemKey) {
            loadJsonToDiagram();
            break;
        }
    }
};

const checkIfEdgeDelete = () => {
    if (myDiagram && jsonFlujo) {
        const diagram = $.parseJSON(myDiagram.export());
        for (let index = jsonFlujo.connectors.length - 1; index >= 0; index--) {
            const item = jsonFlujo.connectors[index];
            const edge = getConnectorByKey(item.key, diagram);
            if (edge == null) {
                const edges = getEdgesByFromTo(item.beginItemKey, item.endItemKey, jsonFlujo);
                //Si hay mas edges conectados a los mismos elementos, eliminar el edge
                if (edges.length > 1) {
                    for (let i = 0; i < jsonFlujo.connectors.length; i++) {
                        const conector = jsonFlujo.connectors[i];
                        if (conector.key == item.key) {
                            jsonFlujo.connectors.splice(i, 1);
                            loadJsonToDiagram();
                            break;
                        }
                    }
                } else {
                    loadJsonToDiagram();
                }
                break;
            }
        }
    }
};

const getEdgesByFromTo = (from, to, diagram) => {
    let edges = [];
    if (diagram) {
        for (let index = 0; index < diagram.connectors.length; index++) {
            const element = diagram.connectors[index];
            if (from == element.beginItemKey && to == element.endItemKey)
                edges.push(element);
        }
    }
    return edges;
};

const getShapesByType = (type, diagram) => {
    let shapes = [];
    if (diagram) {
        for (let index = 0; index < diagram.shapes.length; index++) {
            const element = diagram.shapes[index];
            if (type == element.type) {
                shapes.push(element);
            }
        }
    }
    return shapes;
};

const getShapeByType = (type, diagram) => {
    if (diagram) {
        for (let index = 0; index < diagram.shapes.length; index++) {
            const element = diagram.shapes[index];
            if (type == element.type) {
                return element;
            }
        }
    }
    return null;
};

const getShapeConectedFromEdgeByType = (type, diagram) => {
    if (diagram) {
        for (let index = 0; index < diagram.connectors.length; index++) {
            const element = diagram.connectors[index];
            const from = getShapeByKey(element.beginItemKey, diagram);
            if (from.type == type)
                return element;
        }
    }
    return null;
};

const getShapeByTypeAndKey = (type, key, diagram) => {
    if (diagram) {
        for (let index = 0; index < diagram.shapes.length; index++) {
            const element = diagram.shapes[index];
            if (type == element.type && key == element.key)
                return element;
        }
    }
    return null;
};


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
    if (jsonFlujo) {
        myDiagram.import(JSON.stringify(jsonFlujo));
        currentDiagram = $.parseJSON(myDiagram.export());
    }
    //$('.eliminar').attr('disabled', 'disabled');
    //$('.editar').attr('disabled', 'disabled');
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
    for (let index = 0; index < jsonFlujo.shapes.length; index++) {
        const element = jsonFlujo.shapes[index];
        if (element.dataKey == actividad.idActividadFlujo) {
            const shape = jsonFlujo.shapes[index];
            shape.text = actividad.nombre;


            //Para cambiar el texto del nodo que va de decision a actividad
            let sinoText = null;
            if (actividad.tipoSiNo === true) {
                sinoText = 'SI';
            } else if (actividad.tipoSiNo === false) {
                sinoText = 'NO';
            }
            if (sinoText != null) {
                const edges = getConnectorsWhereTo(shape.key, jsonFlujo);
                if (edges.length > 0) {
                    edges[0].texts = { 0.5: sinoText }
                }
            }



            loadJsonToDiagram();
            break;
        }
    }
};

const addActividadToDiagram = (actividad) => {
    const shape = getInsertedElementOnDiagram();
    if (shape) {
        shape.dataKey = actividad.idActividadFlujo;
        shape.text = actividad.nombre;
        jsonFlujo.shapes.push(shape);
        const actp = getActividadFromDiagram($("#idActividadPredecesora").val());
        if (actp) {
            let sinoText = null;
            if (actividad.tipoSiNo === true) {
                sinoText = 'SI';
            } else if (actividad.tipoSiNo === false) {
                sinoText = 'NO';
            }
            addEdgeToDiagram(actp.key, shape.key, sinoText);
        }
    }
};

const addEdgeToDiagram = (beginItemKey, endItemKey, edgeText) => {
    const key = getuuidEdge();
    const edge = {
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
    };

    if (edgeText) {
        edge.texts = { 0.50: edgeText };
    }

    jsonFlujo.connectors.push(edge);
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

const guardarDiagrama = (showMessage) => {
    checkIfOrphanEdge();
    sincronizeDiagrams();
    guardarDiagramaFlujo((res) => {
        if (showMessage === true)
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
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400 && e.responseJSON.code == 'no_existe')
            ; // toast('info', 'Primero agregue actividades al flujo.', 'Flujo de trabajo');
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
                window.location = '/'
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
                window.location = '/'
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

    res.tipoDias.forEach(elemento => {
        $('#idTipoDiasTys').append(new Option(elemento.nombre, elemento.idTipoDiasTys));
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
                window.location = '/'
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
                window.location = '/'
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
        if (element.tipoDiasTys)
            $("#idTipoDiasTys").val(element.tipoDiasTys.idTipoDiasTys);
        $("#descripcion").val(element.descripcion);

        onActividadPredecesoraChange();
        $('#tipoDecision').val(element.tipoSiNo ? 1 : 0);

        $('#elemento-modal-title').text('Modificar actividad');
    } else {
        elementoModificar = null;
        $('#idActividadPredecesora').removeAttr('disabled');
        $('#elemento-modal-title').text('Nueva actividad');
        onActividadPredecesoraChange();
    }

    onTipoActorFlujoChange();

    tipoDuracionFlujoChange();

    $('#elemento-modal').modal('show');


};

const limpiarModal = () => {
    $("#tipoActorFlujo").val('');

    $("#nombre").val('');
    $("#dependencia").val('');
    $("#idDependencia").val(null);
    $("#requerida").prop('checked', false);
    $("#duracion").val('');
    $("#descripcion").val('');

    $("#estatusActividadFlujo").val($("#estatusActividadFlujo option:first").val());
    $("#tipoDuracionFlujo").val($("#tipoDuracionFlujo option:first").val());
};

const guardar = (e) => {
    e.preventDefault();
    $('#guardarElemento').attr('disabled', 'disabled').hide();
    $('#guardarElementoLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    let idActPre = $("#idActividadPredecesora").val();
    if (idActPre == 'inicio')
        idActPre = null;
    const url = window.MRM_REMTYS_API_URL + '/ts/' + tramiteServicio.idTramiteServicio + '/flujo/actividades';

    let tipoSiNo = null;
    const tipo = $("#idActividadPredecesora option:selected").attr('tipo');
    if (tipo == 'decisionts') {
        tipoSiNo = $("#tipoDecision").val() == 1;
    }

    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: url + ((elementoModificar) ? ('/' + elementoModificar.idActividadFlujo) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "idActividadPredecesora": idActPre,
            "idTipoActorFlujo": $("#tipoActorFlujo").val(),
            "idDependencia": $("#idDependencia").val(),
            "idTipoActividadFlujo": $("#tipoActividadFlujo").val(),
            "idEstatusActividad": $("#estatusActividadFlujo").val(),
            "idTipoDuracionFlujo": $("#tipoDuracionFlujo").val(),
            "duracion": $("#duracion").val(),
            "actividadRequerida": $("#requerida").prop('checked'),
            "nombre": $("#nombre").val(),
            "descripcion": $("#descripcion").val(),
            "tipoSiNo": tipoSiNo,
            "idTipoDiasTys": $('#idTipoDiasTys').val(),
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
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                if (e.responseJSON.code == 'ya_existe_nombre') {
                    $('#nombre').focus();
                    toast('warning', 'Ya existe una actividad con el nombre dado, escriba uno distinto.', 'Actividades');
                } else if (e.responseJSON.code == 'ya_existe_inicio') {
                    toast('warning', 'Ya existe una actividad de inicio en el flujo, elija otro tipo de actividad.', 'Actividades');
                } else if (e.responseJSON.code == 'ya_existe_fin') {
                    toast('warning', 'Ya existe una actividad de fin en el flujo, elija otro tipo de actividad.', 'Actividades');
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

const getConnectorsWhereTo = (key, diagram) => {
    let connector = [];
    if (diagram) {
        for (let index = 0; index < diagram.connectors.length; index++) {
            const element = diagram.connectors[index];
            if (key == element.endItemKey)
                connector.push(element);
        }
    }
    return connector;
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
    for (let index = 0; index < jsonFlujo.shapes.length; index++) {
        const element = jsonFlujo.shapes[index];
        if (element.key == elementoEliminar.key) {
            jsonFlujo.shapes.splice(index, 1);
            break;
        }

    }
    deleteEdgeFromShapeKey(elementoEliminar.key, jsonFlujo);
    loadJsonToDiagram();
};

const mostrarEditarActividad = () => {
    $('#idActividadPredecesora').attr('disabled', 'disabled');
    obtenerActividadFlujo((res) => {
        if (res.idActividadPredecesora)
            $('#idActividadPredecesora').val(res.idActividadPredecesora);
        else
            $('#idActividadPredecesora').val('inicio');

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
                window.location = '/'
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
            if (e.status == 403)
                window.location = '/'
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