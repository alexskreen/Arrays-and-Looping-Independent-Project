// Back-end

function beepBoop(userInput) {
  var results = []
  for (var i = 0; i <= userInput; i++)
  if (i.toString().includes("3")){
    // console.log("I'm sorry, Dave. I'm afraid I can't do that.")
    results.push["I'm sorry, Dave. I'm afraid I can't do that"];
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
    console.log(results);    

    function writeToPage(results) {
      $("#resultsList").empty();
      results.forEach();
        $("#resultsList").append("<li>" + i +  "</li>");

      };
};



// Front-end

$(document).ready(function () {
  $("#submitButton").click(function (event) {
    event.preventDefault();

    var userInput = parseInt($("input#userInput").val());    // console.log(userInput)
    
    beepBoop(userInput);
    writeToPage();
    
    });
    });