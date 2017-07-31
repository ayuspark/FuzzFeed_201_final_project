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

for(var i = 0; i < Images.allNames.length; i++){
  new Images(Images.allNames[i]);
}

Images.all[0].answer = [{y:'1 bag'},{n1: '2bags'},{n2: '3bags'}];

Images.previousImg = [];


function loadImg(){
  var randomIndex = Math.floor(Math.random() * Images.allNames.length);
  if(!Images.previousImg.includes(randomIndex)) {
    Images.all[randomIndex];
    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', Images.all[randomIndex].source);
    imgEl.setAttribute('alt', Images.all[randomIndex].name);
    document.getElementById('img_box').appendChild(imgEl);
    Images.previousImg.push(randomIndex);

    for(var i = 0; i < Images.all[0].answer.length; i++){
      var btnEl = document.createElement('button');
      btnEl.textContent = Images.all[0].answer[i];
      btnEl.setAttribute('id', Object.keys(Images.all[0].answer[i]));
      document.getElementById('answers').appendChild(btnEl);
    }

  } else {
    loadImg();
  }
}
//PAGE LOAD IMG
loadImg();

function answersHandler(e) {
  console.log(e.target.id);
  if(e.target.id === 'y'){
    alert('Right!');
    document.getElementById('img_box').innerHTML = '';
    document.getElementById('answers').innerHTML = '';
    loadImg();
  } else {
    alert('Wrong!');
  }
}

//EVENT listener
document.getElementById('answers').addEventListener('click', answersHandler);
