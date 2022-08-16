$.fn.isInViewport = function() {
    var elementTop = $(this).offset()?.top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('scroll', function() {
    if($(window).scrollTop() >= 100)
        $('header nav').addClass('gradient')
    else
        $('header nav').removeClass('gradient') 
});

var sections = ["titles", "news", "about", "activities", "notes", "join", "contact"];
sections.forEach((el) => {
    setInterval(() => {
        if ($("section.categ#"+el).isInViewport())
            if($('section.categ#'+el).css('opacity') == 0) 
                $("section.categ#"+el).animate({opacity: 1}, 1000)
    })
})

$(document).ready(function() {
    $('body').animate({opacity: 1.0}, 1000);
    if($(window).scrollTop() >= 100)
        $('header nav').addClass('gradient')
})