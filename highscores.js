'use strict';

var newScore = [];
var theScores = [];
var scoresTable = document.getElementById('highscores');

function HighScore (username, score){
  this.username = username;
  this.score = score;
  theScores.push(this);
};

// Default High Scores
new HighScore ('Adam', 8);
new HighScore ('Phil', 5);
new HighScore ('Lola', 6);
new HighScore ('Brandon', 7);

function sortScores(){
  theScores.sort(function(a, b){
    return b.score - a.score;
  });
};

function addScore(){
  for(var i = 0; i < newScore.length; i++){
    new HighScore (newScore[i].username, newScore[i].score);
  }
  sortScores();
}


HighScore.prototype.render = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.username;
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

// localStorage.setItem('theScores', JSON.stringify(theScores));

if(!localStorage){
  newScore = JSON.parse(localStorage.getItem('User.all'));
  // theScores = JSON.parse(localStorage.getItem('theScores'));
  tableHeader();
  addScore();
  tableScores();
  console.log('Storage available');
} else {
  tableHeader();
  tableScores();
}
// allScores();
