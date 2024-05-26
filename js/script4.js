$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
    });


    let audio=document.getElementById("myAudio")
 $("#play").click(function(){
    audio.play();
      $(".firstpart").css("opacity","0");
     
 
});
$(document).on("contextmenu", function(e) {
  e.preventDefault();
});
