// back end logic
function totals (language, question1, question2, question3, question4, question5) {
  var languageTotal = 0;
  if (question1 === language) {
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
  }
  if (question2 === language) {
    var languageTotal += 1;
  }
  if (question2 === language) {
    var languageTotal += 1;

  return languageTotal
  }
}

 // questions - do I want global or local variables? Can I do this in a more compact way?

// front end logic
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();

    var executive = $("input:radio[name=executive]:checked").val();
    var activity = $("input:radio[name=activity]:checked").val();

    var dob = $("input#date").val();

    sharpTotal = totals("sharp", executive, activity);
    javaTotal = totals("java", executive, activity);
    phpTotal = totals("php", executive, activity);
    rubyTotal = totals("ruby", executive, activity);
    otherTotal = totals("other", executive, activity);
    fuckYouTotal = totals("fuck-you", executive, activity);


  });
});
