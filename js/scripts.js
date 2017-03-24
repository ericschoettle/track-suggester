// back end logic

function totals (language, question1, question2, question3, question4, question5) {
  var languageTotal = 0;
  if (question1 === language) {
    var languageTotal = languageTotal + 1;
  }
  if (question2 === language) {
    var languageTotal = languageTotal + 1;
  }
  if (question2 === language) {
    var languageTotal += 1;
  }
  if (question2 === language) {
    var languageTotal += 1;
  }
  if (question2 === language) {
    var languageTotal += 1;
  }
  if (question2 === language) {
    var languageTotal += 1;

  return languageTotal
}

 // Can I do this in a more compact way?

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

    sharpTotal = totals("sharp", executive, acitvity, enterprise, favoriteWebsite,favoriteLanguage);
    javaTotal = totals("java", executive, acitvity, enterprise, favoriteWebsite,favoriteLanguage);
    phpTotal = totals("php", executive, acitvity, enterprise, favoriteWebsite,favoriteLanguage);
    rubyTotal = totals("ruby", executive, acitvity, enterprise, favoriteWebsite,favoriteLanguage);
    otherTotal = totals("other", executive, acitvity, enterprise, favoriteWebsite,favoriteLanguage);
    fuckYouTotal = totals("fuck-you", executive, acitvity, enterprise, favoriteWebsite,favoriteLanguage);

    if (fuckYouTotal >=2) {
      alert("go fuck yourself")
    } else if (sharpTotal >= 3) {
      alert ("sharpTotal")
      if (javaTotal >= 2) {
        //  you should also take a look at
      } else if (phpTotal >=2) {
        // you should also take a look at php
      } else if (rubyTotal >=2) {
        // you should also take a look at php
      } else if (otherTotal >=2) {
        // you should also take a look at php
      }
    } else if (javaTotal >= 3) {
      // you should take a look at xxx
      if (rubyTotal >= 2) {
        //  you should also take a look at
      } else if (phpTotal >=2) {
        // you should also take a look at php
      } else if (rubyTotal >=2) {
        // you should also take a look at php
      } else if (otherTotal >=2) {
        // you should also take a look at php
      }
    } else if (phpTotal >= 3) {
      // you should take a look at xxx
      if (javaTotal >= 2) {
        //  you should also take a look at
      } else if (sharpTotal >=2) {
        // you should also take a look at php
      } else if (rubyTotal >=2) {
        // you should also take a look at php
      } else if (otherTotal >=2) {
        // you should also take a look at php
      }
    } else if (rubyTotal >= 3) {
      // you should take a look at xxx
      if (javaTotal >= 2) {
        //  you should also take a look at
      } else if (phpTotal >=2) {
        // you should also take a look at php
      } else if (sharpTotal >=2) {
        // you should also take a look at php
      } else if (otherTotal >=2) {
        // you should also take a look at php
      }
    } else if (otherTotal >= 3) {
      // you should take a look at xxx
      if (javaTotal >= 2) {
        //  you should also take a look at
      } else if (phpTotal >=2) {
        // you should also take a look at php
      } else if (rubyTotal >=2) {
        // you should also take a look at php
      } else if (sharpTotal >=2) {
        // you should also take a look at php
      }
    } else {
      alert ("polymath")
    }
  });
});
