
var synth = new Tone.PolySynth().toMaster();
var notes = ["C", "D", "E", "F", "G", "A", "B"];

function initialize(){
  var html = "";
  for(var octave=0; octave<2; octave++){
    for(var i=0; i<notes.length; i++){
      var hasSharp = true;
      var note = notes[i];
      if(note == "E" || note == "B")
        hasSharp = false;
      html += `<div id="${note+(octave+4)}" onclick="guess(this)" class="whiteNote" onmousedown="noteDown(this, false)" 
      onmouseup = "noteUp(this, false)" onmouseleave="noteUp(this, false)"
      data-note="${note+(octave+4)}">`;
      if(hasSharp){
        html += `<div id="${note+"#"+(octave+4)}" class="blackNote" onclick="guess(this); event.stopPropagation();"
        onmousedown="noteDown(this, true)" onmouseup = "noteUp(this, true)" 
        onmouseleave="noteUp(this, true)" data-note="${note+"#"+(octave+4)}"></div>`;
      }
      html += "</div>";
    }
  }  
  document.getElementById("container").innerHTML = html;
}

function noteUp(elem, isSharp){
  elem.style.background = isSharp ? "#777" : "white";
}

function noteDown(elem, isSharp){
  var note = elem.dataset.note;
  //alert(note);
  elem.style.background = isSharp ? "black" : "#ccc";
  synth.triggerAttackRelease(note, "16n");
  event.stopPropagation();
}

function noteDownOther(elem, isSharp){
  var note = elem.dataset.note;
  //alert(note);
  elem.style.background = isSharp ? "black" : "#ccc";
  synth.triggerAttackRelease(note, "16n");
  
}



var pattern0 = ["C4", "C4", "G4", "G4", "A4", "A4", "G4", "F4", "F4", "E4", "E4", "D4", "D4", "C4"];
var pattern1 = ["D4", "E4", "F#4", "A4", "F#4", "E4", "D4", "F#4", "A4", "B4", "D5", "C#5", "A4", "F#4", "E4"];
var pattern2 = ["C#4", "C#5", "D5", "E5"];
var pattern3 = ["E4", "D5", "D5", "G5"];
var pattern = [];
var progress = 0;
var guessCounter = 0;
var gamePlaying = false;
const cluePause = 300;
var clueHoldTime = 1000;
const clueWait = 333;


function startGame(){
  choosePattern();
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("message").style.display = "none";
  playClueSequence();
  
}
function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}
function loseGame() {
  stopGame();
  //alert("Game over...You lost.");
  var message = document.getElementById("message");
	message.textContent = "Game over...You lost.";
  message.style.display = "inline-block";
}
function winGame() {
  stopGame();
  //alert("Congrats, you win!!!");
  var message = document.getElementById("message");
	message.textContent = "Congrats, you win!!!";
	message.style.display = "inline-block";
}

//GAME Functionality

function playSingleClue(note){
  if(note.indexOf("#") > -1){
    noteDownOther(document.getElementById(note), true);
    setTimeout(function() { noteUp(document.getElementById(note), true) }, 300);
  } else{
    noteDownOther(document.getElementById(note), false);
    setTimeout(function() { noteUp(document.getElementById(note), false) }, 300);
  }
}
function playClueSequence(){
  guessCounter = 0;
  
  if(clueHoldTime>500){
    clueHoldTime -= (1000*.10);
  } else if(clueHoldTime>250){
    clueHoldTime -= (500*.10);
  } else{
    clueHoldTime -= (250*.10);
  }
  
  let delay = cluePause;
  for(let i=0;i<=progress;i++){
    
    setTimeout(function() { playSingleClue(pattern[i]) }, delay);
    delay += clueHoldTime;
    delay += clueWait;
  }
}
function guess(elem) {
  var note = elem.dataset.note;
  console.log(`user guess:  ${note}`);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter]==elem.id){
    if(guessCounter==progress){
      if(progress==pattern.length-1){
        winGame();
      } else {
        progress++;
        setTimeout(function() { playClueSequence() }, 500);
      }
    } else {
      guessCounter++;
    }
    
  } else {
    loseGame();
  }
  
}

function choosePattern() {
  var x = Math.floor(Math.random() * 4);
  var i;
  if(x==0){   
    for(i = 0; i<pattern0.length; i++){
      pattern[i] = pattern0[i];
    }
  } else if(x==1){
    for(i = 0; i<pattern1.length; i++){
      pattern[i] = pattern1[i];
    }
  } else if(x==2){
    for(i = 0; i<pattern2.length; i++){
      pattern[i] = pattern2[i];
    }
  } else{
    for(i = 0; i<pattern3.length; i++){
      pattern[i] = pattern3[i];
    }
  }
}