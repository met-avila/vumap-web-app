const saveSettingsClick = () => {
    let theme = {};
    theme.themeOptions = String(classHolder.className).split(/[^\w-]+/).filter(function(item) {
        return /^(nav|header|mod|display)-/i.test(item);
    }).join(' ');
    if (document.getElementById('mytheme')) {
        theme.themeURL = document.getElementById('mytheme').getAttribute("href");
    };

    theme.htmlClass = $('html').attr('class');

    $.ajax({
        type: 'POST',
        url: window.MRM_REMTYS_API_URL + "/settings",
        data: {
            theme: JSON.stringify(theme)
        },
        beforeSend: function(xhr, settings) {
            xhr.setRequestHeader("Authorization", "Bearer " + window.MRM_TOKEN);
        },
        success: function(res) {
            toast('info', 'Se ha guardado la configuración', 'Configuración');
        },
        error: function(e) {
            if (e.status == 403)
                window.location = '/'
            else {
                toast('warning', 'No se pudo guardar la configuración, intente más tarde.', 'Configuración');
                console.error(e);
            }
        }
    });
}