const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

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
