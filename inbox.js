$(document).ready(function () {
    $('.search').click(function () {
        $('.text').slideToggle(2000);
    });
    $('.cart').click(function () { 
    $('body').toggleClass('open');
    });
});