$(function() {
  $("#showText").mouseover(function() {
    $(".secretText").fadeIn(1000);
    $(".secretText").attr("style", "display:inline");
  });
  $("#showText").mouseleave(function() {
    $(".secretText").fadeOut(500);
  });
});
