dependenciasDiagram = [];
$(function() {
    $('#elemento-form').submit(guardar);
    $('.eliminar').click(mostrarEliminarDependencia);
    $('#eliminar').click(eliminar);
    $('.editar').click(mostrarEditarDependencia);

    myDiagram = $("#diagram").dxDiagram({
        contextMenu: {
            enabled: false
        },
        toolbar: { visible: false },
        toolbox: { visible: false },
        mainToolbar: { visible: false },
        pageOrientation: 'landscape',
        readOnly: true,
        onSelectionChanged: onDiagramSelectionChanged,
        onItemDblClick: onItemDblClick,
        nodes: {
            dataSource: new DevExpress.data.ArrayStore({
                key: "this",
                data: dependenciasDiagram,
            }),
            keyExpr: "idDependencia",
            textExpr: (e) => {
                return e.nombre + '\n' + e.nombreTitular;
            },
            parentKeyExpr: "idDependenciaPadre",
            widthExpr: (e) => {
                return 2.5;
            },
        },
        layout: "tree"
    }).dxDiagram("instance");

    obtenerDependencias(mostrarDependenciasEnDiagrama);

    setPermisosMenu(10, ['.eliminar', '.editar', '.agregar']);
});

const onItemDblClick = (e) => {
    if (e.item && e.item.itemType == 'shape') {
        elementoModificar = e.item.dataItem;
        mostrarEditarDependencia();
    }
};

function onDiagramSelectionChanged(e) {
    $('.eliminar').attr('disabled', 'disabled');
    $('.editar').attr('disabled', 'disabled');
    elementoModificar = null;
    if (e.items.length == 1) {
        const item = e.items[0];
        if (item.itemType == 'shape') {
            elementoModificar = item.dataItem;
            $('.eliminar').removeAttr('disabled');
            $('.editar').removeAttr('disabled');
        }
    }
}

const mostrarEliminarDependencia = () => {
    $('#elementoEliminar').text(elementoModificar.nombre);
    $('#idEliminar').val(elementoModificar.idDependencia);
    $('#eliminar-elemento-modal').modal('show');
};

const eliminarDependenciaDiagrama = () => {
    if (elementoModificar) {
        for (let index = 0; index < dependenciasDiagram.length; index++) {
            const element = dependenciasDiagram[index];
            if (element.idDependencia == elementoModificar.idDependencia) {
                dependenciasDiagram.splice(index, 1);
                myDiagram._refreshDataSources();
                break;
            }
        }
    }
};

const mostrarEditarDependencia = () => {
    if (elementoModificar.idDependenciaPadre) {
        obtenerDependencia(elementoModificar.idDependenciaPadre, (res) => {
            if (res)
                elementoModificar.dependenciaPadre = res;
            showModal(elementoModificar);
        });
    } else {
        showModal(elementoModificar);
    }
};

const mostrarDependenciasEnDiagrama = (res) => {
    addDependenciaToDiagram(res);
    myDiagram._refreshDataSources();
};

const addDependenciaToDiagram = (dependencias) => {
    if ($.isArray(dependencias) && dependencias.length > 0) {
        dependencias.forEach(dependencia => {
            dependenciasDiagram.push(dependencia);
            if (dependencia.dependencias)
                addDependenciaToDiagram(dependencia.dependencias);
        });
    }
};

const modificarItemDiagrama = (res) => {
    for (let index = 0; index < dependenciasDiagram.length; index++) {
        let element = dependenciasDiagram[index];
        if (element.idDependencia == res.idDependencia) {
            dependenciasDiagram[index] = res;
            myDiagram._refreshDataSources();
            break;
        }
    }
};

const obtenerDependenciasEnabled = (idDep, dependencias) => {
    let idDisabed = [];

    const nest = (items, id = null, link = 'idDependenciaPadre') =>
        items
        .filter(item => item[link] == id)
        .map(item => ({...item, dependencias: nest(items, item.idDependencia) }));

    const tree = nest(dependencias);

    const searchChild = (idDependencia, parent, item) => {
        if (parent.dependencias) {
            for (let index = 0; index < parent.dependencias.length; index++) {
                const dependencia = parent.dependencias[index];
                if (dependencia.idDependencia == idDependencia) {
                    item = dependencia;
                    return item;
                }
                item = searchChild(idDependencia, dependencia, item);
                if (item != null)
                    return item;
            }
        }
        return null;
    }

    let dep = null;
    for (let index = 0; index < tree.length; index++) {
        const element = tree[index];
        if (idDep == element.idDependencia) {
            dep = element;
            break;
        } else
            dep = searchChild(idDep, element, null);
        if (dep != null)
            break;
    }

    let ids = [];
    if (dep != null && $.isArray(dep.dependencias)) {
        const deps = (items) =>
            items.forEach(item => {
                ids.push(item.idDependencia);
                if (item.dependencias) {
                    deps(item.dependencias);
                }
            });
        deps(dep.dependencias);
    }
    return ids;
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

            //Des-habilitar las dependencias hijas de la dependencia a modificar, ya que no se puede 
            //asignar com pader a una dependencia hija.
            const deps = obtenerDependenciasEnabled(elementoModificar.idDependencia, res);
            if (deps.length > 0) {
                for (let index = enabledItems.length - 1; index >= 0; index--) {
                    const element = enabledItems[index];
                    if ($.inArray(element, deps) != -1)
                        enabledItems.splice(index, 1);
                }
            }

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

var obtenerUbicaciones = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ubicaciones",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Ubicaciones');
            console.error(e);
        }
    });
};

