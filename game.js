import {update as updateSnake,draw as drawSnake, snake_speed,getSnakeHead,snakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js'
import { outSideGrid } from './grid.js';


let lastRenderTime=0;
const gameBoard=document.getElementById('game-board');
let gameOver=false;


function main(currentTime) {
    if (gameOver) {
      if (confirm('You lost. Press ok to restart.')) { //okay-true
        window.location = '/'
      }
      return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000
    // console.log(secondsSinceLastRender);

    if(secondsSinceLastRender<1/snake_speed) return 
    console.log('Render');
    lastRenderTime=currentTime

    update()
    draw()
}



window.requestAnimationFrame(main);

function update(){
    updateSnake()
    updateFood();
    checkDeath()

}
 function draw(){
    gameBoard.innerHTML='';
 drawSnake(gameBoard)
 drawFood(gameBoard)
 }

 function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
  }