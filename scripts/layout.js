$(function() {
  let portfolioDiv = $("#portfolio");
  let aboutMeDiv = $("#about_me");
  let cvDiv = $("#cv");
  //Function to switch active state on navbar links.
  $(".nav-link").click(function() {
    let currentObject = $(this);
    console.log(currentObject.attr("id"));
    $(".nav-link").attr("class", "nav-link");
    currentObject.attr("class", "nav-link active");
    if(currentObject.attr("id") == "cvLink"){
      cvDiv.attr("style", "display:block");
      aboutMeDiv.attr("style", "display:none");
      portfolioDiv.attr("style", "display:none;");
    }
    else if (currentObject.attr("id") == "about_meLink") {
      aboutMeDiv.attr("style", "display:block");
      cvDiv.attr("style", "display:none");
      portfolioDiv.attr("style", "display:none;");
    }
    else if (currentObject.attr("id") == "portfolioLink") {
      portfolioDiv.attr("style", "display:block;");
      aboutMeDiv.attr("style", "display:none");
      cvDiv.attr("style", "display:none");
    }
  });
});
