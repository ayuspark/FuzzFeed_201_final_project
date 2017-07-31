'use strict';
//CREATE IMG
function Images(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  // this.vote = 0;//count when img gets picked
  // this.view = 0;//count when img displays
  Images.all.push(this);
}

Images.all = [];
Images.allNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

Images.previousImg = [];

for(var i = 0; i < Images.allNames.length; i++){
  new Images(Images.allNames[i]);
}

function loadImg(){
  var randomIndex = Math.floor(Math.random() * Images.allNames.length);
  if(!Images.previousImg.includes(randomIndex)) {
    Images.all[randomIndex];
    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', Images.all[randomIndex].source);
    imgEl.setAttribute('alt', Images.all[randomIndex].name);
    document.getElementById('img_box').appendChild(imgEl);
    Images.previousImg.push(randomIndex);
  } else {
    loadImg();
  }
}
//PAGE LOAD IMG
loadImg();
