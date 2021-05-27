itemsDiagram = [];
$(function() {

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
        nodes: {
            dataSource: new DevExpress.data.ArrayStore({
                key: "this",
                data: itemsDiagram,
            }),
            keyExpr: "id",
            textExpr: (e) => {
                return e.nombre;
            },
            parentKeyExpr: "idParent",
            widthExpr: (e) => {
                return 2.5;
            },
            autoLayout: {
                orientation: 'vertical'
            }
        },
        type: "tree"
    }).dxDiagram("instance");

    obtenerFlujoInternoTS((res) => {
        mostrarFlujoInternoTS(res.perfilesFlujo);
        if (res.tsEnFlujo.length > 0) {
            $('.agregar').remove();
            $('.eliminar').remove();
        } else {
            $('.agregar').show();
            $('.eliminar').show();
        }
    });

    $('.agregar').click(onAgregarClick);
    $('.eliminar').click(onEliminarClick);
    $('#eliminar-elemento-form').submit(onEliminarElementoSubmit);
    $('#elemento-form').submit(onAgregarElementoSubmit);

});

const onAgregarElementoSubmit = (e) => {
    e.preventDefault();
    $('#guardarElemento').attr('disabled', 'disabled').hide();
    $('#guardarElementoLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    const url = window.MRM_REMTYS_API_URL + "/ts/flujo-interno";
    $.ajax({
        type: 'POST',
        url: url,
        data: {
            "idPerfil": $('#perfilFlujo').val(),
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            mostrarFlujoInternoTS(res);
            elementoModificar = null;
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha agregado el perfil', 'Flujo interno');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else if (e.status == 400) {
                toast('warning', e.responseJSON.message, 'Flujo interno');
            } else {
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Flujo interno');
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

const onEliminarElementoSubmit = (e) => {
    e.preventDefault();
    $('#eliminar').attr('disabled', 'disabled').hide();
    $('#eliminarLoading').show();
    $('#cancelarEliminar').attr('disabled', 'disabled');
    $.ajax({
        type: "DELETE",
        url: window.MRM_REMTYS_API_URL + "/ts/flujo-interno/" + elementoModificar.iddb + '/' + elementoModificar.idFlujo,
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            mostrarFlujoInternoTS(res);
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado el perfil', 'Flujo interno');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else if (e.status == 400) {
                toast('warning', e.responseJSON.message, 'Flujo interno');
            } else {
                toast('warning', 'No se pudo eliminar el perfil, intente más tarde.', 'Flujo interno');
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

function onDiagramSelectionChanged(e) {
    $('.eliminar').attr('disabled', 'disabled');
    elementoModificar = null;
    if (e.items.length == 1) {
        const item = e.items[0];
        if (item.itemType == 'shape') {
            elementoModificar = item.dataItem;
            const hasChild = hasChildDiagramItem(item.id);
            if (!hasChild)
                $('.eliminar').removeAttr('disabled');
        }
    }
}

const onAgregarClick = () => {
    $('#perfilFlujo').empty();
    obtenerPerfilesFlujoInterno((res) => {
        if ($.isArray(res.content)) {
            res.content.forEach(element => {
                $('#perfilFlujo').append(new Option(element.nombre, element.idPerfil));
            });
        }
        $('#elemento-modal').modal('show');
    });
};

const hasChildDiagramItem = (parentItemKey) => {
    let hasChild = false;
    const diagramjson = JSON.parse(myDiagram.export());
    const connectors = diagramjson.connectors;

    if ($.isArray(connectors)) {
        connectors.forEach(element => {
            if (element.beginItemKey == parentItemKey)
                hasChild = true;
        });
    }

    return hasChild;
};

const onEliminarClick = () => {
    $('#elementoEliminar').text(elementoModificar.nombre);
    $('#eliminar-elemento-modal').modal('show');
};

const mostrarFlujoInternoTS = (items) => {
    if ($.isArray(items)) {
        itemsDiagram.length = 0;
        const ditems = getDiagramItems(items);
        ditems.forEach(item => {
            itemsDiagram.push(item);
        });
        myDiagram._refreshDataSources();
    }
};

const getDiagramItems = (items) => {
    const ditems = [];
    let idParent = null;

    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        if (index == 0) {
            ditems.push({
                id: item.idFlujoInternoTys + '_' + item.idPerfilOrigen,
                nombre: item.nombrePerfilOrigen,
                idParent: idParent,
                iddb: item.idPerfilOrigen,
                idFlujo: item.idFlujoInternoTys
            });
            idParent = item.idFlujoInternoTys + '_' + item.idPerfilOrigen;

            if (item.idPerfilDestino != null) {
                ditems.push({
                    id: item.idFlujoInternoTys + '_' + item.idPerfilDestino,
                    nombre: item.nombrePerfilDestino,
                    idParent: idParent,
                    iddb: item.idPerfilDestino,
                    idFlujo: item.idFlujoInternoTys
                });
                idParent = item.idFlujoInternoTys + '_' + item.idPerfilDestino;
            }
        } else {
            ditems.push({
                id: item.idFlujoInternoTys + '_' + item.idPerfilDestino,
                nombre: item.nombrePerfilDestino,
                idParent: idParent,
                iddb: item.idPerfilDestino,
                idFlujo: item.idFlujoInternoTys
            });

            idParent = item.idFlujoInternoTys + '_' + item.idPerfilDestino;
        }
    }

    return ditems;
};

// const getDiagramItems = (items) => {
//     const ditems = [];
//     let idParent = null;
//     items.forEach(item => {
//         if (!existInItems(ditems, item.idPerfilOrigen)) {
//             ditems.push({
//                 id: item.idPerfilOrigen,
//                 nombre: item.nombrePerfilOrigen,
//                 idParent: idParent
//             });
//             idParent = item.idPerfilOrigen;
//         }
//         if (!existInItems(ditems, item.idPerfilDestino) && item.idPerfilDestino != null) {
//             ditems.push({
//                 id: item.idPerfilDestino,
//                 nombre: item.nombrePerfilDestino,
//                 idParent: idParent
//             });
//             idParent = item.idPerfilDestino;
//         }
//     });
//     return ditems;
// };

const existInItems = (items, id) => {
    for (let i = 0, j = items.length; i < j; i++)
        if (items[i].id == id)
            return true;
    return false;
};



var obtenerFlujoInternoTS = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/ts/flujo-interno",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Flujo interno');
            console.error(e);
        }
    });
};

var obtenerPerfilesFlujoInterno = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_USERS_API_URL + "/perfiles?pageSize=999",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Flujo interno');
            console.error(e);
        }
    });
};