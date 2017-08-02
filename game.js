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
Images.allNames = ['compare1','compare2','kittens','llamas','loveprairedog','meerkats','penguins','puppies','sparkles','SpearsAgi','wardog','wolves','zombies','captainAmerica','wolfprey','pixarorreal','kermit','moontortilla','therock','easyfennecfox','shelves','flexing','easyquokka','stich','eeyore','thordouble','jamesfranco','waxjackie','drax','catfightdog','fakeocean'];

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
/////
Images.all[1].answer = [{n1:'Bottom'},{y: 'neither'},{n2: 'top'}];
Images.all[1].question = 'Which one gives a Dam?';
//////
Images.all[2].answer = [{y: 5},{n1: 4},{n2: 7}];
Images.all[2].question = 'How many kittens?';
////
Images.all[3].answer = [{n1: 2},{n2: 3},{y: 4}];
Images.all[3].question = 'How many llamas?';
///
Images.all[4].answer = [{y: 3},{n1: 1},{n2: 2}];
Images.all[4].question = 'How many prairie dogs?';
///
Images.all[5].answer = [{n1: 2},{y: 3},{n2: 4}];
Images.all[5].question = 'How many meerkats?';
/////
Images.all[6].answer = [{n1: 3},{y: 5},{n2: 7}];
Images.all[6].question = 'How many penguins heads?';
//////
Images.all[7].answer = [{n1: 8},{y: 10},{n2: 9}];
Images.all[7].question = 'How many floofs of puppers?';
////
Images.all[8].answer = [{n1:6},{y: 7},{n2: 9}];
Images.all[8].question = 'How many sparkles are on Team Edward?';
///
Images.all[9].answer = [{n1:'Left'},{y: 'Right'},{n2: 'both'}];
Images.all[9].question = 'which one is Christina Aguilera?';
///
Images.all[10].answer = [{n1:'Play!'},{y: 'to War!!!'},{n2: 'Neither'}];
Images.all[10].question = 'Imma go :';
//
Images.all[11].answer = [{n1: 4},{y: 5},{n2: 8}];
Images.all[11].question = 'How many wolves?';
///
Images.all[12].answer = [{n1: 6},{y: 8},{n2: 'The whole horde!'}];
Images.all[12].question = 'How many zombies are gonna eat you?';
///
Images.all[13].answer = [{n1: 'left'},{y: 'right'},{n2: 'Both of them'}];
Images.all[13].question = 'Which one is Cap\'s stunt double?';
///
Images.all[14].answer = [{n1: 'Catching prey'},{y: 'Playing puppers!'}];
Images.all[14].question = 'Is this wolf catching prey or playing?';
///
Images.all[15].answer = [{n1: 'pixar!'},{y: 'real!'}];
Images.all[15].question = 'Is this a pixar fishy or real fishy?';
//
Images.all[16].answer = [{n1: 'left'},{y: 'right'}];
Images.all[16].question = 'which one is Kermit the frog?';
/////////
Images.all[17].answer = [{n1: 'tortilla moon'},{y: 'moon'}];
Images.all[17].question = 'The Moon or a torilla on the window?';
///
Images.all[18].answer = [{n1: 'right'},{y: 'left'}];
Images.all[18].question = 'which one is the rock?';
/////
Images.all[19].answer = [{n1: 'a giraffe'},{y: 'a fennec fox!'}, {n2: 'elephant'}];
Images.all[19].question = 'what kind of animal is running?';
////
Images.all[20].answer = [{n1: 'messy book shelf'},{y: 'pile of boxes'}, {n2: 'just a mess'}];
Images.all[20].question = 'is this a messy book shelf or pile of boxes?';
//
Images.all[21].answer = [{n1: 'putting others in a headlock'},{y: 'flexin it\'s gainz'}, {n2: 'popping it\'s head out'}];
Images.all[21].question = 'what is the squirrel doing?';
//
Images.all[22].answer = [{n1: 'a fence'},{y: 'quokka'}, {n2: 'a brick'}];
Images.all[22].question = 'what adorable animal is this?';
//
Images.all[23].answer = [{n1: 'who\'s eeyore?'},{y: 'it\'s Stich!'}, {n2: 'a brick'}];
Images.all[23].question = 'is this Stich or Eeyore?';
//
Images.all[24].answer = [{n1: 'no'},{y: 'yes'}];
Images.all[24].question = 'is this eeyore from winnie the pooh?';
//
Images.all[25].answer = [{n1: 'right'},{y: 'left'}];
Images.all[25].question = 'which one is real thor?';
//
Images.all[26].answer = [{n1: 'right'},{y: 'left'}];
Images.all[26].question = 'which one is James Franco?';
//
Images.all[27].answer = [{n1: 'right, other is wax figure' }, {n2: 'left,other is wax figure'}, {y: 'he is his own double with a wax figure!'}];
Images.all[27].question = 'which one is jackie\'s stunt double?';
//
Images.all[28].answer = [{n1: 'right'},{y: 'left'}];
Images.all[28].question = 'which one is NOT the stunt double for Drax The Destroyer?';
//
Images.all[29].answer = [{n1: 'the dog! it\'s laying the smackdown!'},{y: 'the cat! it\'s throwing them hands!'}];
Images.all[29].question = 'Who is winning the play fight?';
////
Images.all[30].answer = [{n1: 'real'},{y: 'pixar'}];
Images.all[30].question = 'real ocean or pixar ocean?';
//++++++++++++++++++++++++++++++++++
//+++++++++END OF QUESTIONS+++++++++
//++++++++++++++++++++++++++++++++++





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
    } else if(e.target.id !== 'answers') {
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
  userSubmitHandler.reset();
}
//EVENT listener
document.getElementById('answers').addEventListener('click', answersHandler);
document.getElementById('score_modal').addEventListener('click', closeModalHandler);
document.getElementById('user_form').addEventListener('submit', userSubmitHandler);
