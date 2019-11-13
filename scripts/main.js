$(function() {
  localStorage.getItem("language");
  if (localStorage.getItem("language") == "English") {
    console.log("Language loaded: English");
    englishTranslationAboutMePage();
    englishTranslationNavbar();
  } else if (localStorage.getItem("language") == "Swedish") {
    console.log("Language loaded: Swedish");
    swedishTranslationAboutMePage();
    swedishTranslationNavbar();
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
    englishTranslationAboutMePage();
    englishTranslationNavbar();
  });
  swedishBtn.on("click", function(event) {
    console.log("Language choosen: Swedish");
    localStorage.setItem("language", "Swedish");
    swedishTranslationAboutMePage();
    swedishTranslationNavbar();
  });
});

//Swedish Translation functions.
function swedishTranslationNavbar() {
  let aboutMeLink = $("#about_meLink").text("Om mig");
  let resumeLink = $("#resumeLink").text("CV");
  let portfolioLink = $("#portfolioLink").text("Portfölj");
  let languageLink = $("#dropdownMenu").text("Språk");
}

function swedishTranslationAboutMePage() {
  let occupation = $("#occupation").text("Student vid Nackademin, Fullstack webbutvecklare");
  let alexBio = $("#alexBio").html(
    "Mitt namn är Alexander Wilson, jag är tjugotre år och bor i Stockholm.<br/>" +
    "Jag tycker om att lösa problem och tror att det är därför jag tycker om att programmera.<br/>" +
    "Jag påbörjade min resa genom att få en examen som arkitekt, när jag var klar så tyckte jag att det " +
    "inte var rätt val och att datorer alltid varit en del av mitt liv");
  let secret = $(".secretText").html(" Jag har aldrig varit bra med en penna ändå.");
  let myContactInfoHeading = $(".contact_info h1").text("Min kontaktinformation.");
  let githubText = $(".github a").html("GitHub<br/>(Öppnas i ett nytt fönster)");
  let linkedInText = $(".linkedIn a").html("LinkedIn<br/>(Öppnas i ett nytt fönster)");
  let emailText = $(".mail a").html("Email<br/>(Öppnas i ett nytt fönster)");
}

//English Translation functions.
function englishTranslationNavbar() {
  let aboutMeLink = $("#about_meLink").text("About me");
  let resumeLink = $("#resumeLink").text("Resumé");
  let portfolioLink = $("#portfolioLink").text("Portfolio");
  let languageLink = $("#dropdownMenu").text("Language");
}

function englishTranslationAboutMePage() {
  let occupation = $("#occupation").text("Student at Nackademin, Fullstack web developer");
  let alexBio = $("#alexBio").html(
    "My name is Alexander Wilson, I am twenty-three years old and live in Stockholm.<br/>" +
    " I like problem solving and I think that's why I enjoy programming.<br/>" +
    " I started out my journey by getting a degree as a architect," +
    " when I was done i realised that this wasn't the life for me and that computers" +
    " had always been a part of my life.");
  let secret = $(".secretText").html(" I wasn't really that good with a pencil anyways.");
  let myContactInfoHeading = $(".contact_info h1").text("My contact information.");
  let githubText = $(".github a").html("GitHub<br />(Opens in new window)");
  let linkedInText = $(".linkedIn a").html("LinkedIn<br />(Opens in new window)");
  let emailText = $(".mail a").html("Email<br />(Opens in new window)");
}
