$(function() {
  localStorage.getItem("language");
  if (localStorage.getItem("language") == "English") {
    console.log("Language loaded: English");
    englishTranslationAboutMePage();
    englishTranslationNavbar();
    englishTranslationPortfolioPage();
  } else if (localStorage.getItem("language") == "Swedish") {
    console.log("Language loaded: Swedish");
    swedishTranslationAboutMePage();
    swedishTranslationNavbar();
    swedishTranslationPortfolioPage();
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
    englishTranslationPortfolioPage();
  });
  swedishBtn.on("click", function(event) {
    console.log("Language choosen: Swedish");
    localStorage.setItem("language", "Swedish");
    swedishTranslationAboutMePage();
    swedishTranslationNavbar();
    swedishTranslationPortfolioPage();
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


function swedishTranslationPortfolioPage() {
  let someOfMyProjects = $(".portfolio .heading").text("Detta är några av mina projekt.");
  let crmCardText = $("#crmCard .card-text").text("Grupp skolprojekt där jag och tre andra " +
    "skapade ett kundrelationshanteringssystem för webben, skapat med jQuery, Javascript och ren CSS.");
  let crmCardBtn = $("#crmCard .btn").html("Öppna GitHub förvar<br/>(Öppnas i ett nytt fönster)");
  let quizCardTitle = $("#quizCard .card-title").text("Frågesport sida");
  let quizCardText = $("#quizCard .card-text").text("Ett skolprojekt där användaren får spela frågesport, använder sig mest av Javascript och ren CSS.");
  let quizCardBtn = $("#quizCard .btn").html("Öppna GitHub förvar<br/>(Öppnas i ett nytt fönster)");
  let osrsCardTitle = $("#osrsCard .card-title").text("Old school RuneScape miniräknare");
  let osrsCardText = $("#osrsCard .card-text").text("Mitt framtida sidoprojekt for ett spel jag verkligen tycker om att spela. Funkar just nu inte.");
  let osrsCardBtn = $("#osrsCard .btn ").html("Öppna GitHub förvar<br/>(Öppnas i ett nytt fönster)");
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


function englishTranslationPortfolioPage() {
  let someOfMyProjects = $(".portfolio .heading").text("These are some of my projects.");
  let crmCardText = $("#crmCard .card-text").text("Group school project where me and 3 others created a "+
  "customer relationship management web application, made with jQuery, Javascript and pure CSS.");
  let crmCardBtn = $("#crmCard .btn").html("Go to GitHub repository<br/>(Opens in new window)");
  let quizCardTitle = $("#quizCard .card-title").text("Quiz site");
  let quizCardText = $("#quizCard .card-text").text("A school project where the user takes a quiz, mainly used Javascript and pure CSS.");
  let quizCardBtn = $("#quizCard .btn").html("Go to GitHub repository<br/>(Opens in new window)");
  let osrsCardTitle = $("#osrsCard .card-title").text("Old school RuneScape calculator");
  let osrsCardText = $("#osrsCard .card-text").text("My future side-project for a game I really enjoy playing. Currently not functioning.");
  let osrsCardBtn = $("#osrsCard .btn ").html("Go to GitHub repository<br/>(Opens in new window)");
}
