$(function() {
  localStorage.getItem("language");
  if (localStorage.getItem("language") == "English") {
    console.log("Language loaded: English");
    english();
  }
  else if (localStorage.getItem("language") == "Swedish") {
    console.log("Language loaded: Swedish");
    swedish();
  }
  /*Variables*/
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
  englishBtn.on("click", function(event) {
    console.log("Language loaded: English");
    localStorage.setItem("language", "English");
    english();
  });
  swedishBtn.on("click", function(event) {
    console.log("Language choosen: Swedish");
    localStorage.setItem("language", "Swedish");
    swedish();
  });
});

function swedish(){
  let alexBio = $("#alexBio").text("Mitt namn är Alexander Wilson, jag är tjugotre år och bor i Stockholm.");
  console.log($("#alexBio").text());
}

function english(){
  let alexBio =$("#alexBio").text("My name is Alexander Wilson, I am twenty-three years old and live in Stockholm.");
  console.log($("#alexBio").text());
}
