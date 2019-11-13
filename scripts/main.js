$(function() {
  /*
  Switches bootstraps active class on navbar links
  and shows the content that the user clicked and
  hides the all other content.
  */
  let portfolioDiv = $("#portfolio");
  let aboutMeDiv = $("#about_me");
  let resumeDiv = $("#resume");
  $(".nav-link").click(function() {
    let currentObject = $(this);
    $(".nav-link").removeClass("active");
    currentObject.addClass("active");

    if (currentObject.attr("id") == "resumeLink") {
      resumeDiv.attr("style", "display:block");
      aboutMeDiv.attr("style", "display:none");
      portfolioDiv.attr("style", "display:none;");
    } else if (currentObject.attr("id") == "about_meLink") {
      aboutMeDiv.attr("style", "display:block");
      resumeDiv.attr("style", "display:none");
      portfolioDiv.attr("style", "display:none;");
    } else if (currentObject.attr("id") == "portfolioLink") {
      portfolioDiv.attr("style", "display:block;");
      aboutMeDiv.attr("style", "display:none");
      resumeDiv.attr("style", "display:none");
    }
  });

  //Shows a secret text if the user hovers over the element with the text "PS."
  $("#showText").mouseover(function() {
    $(".secretText").fadeIn(1500);
    $(".secretText").attr("style", "display:inline");
  });
  $("#showText").mouseleave(function() {
    $(".secretText").fadeOut(1500);
  });
});
