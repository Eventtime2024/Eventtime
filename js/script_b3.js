var viewportWidth = window.innerWidth;

$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
   
})
$(document).on("contextmenu", function(e) {
    e.preventDefault();
});
$(document).ready(function(){
    var images = [
        "../img/b33.jpg",
        "../img/b333.jpg",
        "../img/b3.jpg"
    ];

    var currentIndex = 0;

    function changeBackground() {
        $(".brth_girl").css("backgroundImage", "url('" + images[currentIndex] + "')");
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 3000); 
});
