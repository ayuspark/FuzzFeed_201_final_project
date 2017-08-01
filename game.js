'use strict';
var coding = '5px'; //need to get rid of
var drink = '0.12';
//CREATE IMG
function Images(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  Images.all.push(this);
}

Images.all = [];
Images.allNames = ['compare1','compare2', 'kittens', 'llamas', 'loveprairedog', 'meerkats', 'penguins', 'puppies', 'sparkles', 'SpearsAgi', 'wardog', 'wolves', 'zombies'];

for(var i = 0; i < Images.allNames.length; i++){
  new Images(Images.allNames[i]);
}

//ASSIGN ANSWERS TO each img object
Images.all[0].answer = [{y:'Bottom'},{n1: 'Top'}];
Images.all[1].answer = [{n1:'Bottom'},{y: 'Top'},{n2: 'Both'}];
Images.all[2].answer = [{n1: 4},{y: 5},{n2: 7}];
Images.all[3].answer = [{n1: 2},{y: 3},{n2: 4}];
Images.all[4].answer = [{n1: 1},{y: 3},{n2: 2}];
Images.all[5].answer = [{n1: 2},{y: 3},{n2: 4}];
Images.all[6].answer = [{n1: 3},{y: 5},{n2: 7}];
Images.all[7].answer = [{n1: 8},{y: 10},{n2: 9}];
Images.all[8].answer = [{n1:6},{y: 7},{n2: 9}];
Images.all[9].answer = [{n1:'Left'},{y: 'Right'},{n2: 'both'}];
Images.all[10].answer = [{n1:'Playtime!'},{y: 'War!!!'},{n2: 'Neither'}];
Images.all[11].answer = [{n1: 4},{y: 5},{n2: 8}];
Images.all[12].answer = [{n1: 8},{y: 10},{n2: 'the whole herd!'}];








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
    // for(var i = 0; i < Images.all.length; i++){
    answerShuffle(Images.all[randomIndex].answer);
    for(var n = 0; n < Images.all[randomIndex].answer.length; n++){
      var btnEl = document.createElement('button');
      btnEl.textContent = Object.values(Images.all[randomIndex].answer[n]);
      btnEl.setAttribute('id', Object.keys(Images.all[randomIndex].answer[n]));
      document.getElementById('answers').appendChild(btnEl);
    }
    // }

  } else {
    loadImg();
  }
  imageRender('0.12', '5px');//test, need to delete
}
//PAGE LOAD IMG
loadImg();

function answerShuffle(answerArray){
  var currentIndex = answerArray.length, randomIndex, tempHolder;
  while(currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    tempHolder = answerArray[currentIndex];
    answerArray[currentIndex] = answerArray[randomIndex];
    answerArray[randomIndex] = tempHolder;
  }
  return answerArray;
}

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
  document.getElementById('img_box').children[0].style.filter = blurLevel;
}
