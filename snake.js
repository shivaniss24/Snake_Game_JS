let lastRenderTime=0;
const snake_speed=2;
function main(currentTime){
    // window.requestAnimationFrame(main);
    const secondsSinceLastRender=(currentTime-lastRenderTime);
    window.requestAnimationFrame(main);
  
    // console.log(secondsSinceLastRender);

    if(secondsSinceLastRender<1/snake_speed)return 
    console.log('Render');
    lastRenderTime=currentTime;

    update()
    draw()
}


window.requestAnimationFrame(main);