'use strict';

function selectHandler(event){
  event.preventDefault();

  var drink = event.target.drinkSelect.value;
  var coding = event.target.codeSelect.value;
  localStorage.setItem('drink', JSON.stringify(drink));
  localStorage.setItem('coding', JSON.stringify(coding));

  // if(nothing is selected){
  //
  // } else {
   location.href = 'game.html' // Will jump to game page
  // }
} // selectHandler END

// Listen for submit button clickage
document.getElementById('selectInterface').addEventListener('submit', selectHandler);


// ADD IF/ELSE FOR WHEN NOTHING IS SELECTED
