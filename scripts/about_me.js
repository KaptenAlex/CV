$(function(){
  $("#showText").hover(function(){
    $(".secretText").fadeIn(1000);
    $(".secretText").attr("style", "display:inline");
  }, function(){
    $(".secretText").fadeOut(500);
    $(".secretText").attr("style", "display:none");
  });
});
