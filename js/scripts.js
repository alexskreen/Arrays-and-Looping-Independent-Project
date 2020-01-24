var results = []
function beepBoop(userInput){
  var valueString = userInput.toString();
  for(var i = 0; i<userInput; i++)
  if (valueString.includes("3")){
    console.log("I'm sorry, Dave. I'm afraid I can't do that.")
  }
  else if (valueString.includes("2")){
    console.log("Boop!")
  }
  else if (valueString.includes("1")){
    console.log("Beep!")
  }
  else {
    console.log("Your number is " + i)
  }
  console.log(results);
};
  // function inputToArr(userInput){
  //   for(var i = 0; i <= userInput; i++)
$(document).ready(function(){
  $("#submitButton").click(function (event) {
    var userInput = parseInt($("input#userInput").val());
    event.preventDefault();
    // console.log(userInput)
    beepBoop(userInput);
  });
});