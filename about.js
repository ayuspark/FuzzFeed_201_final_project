'use strict';

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
