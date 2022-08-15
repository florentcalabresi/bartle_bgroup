$(window).on('scroll', function() {
    if($(window).scrollTop() >= 100)
        $('header nav').addClass('gradient')
    else
        $('header nav').removeClass('gradient')
});
$(document).ready(function() {
    $('body').animate({opacity: 1.0}, 1000);
})

var Scrollbar = window.Scrollbar;
Scrollbar.init(document.querySelector('#my-scrollbar'));