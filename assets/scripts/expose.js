// expose.js

window.addEventListener('DOMContentLoaded', init);


function setHorn(event){
  var hornImage = document.getElementsByTagName("img")[0];
  hornImage.setAttribute("src", "assets/images/" + event.target.value + ".svg");

  var hornAudio = document.getElementsByClassName("hidden")[0];
  hornAudio.setAttribute("src", "assets/audio/" + event.target.value + ".mp3"); 
} 

//changes volume icon
function setVolumeIcon(event){
  var volumeValue = document.getElementById("volume").value;
  var volumeIcon = document.getElementsByTagName("img")[1];
  console.log(volumeIcon);
  if( volumeValue == 0){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-0.svg"); 
  }

  else if( volumeValue >= 1 && volumeValue < 33){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-1.svg"); 

  }
  else if( volumeValue >= 33 && volumeValue < 67){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-2.svg");  

  }
  else if( volumeValue >= 67){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-3.svg");  

  } 
}

//sets volume to play at
function playSound(event){
  var hornAudio = document.getElementsByClassName("hidden")[0];
  var volumeValue = document.getElementsById("volume-controls").value/100;
  hornAudio.setAttribute("src", "assets/audio/" + event.target.value + ".mp3"); 
  hornAudio.setAttribute("volume-controls.value", volumeValue);
  hornAudio.play();
}



function init() {
  // TODO
  document.getElementById("horn-select").addEventListener('change', setHorn);
  document.getElementById("volume-controls").addEventListener('change', setVolumeIcon);
  document.getElementsByClassName("hidden").addEventListener('change', playSound);

}