var modal = document.getElementById("letterModal");
var letter = document.getElementById("letter");
var span = document.querySelector(".modal .close");

letter.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
