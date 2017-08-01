'use strict';

function selectHandler(event){
  event.preventDefault();

  var drink = event.target.drinkSelect.value;
  var coding = event.target.codeSelect.value;
  localStorage.setItem('drink', JSON.stringify(drink));
  localStorage.setItem('coding', JSON.stringify(coding));
  location.href = 'game.html'
} // selectHandler END

// Listen for submit button clickage
document.getElementById('selectInterface').addEventListener('submit', selectHandler);
