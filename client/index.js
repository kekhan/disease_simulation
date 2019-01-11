const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Constant Variables
const TIMER = 25;
const INFECTED = [true,false];
const LIFE = 10;
const SLEEP = [true, false];
const OUTSIDE = [true, false];
const colors= ['green','purple'];

// with of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
function Character (x,y,width,height,life,infected,outside,sleeping){
  // character object
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.life = life;
  this.infected = infected;
  this.outside = outside;
  this.sleeping = sleeping;
  this.good = colors[0];
  this.sick = colors[1];
  this.infected = INFECTED[Math.floor(Math.random()*INFECTED.length)];
  this.life = LIFE;
  //instance methods of class
  this.draw = function(){
    context.beginPath();
    context.arc(this.x, this.y, 30, 0, 2 * Math.PI);
    if(this.infected){

		 context.fillStyle = this.sick;
		 context.fill();
    }
    else{
      context.fillStyle = this.good;
 		 context.fill();

    }
    }

  this.update = function(){
    this.draw()
  }
}

var human = [];
for (var i=0; i<5; i++){
  human.push(new Character(Math.random()*canvas.width,Math.random()*canvas.height,10,10));
}
console.log(human);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  for (var i =0;i<human.length;i++){
    human[i].update();
  }
}
animate();