var obtenerDependencia = (idDependencia, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/dependencias/" + idDependencia,
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Dependencias');
            console.error(e);
        }
    });
};

var elementoModificar = null;
const showModal = (element) => {
    if (element) {
        elementoModificar = element;
        if (elementoModificar.dependenciaPadre) {
            $("#idDependencia").val(elementoModificar.dependenciaPadre.idDependencia);
            $("#dependencia").val(elementoModificar.dependenciaPadre.nombre);
        } else {
            $("#idDependencia").val(null);
            $("#dependencia").val('');
        }

        $("#nombre").val(elementoModificar.nombre);
        $("#descripcion").val(elementoModificar.descripcion);
        $("#nombreTitular").val(elementoModificar.nombreTitular);

        $('#elemento-modal-title').text('Modificar dependencia u organismo');
    } else {
        elementoModificar = null;
        limpiarModal();
        $('#notaActualizarRecurso').hide();
        $('#elemento-modal-title').text('Nueva dependencia u organismo');
    }

    obtenerUbicaciones((res) => {
        clearSelect($('#idUbicacion'), null, '');
        res.content.forEach(item => {
            $('#idUbicacion').append(new Option(item.nombre, item.idUbicacion));
        });

        if (elementoModificar)
            $("#idUbicacion").val(elementoModificar.idUbicacion);
        $('#elemento-modal').modal('show');
    });
};

const limpiarModal = () => {
    $("#idDependencia").val(null);
    $("#dependencia").val('');
    $("#nombre").val('');
    $("#descripcion").val('');
    $("#nombreTitular").val('');
};

const guardar = (e) => {
    e.preventDefault();
    $('#guardarElemento').attr('disabled', 'disabled').hide();
    $('#guardarElementoLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    const url = window.MRM_REMTYS_API_URL + '/dependencias';
    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: url + ((elementoModificar) ? ('/' + elementoModificar.idDependencia) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "idDependenciaPadre": $('#idDependencia').val(),
            "nombre": $('#nombre').val(),
            "descripcion": $('#descripcion').val(),
            "idUbicacion": $('#idUbicacion').val(),
            "nombreTitular": $('#nombreTitular').val()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (elementoModificar == null) {
                dependenciasDiagram.push(res);
                myDiagram._refreshDataSources()
            } else {
                modificarItemDiagrama(res);
            }

            elementoModificar = null;
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado la dependencia', 'Dependencias');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400 && e.responseJSON.code == 'ya_existe') {
                $('#nombre').focus();
                toast('warning', 'Ya existe una dependencia con el nombre dado, escriba uno distinto.', 'Dependencias');
            } else {
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Dependencias');
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



const eliminar = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled')
    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + "/dependencias/" + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            eliminarDependenciaDiagrama();
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado la dependencia', 'Dependencias');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                if (e.responseJSON.code == 'no_existe')
                    toast('warning', 'La dependencia ya no existe, actualize su página por favor.', 'Dependencias');
                else if (e.responseJSON.code == 'con_dependencias')
                    toast('warning', 'La dependencia no se puede eliminar ya que contiene dependencias hijas.', 'Dependencias');
                else if (e.responseJSON.code == 'con_tramites_servicios')
                    toast('warning', 'La dependencia no se puede eliminar ya que contiene trámites o servicios relacionados.', 'Dependencias');
                else if (e.responseJSON.code == 'con_usuarios_asignados')
                    toast('warning', 'La dependencia no se puede eliminar ya que contiene usuarios asignados.', 'Dependencias');
                else if (e.responseJSON.code == 'con_recursos_asignados')
                    toast('warning', 'La dependencia no se puede eliminar ya que contiene recursos asignados.', 'Dependencias');
            } else {
                toast('warning', 'No se pudo eliminar la dependencia, intente más tarde.', 'Dependencias');
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

function getChildNodes(deleteNode) {
    var children = [];
    var allConnected = deleteNode.findNodesConnected();

    while (allConnected.next()) {
        var child = allConnected.value;

        // Check to see if this node is a child:
        if (deleteNode.data.key == child.data.parent) {
            // add the current child
            children.push(child);

            // Now call the recursive function again with the current child
            // to get its sub children
            var subChildren = getChildNodes(child);

            // add all the children to the children array
            $.each(subChildren, function() {
                children.push(this);
            });
        }
    }

    // return the children array
    return children;
}