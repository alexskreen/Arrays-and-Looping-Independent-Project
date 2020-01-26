function beepBoop(userInput) {
  var results = []
  for (var i = 1; i <= userInput; i++)
    if (i.toString().includes("3")) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that");
    }
    else if (i.toString().includes("2")) {
      results.push("Boop!");
    }
    else if (i.toString().includes("1")) {
      results.push("Beep!");
    }
    else {
      results.push(i);
    }
  return results;
};
var displayResultList = function(results) {
  $('ul#resultsList').empty();
results.forEach(function(item) {
  $('ul#resultsList').append("<li>" + item + "</li>");
});
return;
}

$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    displayResultList(beepBoop(userInput));
});
});