$(function() {
    obtenerMiMunicipio((res) => {
        if (res) {
            if (res.urlLogoGrande)
                $('#imgLogoLogin').attr('src', res.urlLogoGrande);

            if (res.urlFondoLogin) {
                $('body').css('background-image', 'url(' + res.urlFondoLogin + ')');
            }

            if (res.urlFaveIcon) {
                $('#icono').attr('href', res.urlFaveIcon);
            }
        }
    });
});

const obtenerMiMunicipio = (callback) => {
    $.ajax({
        type: "GET",
        url: window.MRM_REMTYS_API_URL + "/p/mi-municipio",
        success: function(res) {
            if (callback) callback(res);
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            console.error(e);
        }
    });
};