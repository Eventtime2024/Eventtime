$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
    });
  let date=new Date("Jun 15 2024 00:00:00");
  function counts(){
      let now= new Date();
      gap=date - now;
  
    let days =Math.floor(gap/1000/60/60/24)
    let hours =Math.floor(gap/1000/60/60)%24;
    let minutes=Math.floor(gap/1000/60)%60;
    let seconds=Math.floor(gap/1000) % 60;
    let formatted_days = days.toString().padStart(2, '0');
    let formatted_hours = hours.toString().padStart(2, '0');
    let formatted_minutes = minutes.toString().padStart(2, '0');
    let formatted_seconds = seconds.toString().padStart(2, '0');
   $("#d").text(formatted_days)
   $("#h").text(formatted_hours) ;
    $("#m").text(formatted_minutes);
    $("#s").text(formatted_seconds);
    if(gap<0){
      $("#tillwedding").html("<p>ДЕНЬ СВАДБЫ"+"<br>"+"15.07.2024</p>")
      $("#group").text(" ")
    }
    if(days<2){
     $(".lastpart").css("display","none")
    }
  
  }
  counts();
  setInterval(counts,1000);
  
  
  let audio=document.getElementById("myAudio")
   $("#play").click(function(){
    if(($("#play").css("width")) == "110px"){
        $("#play").css("width", "100px");
        $("#play").css("border","none")
        audio.pause();
        audio.currentTime = 0;
    } 
    else {
        $("#play").css("width","110px");
        $("#play").css("border","3px solid #cdb577");
        audio.play();
    }
  });
  
  
  
  
 $(document).on("contextmenu", function(e) {
    e.preventDefault();
});
