//paulinascript.js



$(document).ready(function(){
  $("img").on("mouseenter", function() {
    //make a variable that takes width value (see click timer)
//    var ig = document.getElementById('img')
    $(this).animate({height:50}, 3000);
  });

  $("img").on("mouseleave", function() {
    $(this).animate({width: 300, height: 250}, 2000);
  });


});
