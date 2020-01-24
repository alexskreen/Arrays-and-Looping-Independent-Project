// Back-end

function beepBoop(userInput) {
  var result = []
  for (var i = 0; i <= userInput; i++)
  if (i.toString().includes("3")){
      console.log("I'm sorry, Dave. I'm afraid I can't do that.")
    }
    else if (i.toString().includes("2")) {
      console.log("Boop!")
    }
    else if (i.toString().includes("1")) {
      console.log("Beep!")
    }
    else {
      console.log("Your number is " + i)
    }
};

// Front-end

$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();
    // console.log("button works")
    var userInput = parseInt($("input#userInput").val());
    // console.log(userInput)
    $("#resultsList").append("<li>" + results + "</li>"); var results = []
    beepBoop(userInput);

  });
});