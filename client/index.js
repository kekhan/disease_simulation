const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Constant Variables
const TIMER = 25;
const infected = [true,false];
//function calls
draw();
// with of the screen
function draw(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// character of the game
// character will be stored in a object
function menu(){
  /*this function will show the main menu. the player will be able to choose to
  play the simulation/game  get game instructions and statistics of game.*/
}
function save_game(){
  /*this function will save the current state of the game*/
}
function select_prevention_tool(){
  /*The player will be able to select a tool to help characters from disease.*/
}
function give_help(){
  /*this function should give the selected preventive meth to a character.*/
}
function Character (x,y,width,height,type,life,infected,outside,sleeping){
  // character object
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.life = life;
  this.infected = infected;
  this.outside = outside;
  this.sleeping = sleeping;
  //instance methods of class
  this.draw = function(){
    context.rect(this.x, this.y, this.width,this.height);
    context.fill();
  };
  this.update = function(){
    this.draw()
  }
}

var human = [];
for (var i=0; i<10; i++){
  human[i] = new Character(Math.random()*650,Math.random()*650,50,50);
}

function animator(){

  context.clearRect(0,0,canvas.width,canvas.height);
  for (let i =0;i<=human.length;i++){
    human[i].update();
  }
}
animator();
