$(function(){
  $("#showText").hover(function(){
    $(".secretText").attr("style", "display:inline");
  }, function(){
    $(".secretText").attr("style", "display:none");
  });
});
