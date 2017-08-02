'use strict';

var newScore = [];
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

function addScore(){

  theScores.push(newScore);
}

theScores.sort(function(a, b){
  return b.score - a.score;
});

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


if(localStorage){
  newScore = JSON.parse(localStorage.getItem('User.all'));
  addScore();
  tableHeader();
  tableScores();
  console.log('Storage available');
} else {
  tableHeader();
  tableScores();
}
// allScores();
