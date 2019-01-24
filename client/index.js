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


function setTimerDeath(val){
  val = 0;
  context.fillStyle = "black";
  context.fill();
}
function Character (x,y,radius,isHuman, isInsect, isAnimal){
  // character object
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.isHuman = isHuman;
  this.isInsect = isInsect;
  this.isAnimal = isHuman;
  this.good = colors[0];
  this.sick = colors[1];
  this.infected = INFECTED[Math.floor(Math.random()*INFECTED.length)];
  this.life = LIFE;
  //instance methods of class
  this.draw = function(){
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    if(this.isHuman){
      if(this.infected){
        context.fillStyle = this.sick;
   		 context.fill();
       }
       else{
         context.fillStyle = this.good;
    		 context.fill();
       }

      }
      if(this.isInsect){
        context.fillStyle = "black";
        context.fill();
      }
    }

  this.update = function(){
    this.draw()
  }
}
var insect =[];

var human = [];
for (var i=0; i<5; i++){
  human.push(new Character(Math.random()*canvas.width-30*2,Math.random()*canvas.height-30,30,true,false,false));
  insect.push(new Character(Math.random()*canvas.width-5*2,Math.random()*canvas.height-5,5,false,true,false));
}
console.log(human);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  for (var i =0;i<human.length;i++){
    human[i].update();
    insect[i].update();
  }
}
animate();
