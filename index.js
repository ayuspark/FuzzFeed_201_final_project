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

function openMenuHandler(e){
  if(e.target.className === 'mini_menu_icon'){
    document.getElementsByClassName('menu')[0].style.display = 'block';
    document.getElementsByClassName('mini_menu_icon')[0].style.display = 'none';
  }
}

function closeMenuHandler(e) {
  if(e.target.className === 'close'){
    document.getElementsByClassName('menu')[0].style.display = 'none';
    document.getElementsByClassName('mini_menu_icon')[0].style.display = 'block';
  }
}
document.getElementById('nav_bar').addEventListener('click', openMenuHandler);
document.getElementById('nav_bar').addEventListener('click', closeMenuHandler);

// Listen for submit button clickage
document.getElementById('selectInterface').addEventListener('submit', selectHandler);
