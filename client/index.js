const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const ctxBtn = canvas.getContext('2d');
var count=0;
//Constant Variables
const TIMER = 25;
const INFECTED = [true,false];
const LIFE = 10;
const SLEEP = [true, false];
const OUTSIDE = [true, false];
const colors= ['green','purple'];
var start =false;


// with of the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
function game_timer(){
  const TIME = 15;
  context.font = "30px Arial";
  setInterval(function(){
    context.fillText("Count"+ count++, 100, 50);
  },100);

}

function main_menu(){
  var bg = document.getElementById('canvas');
  bg.style.background ="red";
  const btnx=innerWidth/2;
  const btny=innerHeight/2;
  const btnw=200;
  const btnh=50;
  ctxBtn.fillStyle ="black";
  ctxBtn.fillRect(btnx,btny,btnw,btnh);
  ctxBtn.font = "25px Georgia";
  ctxBtn.fillStyle="yellow";
  ctxBtn.fillText("START GAME",btnx+5,btny+btnh-5);


  canvas.addEventListener('click', function(e){
    if(e.x>btnx && e.x < btnx+btnw && e.y>btny && e.y< btny+btnh){
      bg.style.background ="white";
      play_game();

    }
  });
}
function play_game(){
    animate();
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
  human.push(new Character(Math.random()*canvas.width-100*2,
  Math.random()*canvas.height-30,30,true,false,false));
  insect.push(new Character(Math.random()*canvas.width-100*2,
  Math.random()*canvas.height-5,5,false,true,false));
}
console.log(human);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,canvas.width,canvas.height);

  for (var i =0;i<human.length;i++){
    human[i].update();
    insect[i].update();
  }
  context.font ="20px Georgia";
  context.fillStyle="black";
  context.fillText("Country:Uganda    Disease: Malaria",20, 20);


}
main_menu();
