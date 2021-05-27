$(function() {
    $('#perfil-form').submit(guardar);
    miMunicipioLoad();
    $('#estado').change(estadoChange);
    setPermisosMenu(5, ['.editar']);
});


const estadoChange = () => {
    clearSelect($('#municipio'));
    const claveEdo = $('#estado').val();
    if (claveEdo) {
        obtenerMunicipiosEstado(claveEdo, function(municipios) {
            municipios.forEach(municipio => {
                $('#municipio').append(new Option(municipio.nombre, municipio.claveMun));
            });
        });
    }
};


const miMunicipioLoad = () => {
    obtenerMiMunicipio((mimunicipio) => {
        if (mimunicipio.administracion)
            $('#administracion').val(mimunicipio.administracion);
        if (mimunicipio.nombreAMostrar)
            $('#nombreAMostrar').val(mimunicipio.nombreAMostrar);

        obtenerEstados((estados) => {
            estados.forEach(elemento => {
                $('#estado').append(new Option(elemento.nombre, elemento.claveEdo));
            });
            if (mimunicipio.claveEdo) {
                $('#estado').val(mimunicipio.claveEdo);
                obtenerMunicipiosEstado(mimunicipio.claveEdo, (municipios) => {
                    municipios.forEach(elemento => {
                        $('#municipio').append(new Option(elemento.nombre, elemento.claveMun));
                    });
                    if (mimunicipio.claveMun)
                        $('#municipio').val(mimunicipio.claveMun);
                });
            }
        });
    });
};

const obtenerEstados = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/estados",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Estados');
            console.error(e);
        }
    });
};

const obtenerMunicipiosEstado = (claveEdo, callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/estados/" + claveEdo + "/municipios",
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Remtys API:Municipios');
            console.error(e);
        }
    });
};

const guardar = (e) => {
    e.preventDefault();

    $('#guardar').attr('disabled', 'disabled').hide();
    $('#guardarLoading').show();
    $.ajax({
        type: "POST",
        url: window.MRM_REMTYS_API_URL + "/mi-municipio",
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            claveEdo: $('#estado').val(),
            claveMun: $('#municipio').val(),
            nombreAMostrar: $('#nombreAMostrar').val(),
            administracion: $('#administracion').val(),
        }),
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardado la información del municipio', 'Mi municipio');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            if (e.status == 0)
                toast('warning', 'No se puede conectar al sistema, intente más tarde.', 'Mi municipio');
            else toast('warning', 'No se pudo guardar la información, intente más tarde.', 'Mi municipio');
            console.error(e);
        },
        complete: function() {
            $('#guardar').removeAttr("disabled").show();
            $('#guardarLoading').hide();
        }
    });
};