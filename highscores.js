'use strict'


var theScores = [];
var scoresTable = document.getElementById('highscores');

function HighScore (name, score){
  this.name = name;
  this.score = score;
  theScores.push(this);
};

new HighScore ('Adam', 800);
new HighScore ('Phil', 500);
new HighScore ('Lola', 600);
new HighScore ('Brandon', 700);

// function sortScores(){
//   orderedScores =
// };

HighScore.prototype.render = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.score;
  trEl.appendChild(tdEl);

  scoresTable.appendChild(trEl);
};

function tableHeader(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Name';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Score';
  trEl.appendChild(thEl);
  scoresTable.appendChild(trEl);
};

function tableScores(){
  for(var i = 0; i < theScores.length; i++){
    theScores[i].render();
  }
};


// if(local storage){
//   run function to add new scores to high score table
// } else {
//   load default high scores table
// }
tableHeader();
tableScores();
// allScores();
