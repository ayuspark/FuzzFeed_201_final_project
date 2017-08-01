'use strict'

var scoreTable = getElementById('scoresTable');

var highScores = function(name, score){
  this.name = name;
  this.score = score;
}

 highScores.prototype.render = function(){
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    for(var i = 0; i < times.length; i++){
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdEl);

    salesTable.appendChild(trEl);
 }
