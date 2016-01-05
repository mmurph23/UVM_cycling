$(document).ready(function(){
/*Index hero slider*/
    $("#hero-button").click(function(){

        $(".container").css("transform","translateY(-350px)");
        $(".seasons").css("transform","translateY(-350px)");
    });
    
/*Seasons flip function*/
  $(".mountain").click(function(){
    
    $(this).addClass("front-to-side");
    $(".mtn-back").addClass("back-to-front");
    setTimeout(function(){
      $(".mtn-back").css({"width":"100vw"});
    },0);
    
  });
  
  $(".road").click(function(){
    
    $(this).addClass("front-to-side");
    $(".road-back").addClass("back-to-front");
    setTimeout(function(){
      $(".road-back").css({"width":"100vw", "left": "0vw"});
    },0);
    
    
  });
  
  $(".cross").click(function(){
    
    $(this).addClass("front-to-side");
    $(".cross-back").addClass("back-to-front");
    setTimeout(function(){
      $(".cross-back").css({"width":"100vw", "left": "0vw"});
    },0);

  });
});