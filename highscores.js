'use strict'

var scoreTable = getElementById('scoresTable');
var newScores = [];

var HighScores = function(name, score){
  this.name = name;
  this.score = score;
};

new HighScores = ('Phil', 500);
new HighScores = ('Lola', 600);
new HighScores = ('Brandon', 700);
new HighScores = ('Adam', 800);

// function sortScores () {
//   newScores = newScores.sort();
// }

HighScores.prototype.render = function() {
  var olEl = document.getElementById('highscores');

  for(var i = 0; i < HighScores.all.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = HighScores.all[i].name + '  ' + HighScores.all[i].score;
    olEl.appendChild(liEl);
  }
}

// if(local storage){
//   run function to add new scores to high score table
// } else {
//   load default high scores table
// }

HighScores.render();
