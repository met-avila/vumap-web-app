$(function() {
    $('#reset-password-form').submit(guardar);
});



const guardar = (e) => {
    const p = $('#p').val();
    const cp = $('#pc').val();
    if (p != cp) {
        e.preventDefault();
        $('#errorpwd').show();
        $('#pc').focus();
    }
};