$(function() {
  //Function to switch active state on navbar links.
  $(".nav-link").click(function() {
    let currentObject = $(this);
    $(".nav-link").attr("class", "nav-link");
    currentObject.attr("class", "nav-link active");
  });
});
