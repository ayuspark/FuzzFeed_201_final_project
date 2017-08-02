'use strict';

function selectHandler(event){
  event.preventDefault();

  if(!event.target.drinkSelect.value || !event.target.codeSelect.value){
    alert('Please use the drop down to select your drinks and coding time.');
  } else {
    var drink = event.target.drinkSelect.value;
    var coding = event.target.codeSelect.value;
    localStorage.setItem('drink', JSON.stringify(drink));
    localStorage.setItem('coding', JSON.stringify(coding));
    location.href = 'game.html' // Will jump to game page
  }
} // selectHandler END

// Listen for submit button clickage
document.getElementById('selectInterface').addEventListener('submit', selectHandler);
