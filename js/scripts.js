// Back-end

function beepBoop(userInput) {
  var results = []
  for (var i = 0; i <= userInput; i++)
    if (i.toString().includes("3")) {
      // console.log("I'm sorry, Dave. I'm afraid I can't do that.")
      results.push("I'm sorry, Dave. I'm afraid I can't do that");
    }
    else if (i.toString().includes("2")) {
      // console.log("Boop!")
      results.push("Boop!");
    }
    else if (i.toString().includes("1")) {
      // console.log("Beep!")
      results.push("Beep!");
    }
    else {
      // console.log("Your number is " + i)
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

// Front-end

$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var outputs = beepBoop(userInput);
    // $("#resultsList").text(outputs);
    displayResultList(beepBoop(userInput));
});
});