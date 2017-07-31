'use strict';
var coding = '20px'; //need to get rid of
var drink = '0.12';
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

//ASSIGN ANSWERS TO each img object
Images.all[0].answer = [{y:'1 bag'},{n1: '2bags'},{n2: '3bags'}];
Images.all[1].answer = [{n1:'1 bag'},{y: '2bags'},{n2: '3bags'}];

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

//!!!!!!!!!!!!!the following line needs a for loop for ALL imgs
    for(var i = 0; i < Images.all[1].answer.length; i++){
      var btnEl = document.createElement('button');
      btnEl.textContent = Object.values(Images.all[1].answer[i]);
      btnEl.setAttribute('id', Object.keys(Images.all[1].answer[i]));
      document.getElementById('answers').appendChild(btnEl);
    }

  } else {
    loadImg();
  }
  imageRender('0.12', '10px');//test, need to delete
}
//PAGE LOAD IMG
loadImg();
imageRender(drink, coding);

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

//IMG ALTERING FUNCTION
//test:

function imageRender(drink, coding){
  var shakeLevel = drink + 's';
  var blurLevel = 'blur(' + coding + ')';
  document.getElementById('img_box').children[0].style.animationName = 'shake ';
  document.getElementById('img_box').children[0].style.animationDuration = shakeLevel ;
  document.getElementById('img_box').children[0].style.WebkitFilter = blurLevel;
}
