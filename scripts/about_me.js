$(function(){
  $("#showText").hover(function(){
    $(".secretText").attr("style", "display:block");
  }, function(){
    $(".secretText").attr("style", "display:none");
  });
});
