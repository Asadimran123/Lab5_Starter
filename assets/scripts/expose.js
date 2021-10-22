// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

//Sets the image of the horn and the corresponding mp3 file
function setHorn(event){
  var hornImage = document.getElementsByTagName("img")[0];
  hornImage.setAttribute("src", "assets/images/" + event.target.value + ".svg");

  var hornAudio = document.getElementsByClassName("hidden")[0];
  hornAudio.setAttribute("src", "assets/audio/" + event.target.value + ".mp3"); 
} 

//Sets the icon of the volume
function setVolumeIcon(event){
  var volumeValue = document.getElementById("volume").value;
  var volumeIcon = document.getElementsByTagName("img")[1];

  if( volumeValue == 0){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-0.svg"); 
    volumeIcon.setAttribute("alt", "Volume level 0"); 
  }
  else if( volumeValue >= 1 && volumeValue < 33){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-1.svg"); 
    volumeIcon.setAttribute("alt", "Volume level 1");  
  }
  else if( volumeValue >= 33 && volumeValue < 67){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-2.svg");  
    volumeIcon.setAttribute("alt", "Volume level 2"); 
  }
  else if( volumeValue >= 67){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-3.svg");  
    volumeIcon.setAttribute("alt", "Volume level 3"); 
  } 
}

// when you  click the "play soound", this function makes the sound
function playSound(event){
  var volumeValue = document.getElementById("volume").value;
  var hornAudio = document.getElementsByClassName("hidden")[0];
  hornAudio.volume = (volumeValue/100);
  hornAudio.play();
  var hornSelect = document.getElementById("horn-select").value;
  // Display Confetti if we select the party horn
  if(hornSelect == "party-horn"){

    jsConfetti.addConfetti()
  }
}

function init() {
  //when you change the horn option
  document.getElementById("horn-select").addEventListener('change', setHorn);
  //when you change the volume
  document.getElementById("volume-controls").addEventListener('input', setVolumeIcon);
  //when you click the 'play sound'
  document.querySelector('button').addEventListener('click', playSound);
}