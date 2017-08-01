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

function allScores(){

  for(var i = 0; i < theScores.length; i++){
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = theScores[i].name;
    trEl.appendChild(tdEl);
  }
  scoresTable.appendChild(trEl);
  for(var n = 0; n < theScores.length; n++){
    trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = theScores[n].score;
    trEl.appendChild(tdEl);
  }
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
  allScores();
}


// if(local storage){
//   run function to add new scores to high score table
// } else {
//   load default high scores table
// }
tableHeader();
// allScores();
