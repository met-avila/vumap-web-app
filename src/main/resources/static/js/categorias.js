$(function() {
    loadCards();
    $('#elemento-form').submit(guardar);
    $('#eliminar-elemento-form').submit(eliminar);

    obtenerTiposRemtys(function(res) {
        res.forEach(elemento => {
            $('#f-tiposRemtys').append(new Option(elemento.nombre, elemento.idTipoRemtys));
            $('#tiposRemtys').append(new Option(elemento.nombre, elemento.idTipoRemtys));
        });
    });
});

const loadCards = () => {
    $("#jqCards")
        .jqCards({
            url: window.MRM_REMTYS_API_URL + "/categorias",
            datatype: "json",
            data: {},
            urlTemplateCard: 'templates/cardCategoria.html',
            selectorFilterControl: 'panelFiltro',
            filterControl: {
                layoutFilter: [{
                    selector: '#f-tiposRemtys',
                    property: 'idtr',
                    controlType: jqCards.controlType.DropDownList,
                    defaultValue: '-1'
                }, {
                    selector: '#f-nombre',
                    property: 'n',
                    controlType: jqCards.controlType.InputText
                }]
            },
            layoutCard: [{
                    selector: '.eliminar',
                    event: 'click',
                    eventFunction: function(elemento) {
                        $('#idEliminar').val(elemento.idCategoria);
                        $('#elementoEliminar').text(elemento.nombre);
                        $('#eliminar-elemento-modal').modal('show');
                    }
                },
                {
                    selector: '.editar',
                    event: 'click',
                    eventFunction: function(obj) {
                        $('#nombre').val(obj.nombre);
                        showModal(obj);
                    }
                }
            ],
            numCards: 10,
            preloadCard: function(data, card) {
                card.find('.nombre').text(data.nombre);
                card.find('.tipoRemtys').text(data.tipoRemtys.nombre);

                return card;
            },
            initLoadCards: function() {
                //  $(".preloader-background").show();
            },
            loadCardsComplete: function() {
                setPermisosMenu(4, ['.eliminar', '.editar', '.agregar']);
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
    if (elemento) {
        elementoModificar = elemento;
        $('#tiposRemtys').val(elementoModificar.tipoRemtys.idTipoRemtys);
        $('elemento-modal-title').text('Modificar categoría');
    } else {
        limpiarModal();
        elementoModificar = null;
        $('elemento-modal-title').text('Nueva categoría');
    }

    $('#elemento-modal').modal('show');
};

const limpiarModal = () => {
    $("#elemento-form :input:text").val('');
    $("#tiposRemtys").val($("#tiposRemtys option:first").val());
};

const guardar = (e) => {
    e.preventDefault();
    $('#guardar').attr('disabled', 'disabled').hide();
    $('#guardarLoading').show();
    $('#cancelar').attr('disabled', 'disabled')

    $.ajax({
        type: (elementoModificar) ? 'PUT' : 'POST',
        url: window.MRM_REMTYS_API_URL + "/categorias" + ((elementoModificar) ? ('/' + elementoModificar.idCategoria) : ''),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "nombre": $('#nombre').val(),
            "idTipoRemtys": $('#tiposRemtys').val()
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            limpiarFiltros();
            $('#elemento-modal').modal('hide');
            toast('info', 'Se ha guardado la categoría ' + res.nombre, 'Categorías');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400 && e.responseJSON.code == 'categoria_ya_existe') {
                $('#nombre').focus();
                toast('warning', 'Ya existe una categoría con el nombre dado, escriba uno distinto.', 'Categorías');
            } else {
                toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Categoráas');
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
        url: window.MRM_REMTYS_API_URL + "/categorias/" + $('#idEliminar').val(),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            limpiarFiltros();
            $('#eliminar-elemento-modal').modal('hide');
            toast('info', 'Se ha eliminado la categoría', 'Categorías');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 400) {
                $('#eliminar-elemento-modal').modal('hide');
                limpiarFiltros();
            } else {
                toast('warning', 'No se pudo eliminar la categoría, intente más tarde.', 'Categorías');
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