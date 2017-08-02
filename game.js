'use strict';
var coding; //need to get rid of
var drink;
var correctTime = 0;
var score = 0;
// var userInfo = [];

if(localStorage){
  drink = JSON.parse(localStorage.getItem('drink'));
  coding = JSON.parse(localStorage.getItem('coding'));
}

Images.all = [];
Images.allNames = ['compare1','compare2', 'kittens', 'llamas', 'loveprairedog', 'meerkats', 'penguins', 'puppies', 'sparkles', 'SpearsAgi', 'wardog', 'wolves', 'zombies'];

function Images(name) {
  this.name = name;
  this.source = 'img/' + this.name + '.jpg';
  Images.all.push(this);
}
for(var i = 0; i < Images.allNames.length; i++){
  new Images(Images.allNames[i]);
}
//ASSIGN ANSWERS TO each img object
Images.all[0].answer = [{y:'Bottom'},{n1: 'Top'}];
Images.all[0].question = 'Which one is the king?';
Images.all[1].answer = [{n1:'Bottom'},{y: 'neither'},{n2: 'top'}];
Images.all[1].question = 'Which one gives a Dam?';
Images.all[2].answer = [{n1: 4},{y: 5},{n2: 7}];
Images.all[2].question = 'How many kittens?';
Images.all[3].answer = [{n1: 2},{y: 3},{n2: 4}];
Images.all[3].question = 'How many llamas?';
Images.all[4].answer = [{n1: 1},{y: 3},{n2: 2}];
Images.all[4].question = 'How many prairie dogs?';
Images.all[5].answer = [{n1: 2},{y: 3},{n2: 4}];
Images.all[5].question = 'How many meerkats?';
Images.all[6].answer = [{n1: 3},{y: 5},{n2: 7}];
Images.all[6].question = 'How many penguins?';
Images.all[7].answer = [{n1: 8},{y: 10},{n2: 9}];
Images.all[7].question = 'How many...awww...puppies?';
Images.all[8].answer = [{n1:6},{y: 7},{n2: 9}];
Images.all[8].question = 'I sparkle, but how many?';
Images.all[9].answer = [{n1:'Left'},{y: 'Right'},{n2: 'both'}];
Images.all[9].question = 'Aguilera?';
Images.all[10].answer = [{n1:'Playtime!'},{y: 'War!!!'},{n2: 'Neither'}];
Images.all[10].question = 'Imma go:';
Images.all[11].answer = [{n1: 4},{y: 5},{n2: 8}];
Images.all[11].question = 'How many wolves?';
Images.all[12].answer = [{n1: 8},{y: 10},{n2: 'the whole herd!'}];
Images.all[12].question = 'How big is the herd?';








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

    var h2El = document.createElement('h2');
    h2El.textContent = Images.all[randomIndex].question;
    document.getElementById('answers').appendChild(h2El);

    answerShuffle(Images.all[randomIndex].answer);
    for(var n = 0; n < Images.all[randomIndex].answer.length; n++){
      var btnEl = document.createElement('button');
      btnEl.textContent = Object.values(Images.all[randomIndex].answer[n]);
      btnEl.setAttribute('id', Object.keys(Images.all[randomIndex].answer[n]));
      document.getElementById('answers').appendChild(btnEl);
    }

  } else {
    loadImg();
  }
  imageRender(drink, coding);//test, need to delete
}
//PAGE LOAD IMG
loadImg();

function imageRender(drink, coding){
  var shakeRule = [0, 1.1, 1, 0.1];
  var blurRule = [0, 2, 5, 7];
  var shakeLevel = shakeRule[drink] + 's';
  var blurLevel = 'blur(' + blurRule[coding] + 'px)';
  document.getElementById('img_box').children[0].style.animationName = 'shake ';
  document.getElementById('img_box').children[0].style.animationDuration = shakeLevel ;
  document.getElementById('img_box').children[0].style.filter = blurLevel;
}

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
  if(Images.previousImg.length !== Images.allNames.length){
    if(e.target.id === 'y'){
      correctTime += 1;
      score = (parseInt(drink) + parseInt(coding)) * correctTime;
      console.log(score);
      imageRender(0, 0);
      setTimeout(function(){
        document.getElementById('img_box').innerHTML = '';
        document.getElementById('answers').innerHTML = '';
        loadImg();
      }, 1500);
    } else {
      imageRender(0, 0);
      showScoreModal();
    }
  } else {
    imageRender(0, 0);
    showScoreModal();
  }
}

function showScoreModal() {
  document.getElementById('score_modal').style.display = 'block';
  document.getElementById('score').innerHTML = 'Your Score: ' + score + '!<br />' + 'Fuzzed right ' + correctTime + ' of them!';
}

function closeModalHandler(e) {
  console.log(e.target.className);
  if(e.target.className === 'close' || e.target.className === 'modal'){
    document.getElementById('score_modal').style.display = 'none';
  }
}

User.all = [];
function User(username, score){
  this.username = username;
  this.score = score;
  User.all.push(this);
}

function userSubmitHandler(e) {
  event.preventDefault();
  var name = e.target.username.value;
  console.log(name);
  new User(name, score);
  localStorage.setItem('User.all', JSON.stringify(User.all));
  location.href = 'highscores.html';
}
//EVENT listener
document.getElementById('answers').addEventListener('click', answersHandler);
document.getElementById('score_modal').addEventListener('click', closeModalHandler);
document.getElementById('user_form').addEventListener('submit', userSubmitHandler);
