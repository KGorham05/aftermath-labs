$(document).ready(function () {

    $('#logo').on('click', function () {
        $('#logo').addClass('animate-it');
        setTimeout(() => {
            window.location.href = "./contact.html";
        },
            1000);
    })
});