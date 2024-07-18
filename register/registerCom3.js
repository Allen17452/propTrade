document.getElementById("optionA").addEventListener("click", function() {
  document.getElementById("optionA").style.display = "none";
  document.getElementById("optionB").style.display = "block";
});
document.getElementById("optionB").addEventListener("click", function() {
  document.getElementById("optionB").style.display = "none";
  document.getElementById("optionA").style.display = "block";
});