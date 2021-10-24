// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;

function init() {
  setTimeout(() => {
    populateVoiceList();
  }, 50);
  document.querySelector('button').addEventListener('click', playSound);
}

// load all the available voices 
function populateVoiceList() {
  var voices = synth.getVoices();
  var voiceSelect = document.getElementById("voice-select");

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

// get the input text and output with the voice that user selects
function playSound(event){
  var inputTxt = document.getElementById("text-to-speak");
  var voiceSelect = document.getElementById("voice-select");
  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  var synth = window.speechSynthesis;
  var voices = synth.getVoices();
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();

  var face = document.getElementsByTagName("img")[0];
 
  // face opens mouth when it starts speaking
  utterThis.onstart = function(event) {
    face.setAttribute("src", "assets/images/smiling-open.png");
  }
  
  // face closes mouth when it ends speaking
  utterThis.onend = function(event) {
    face.setAttribute("src", "assets/images/smiling.png");
  }
}