$(window).on( 'load', function() {
    $('html, body').animate({scrollTop : 0});
    $("#play").css("display","block");
    $("#pause").css("display","none");
    });

    let date=new Date("September 09 2024 00:00:00");
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
    $("#tillwedding").html("<p>ДЕНЬ СВАДБЫ"+"<br>"+"09.09.2024</p>")
    $("#group").text(" ")
  }
  if(days<2){
   $(".lastpart").css("display","none")
  }

}
counts();
setInterval(counts,1000);


$("#btn1").click(function(){
    $(window).on( 'load', function() {
        $('html, body').animate({scrollTop : 0});
        });
    $(".dearfrend").text("Հարգելի հյուրեր");
    $(".text").text("Մեծ սիրով  հրավիրում ենք Ձեզ կիսելու մեզ հետ մեր կյանքի ամենակարևոր օրը, երբ մենք կդառնանք ամուսին և կին։ Մենք համոզված ենք, որ Ձեր մասնակցությունը մեր տոնը կդարձնի ավելի գեղեցիկ և անմոռանալի։")
    $("#text1").text("Հյուրընկալություն");
    $("#text2").text("Զագսի արարողություն");
    $("#text3").html(  "Ամուսնական պալատ N1" +'<br>'+"Սանկտ Պետերբուրգ, Անգլիական փող․, 28տ․");
    $("#text4").text("Հանդիսություն");
    $("#text5").html("Ռեստորան 'Երջանկություն'" +"<br>"+"Սանկտ Պետերբուրգ, Երջանկություն փող․, տուն 7");
   $(".invitetext").text("Խնդրում ենք հաստատել Ձեր մասնակցությունը");
    $("#text6").text("Սիրով կմասնակցենք");
    $("#text7").text("Մենք չենք կարող մասնակցել");
     $(".send").text("ՈՒղարկել");
     $(".lasttext").text("Հարգանքով`");
     $(".names2").text("Սիլվիա և Անդրե");
     $("#link1").text("Ինչպես հասնել");
     $("#link2").text("Ինչպես հասնել");
     $("#link3").text("Միանալ խմբին");
     $(".group").text("Այստեղ կարող եք ուղարկել Ձեր կողմից արված հարսանեկան գեղեցիկ լուսանկարներն ու հոլովակներ");
     $(".month").text("Սեպտեմբեր");
     $(".anun").text("Սիլվիա");
     $(".anun2").text("Անդրե");
     $("#or").text("Օր");
     $("#jam").text("ժամ");
     $("#rope").text("Րոպե");
     $("#vrk").text("Վրկ");
     $("#guestname").attr('placeholder',"Անուն Ազգանուն");
     $("#guestnumber").attr('placeholder',"Հյուրերի քանակ");
     $("#tillwedding").text("Հարսանիքին մնաց");
    })

    $("#btn2").click(function(){
      $(window).on( 'load', function() {
            $('html, body').animate({scrollTop : 0});
      });

      $(".dearfrend").text("Дорогие гости!");
      $(".text").text("С огромной радостью и волнением мы приглашаем вас разделить с нами этот незабываемый день — день, когда мы станем мужем и женой!Мы верим, что ваше присутствие сделает этот день еще более особенным и незабываемым. ")
      $("#text1").text("Сбор гостей");
      $("#text2").text("Регистрация брака");
      $("#text3").html(  "Дворец брокосочетания N1" +'<br>'+"Санкт-Петербург,Английская  наб., д.28");
      $("#text4").text("Праздничный ужин");
      $("#text5").html("Ресторан 'Счастье'" +"<br>"+"Санкт-Петербург,ул. Счастья, д.7");
     $(".invitetext").text("Пожалуйста, подтвердите свое присутствие на мероприятии");
      $("#text6").text("Мы придем");
      $("#text7").text("Мы не сможем прийти");
       $(".send").text("Отправить");
       $(".lasttext").text("С уважением,");
       $(".names2").text("Силвия и Андре");
       $("#link1").text("как добраться");
       $("#link2").text("как добраться");
       $("#link3").text("Вступить группу ");
       $(".group").text("Присоединяйтесь и отправляйте в эту группу фото и видео со свадебного дня, которые вы успели сделать.");
       $(".month").text("Сентябрь");
       $(".anun").text("Силвия");
       $(".anun2").text("Андре");
       $("#or").text("Дней");
       $("#jam").text("Часов");
       $("#rope").text("Минут");
       $("#vrk").text("Секунд");
       $("#guestname").attr('placeholder',"Имя Фамилия");
       $("#guestnumber").attr('placeholder',"Число гостей");
       $("#tillwedding").text("ДО СВАДЬБЫ");
})


let audio=document.getElementById("myAudio")
 $("#play").click(function(){
  $("#play").css("display","none");
      $("#pause").css("display", "block");
      
      audio.play();
      
  } )
  $("#pause").click(function(){
      $("#pause").css("display","none");
      $("#play").css("display","block");
      audio.pause();
      audio.currentTime = 0;
  })
 

// $(document).on("contextmenu", function(e) {
//   e.preventDefault();
// });
