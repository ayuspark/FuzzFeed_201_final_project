'use strict'

var scoreTable = getElementById('scoresTable');

var HighScores = function(name, score){
  this.name = name;
  this.score = score;
};

function showHighScores(){
  var ulEl = document.getElementById('list');

  for(var i = 0; i < HighScores.all.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = HighScores.all[i].name + '  ' + HighScores.all[i].score;
    ulEl.appendChild(liEl);
  }
}


showHighScores();
