// expose.js

window.addEventListener('DOMContentLoaded', init);

function selectImage(){
  var hornImage = document.getElementsByTagName('img')[0];
  hornImage.setAttribute("src", "assets/images/" + event.target.value + ".svg");
}

function init() {
  //control whcih horn image is displayed
  var horn = document.getElementById("horn-select");
  horn.addEventListener('click', selectImage);
}

