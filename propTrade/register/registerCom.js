document.addEventListener("DOMContentLoaded", function() {
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('register') && urlParams.get('register') === 'email') {
  var buttonText = document.getElementById("buttonText");
  buttonText.innerHTML = "optionB";
  var optionB = document.getElementById("optionB");
  optionB.click();
} else if (urlParams.has('register') && urlParams.get('register') === 'phone')  {
  var buttonText = document.getElementById("buttonText");
  buttonText.innerHTML = "optionA";
  var optionA = document.getElementById("optionA");
  optionA.click();
} else {
    var buttonText = document.getElementById("buttonText");
    buttonText.innerHTML = "optionA";
  
    var optionA = document.getElementById("optionA");
    var optionB = document.getElementById("optionB");
    
    optionA.addEventListener("click", function() {
      buttonText.innerHTML = "optionA";
    });
  
    optionB.addEventListener("click", function() {
      buttonText.innerHTML = "optionB";
    });
    optionB.click();
}
});
