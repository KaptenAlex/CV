$(function() {
  let portfolioDiv = $("#portfolio");
  let aboutMeDiv = $("#about_me");
  let resumeDiv = $("#resume");
  let englishBtn = $("#english");
  let swedishBtn = $("#swedish");
  //Function to switch active state on navbar links.
  $(".nav-link").click(function() {
    let currentObject = $(this);
    $(".nav-link").removeClass("active");
    currentObject.addClass("active");

    if(currentObject.attr("id") == "resumeLink"){
      resumeDiv.attr("style", "display:block");
      aboutMeDiv.attr("style", "display:none");
      portfolioDiv.attr("style", "display:none;");
    }
    else if (currentObject.attr("id") == "about_meLink") {
      aboutMeDiv.attr("style", "display:block");
      resumeDiv.attr("style", "display:none");
      portfolioDiv.attr("style", "display:none;");
    }
    else if (currentObject.attr("id") == "portfolioLink") {
      portfolioDiv.attr("style", "display:block;");
      aboutMeDiv.attr("style", "display:none");
      resumeDiv.attr("style", "display:none");
    }
  });
});
