$(document).ready(function(){
  var results = []
  function beepBoop(userInput){
    for(var i = 0; i<=userInput; i++)
    
    if(i <= userIgit cnput){
      console.log("value of i is" + i);
      }
  }
  $("#submitButton").click(function (event) {
    var userInput = parseInt($("input#userInput").val());
    event.preventDefault();
    // console.log(userInput)
    beepBoop(userInput);
  });
});