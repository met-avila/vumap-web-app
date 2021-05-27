$(function() {
    $.get(window.MRM_REMTYS_APP_URL + '/templates/t-generales.html', function(data) {
        $('#seccion-content').html(data);
    });
});