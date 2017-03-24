// back end logic

function totals (language, question1, question2, question3, question4, question5) {
  var languageTotal = 0;

  if (question1 === language) {
    languageTotal = languageTotal + 1;
  }

  if (question2 === language) {
    languageTotal = languageTotal + 1;
  }

  if (question3 === language) {
    languageTotal = languageTotal + 1;
  }

  if (question4 === language) {
    languageTotal = languageTotal + 1;
  }

  if (question5 === language) {
    languageTotal = languageTotal + 1;
  }

  return languageTotal
}

function calculateAge (date) {
  var today = new Date();
  var regexOperator = /\d{4}/
  var yearOfBirth = regexOperator.exec(date)
  var currentYear = regexOperator.exec(today)
  var age = parseFloat(currentYear[0]) - parseFloat(yearOfBirth[0])
}

// front end logic
function scrollTo(hash) {
    location.hash = "#" + hash;
} // not sure if this is front or back end.

$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();

    var executive = $("input:radio[name=executive]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();
    var enterprise = $("input:radio[name=enterprise]:checked").val();
    var favoriteWebsite = $("input:radio[name=favorite-website]:checked").val();
    var favoriteLanguage = $("input:radio[name=favorite-language]:checked").val();

    var dob = $("input#date").val();
    console.log(dob)
    var age = calculateAge(dob);
    console.log(age)
    sharpTotal = totals("sharp", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);
    javaTotal = totals("java", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);
    phpTotal = totals("php", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);
    rubyTotal = totals("ruby", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);
    otherTotal = totals("other", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);
    fuckYouTotal = totals("fuck-you", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);

    if (!name) {
      name = "Sir or Madam"
    }

    age = calculateAge(dob)
    if (age < 14 || age > 55) {
      alert("Way to go! You get props for learning to program at your age!")
    }

    if (fuckYouTotal >= 2) {
      $(".container").hide();
      $(".fuck-you").show();

    } else if (sharpTotal >= 3) {
      scrollTo("sharp")
      $("#sharp .content").prepend("<p>C# would be a good choice for you, " + name + ". Learn a bit more about C#</p>");
      if (javaTotal >= 2) {
        $("#sharp .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (phpTotal >= 2) {
        $("#sharp .content").append("<p>You should also take a look at <a href='#php'>PHP.</a></p>");
      } else if (rubyTotal >= 2) {
        $("#sharp .content").append("<p>You should also take a look at <a href='#ruby'>Ruby.</a></p>");
      } else if (otherTotal >= 2) {
        $("#sharp .content").append("<p>You should also take a look at <a href='#other'>other great things to do in life.</a></p>");
      }
    } else if (javaTotal >= 3) {
      scrollTo("java")
      $("#java .content").prepend("<p>Java would be a good choice for you, " + name + ". Learn a bit more about Java!</p>");
      if (sharpTotal >= 2) {
        $("#java .content").append("<p>You should also take a look at <a sharp='C#a'>Java.</a></p>");
      } else if (phpTotal >= 2) {
        $("#java .content").append("<p>You should also take a look at <a href='#php'>PHP.</a></p>");
      } else if (rubyTotal >= 2) {
        $("#java .content").append("<p>You should also take a look at <a href='#ruby'>Ruby.</a></p>");
      } else if (otherTotal >= 2) {
        $("#java .content").append("<p>You should also take a look at <a href='#other'>other great things to do in life.</a></p>");
      }
    } else if (phpTotal >= 3) {
      scrollTo("php")
      $("#php .content").prepend("<p>PHP would be a good choice for you, " + name + ". Learn a bit more about PHP!</p>");
      if (javaTotal >= 2) {
        $("#php .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (sharpTotal >= 2) {
        $("#php .content").append("<p>You should also take a look at <a href='#sharp'>C#.</a></p>");
      } else if (rubyTotal >= 2) {
        $("#php .content").append("<p>You should also take a look at <a href='#ruby'>Ruby.</a></p>");
      } else if (otherTotal >= 2) {
        $("#php .content").append("<p>You should also take a look at <a href='#other'>other great things to do in life.</a></p>");
      }
    } else if (rubyTotal >= 3) {
      scrollTo("ruby")
      $("#ruby .content").prepend("<p>Ruby would be a good choice for you, " + name + ". Learn a bit more about Ruby!</p>");
      if (javaTotal >= 2) {
        $("#ruby .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (phpTotal >= 2) {
        $("#ruby .content").append("<p>You should also take a look at <a href='#php'>PHP.</a></p>");
      } else if (sharpTotal >= 2) {
        $("#ruby .content").append("<p>You should also take a look at <a href='#sharp'>C#.</a></p>");
      } else if (otherTotal >= 2) {
        $("#ruby .content").append("<p>You should also take a look at <a href='#other'>other great things to do in life.</a></p>");
      }
    } else if (otherTotal >= 3) {
      scrollTo("other")
      $("#other .content").prepend("<p>Other things be a good choice for you, " + name + ". This isn't to say you wouldn't be great for programming - odds are, programming could use a few more artistic, people oriented, wonderful people like yourself. Just know that it sounds like you might not need programming as much as it needs you</p>");
      if (javaTotal >= 2) {
        $("#other .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (phpTotal >= 2) {
        $("#other .content").append("<p>You should also take a look at <a href='#php'>PHP.</a></p>");
      } else if (rubyTotal >= 2) {
        $("#other .content").append("<p>You should also take a look at <a href='#ruby'>Ruby.</a></p>");
      } else if (sharpTotal >= 2) {
        $("#other .content").append("<p>You should also take a look at <a href='#sharp'>C#.</a></p>");
      }
    } else {
      alert ("You're quite the polymath! Pick your own path!");
    }
  });
});
