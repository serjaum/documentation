$(document).ready(function () {
    $('.announcement_banner .icon').on('click', function (e) {
        sessionStorage.setItem('announcement_banner', 'closed');
        $('.announcement_banner').removeClass('open');
        $('html').removeClass('banner');
        $(window).trigger('scroll');
    });
});