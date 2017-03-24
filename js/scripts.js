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


 // Can I do this with for loops and arrays?

// front end logic
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

    sharpTotal = totals("sharp", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);

    javaTotal = totals("java", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);
    phpTotal = totals("php", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);
    rubyTotal = totals("ruby", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);
    otherTotal = totals("other", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);
    fuckYouTotal = totals("fuck-you", executive, activity, enterprise, favoriteWebsite, favoriteLanguage);

    if (!name) {
      name = "Sir or Madam"
    }

    // if (age<14 || age>55) {
    //   alert("Way to go! You get props for learning to program at your age!")
    // }

    if (fuckYouTotal >= 2) {
      alert("go fuck yourself");
    } else if (sharpTotal >= 3) {
      $("#sharp .content").prepend("<p>C# would be a good choice for you, " + name + ". Learn a bit more about C#</p>");
      if (javaTotal >= 2) {
        $("#sharp .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (phpTotal >= 2) {
        $("#sharp .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (rubyTotal >= 2) {
        $("#sharp .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (otherTotal >= 2) {
        $("#sharp .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      }
    } else if (javaTotal >= 3) {
      // you should take a look at xxx
      if (rubyTotal >= 2) {
        $("#java .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");        //  you should also take a look at
      } else if (phpTotal >= 2) {
        $("#java .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (rubyTotal >= 2) {
        $("#java .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (otherTotal >= 2) {
        $("#java .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      }
    } else if (phpTotal >= 3) {
      // you should take a look at xxx
      if (javaTotal >= 2) {
        $("#php .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");        //  you should also take a look at
      } else if (sharpTotal >= 2) {
        $("#php .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (rubyTotal >= 2) {
        $("#php .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (otherTotal >= 2) {
        $("#php .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      }
    } else if (rubyTotal >= 3) {
      // you should take a look at xxx
      if (javaTotal >= 2) {
        $("#ruby .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");        //  you should also take a look at
      } else if (phpTotal >= 2) {
        $("#ruby .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (sharpTotal >= 2) {
        $("#ruby .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (otherTotal >= 2) {
        $("#ruby .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      }
    } else if (otherTotal >= 3) {
      // you should take a look at xxx
      if (javaTotal >= 2) {
        $("#other .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");        //  you should also take a look at
      } else if (phpTotal >= 2) {
        $("#other .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (rubyTotal >= 2) {
        $("#other .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      } else if (sharpTotal >= 2) {
        $("#other .content").append("<p>You should also take a look at <a href='#java'>Java.</a></p>");
      }
    } else {
      alert ("polymath");
    }
  });
});
