'use strict'


var theScores = [];

function HighScore (name, score){
  this.name = name;
  this.score = score;
  theScores.push(this);
};

new HighScore ('Adam', 800);
new HighScore ('Phil', 500);
new HighScore ('Lola', 600);
new HighScore ('Brandon', 700);

function allScores(){
  var olEl = document.getElementById('highscores');

  for(var i = 0; i < theScores.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = theScores[i].name + ' scored ' + theScores[i].score;
    olEl.appendChild(liEl);
  }
};


// if(local storage){
//   run function to add new scores to high score table
// } else {
//   load default high scores table
// }
allScores();
