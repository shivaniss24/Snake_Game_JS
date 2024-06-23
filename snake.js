export const snake_speed=1;

const snakeBody=[{x:11, y:11}]
export function update(){
    console.log('update snake')

}

export function draw(gameBoard){
   snakeBody.forEach(segment=>{
    const snakeElement=document.createElement('div')
    snakeElement.style.gridRowStart=segment.y
    snakeElement.style.gridColumnStart=segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement);

   })
}