var viewportWidth = window.innerWidth;

$(window).on( 'load', function() {
    $(".hidden1").css("display","none");
    $("#seall1 button").text("Показать все");
    $(".hidden2").css("display","none");
    $("#seall2 button").text("Показать все");
    $(".hidden3").css("display","none");
    $("#seall3 button").text("Показать все")
})
$(document).on("contextmenu", function(e) {
    e.preventDefault();
});
$(document).ready(function(){
    
    $("#seall1").click(function(){
        if($(".hidden1").css("display")=="flex"){
        $(".hidden1").css("display","none");
        $("#seall1 button").text("Показать все")
        }
        else{
            $(".hidden1").css("display","flex");
            $("#seall1 button").text("Скрыть")
        }
    })

    $("#seall2").click(function(){
        if($(".hidden2").css("display")=="flex"){
        $(".hidden2").css("display","none");
        $("#seall2 button").text("Показать все")
        }
        else{
            $(".hidden2").css("display","flex");
            $("#seall2 button").text("Скрыть")
        }
    })
     
        $("#seall3").click(function(){
            if($(".hidden3").css("display")=="flex"){
            $(".hidden3").css("display","none");
            $("#seall3 button").text("Показать все")
            }
            else{
                $(".hidden3").css("display","flex");
                $("#seall3 button").text("Скрыть")
            }
        })
})

$(".menu_bar").click(function(){
     
        $("#hiddenmenu").css("right","0%");
   
})
$("#closeicon").click(function(){
     
    $("#hiddenmenu").css("right","-50%");

})
