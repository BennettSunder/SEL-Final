let additional = false;
let nowDragging = null;
let offset = [0,0];

function openDialogue(){
  // show dialogue
  document.getElementById('full-grey-out').style.display = 'grid';
  document.getElementById('dialogue-container').style.display = 'block';
  // center dialogue
  document.getElementById('dialogue-container').style.top = window.innerHeight/2 - (document.getElementById('dialogue-container').offsetHeight/2)+'px';
  document.getElementById('dialogue-container').style.left = window.innerWidth/2 - (document.getElementById('dialogue-container').offsetWidth/2)+'px';
}

function cancelDialogue(){
  // hide dialogue
  document.getElementById('full-grey-out').style.display = 'none';
  document.getElementById('dialogue-container').style.display = 'none';
}

function addCount(){
  // create variable set to the current confirmation count
  let currentCount = parseInt(document.getElementById('confirm-counter').innerHTML);
  // increase previously introduced variable by 1
  currentCount += 1;
  // set counter value to new variable amount
  document.getElementById('confirm-counter').innerHTML = currentCount;
  // close dialogue
  cancelDialogue();
}

function dragElement(){
  // define which element we are dragging  
  let element = document.getElementById('dialogue-container');
    element.style.position = "absolute";

    // nowDragging is now not null, allowing the rest of the program to occur
    document.getElementById('dialogue-header').onmousedown = function(){
        nowDragging = element;
        // alert(nowDragging)
         
    }
    // when the user clicks anywhere on the webpage, the offset[]'s two items will be set to their respective values based on mouse movement
    this.addEventListener('mousedown', (event) =>{
        const rect = nowDragging.getBoundingClientRect();
        offset[0] = event.clientX - rect.left;
        offset[1] = event.clientY - rect.bottom;
    });
}

// cancel any dragging
document.onmouseup = function(){
    nowDragging = null;
}

document.onmousemove = function(move){

  // retrieve dialogue position 
  let x = move.pageX;
  let y = move.pageY;

  // set the left and top style attributes to the appropriate values based off of mouse movement
  nowDragging.style.left = x - offset[0] + "px";
  nowDragging.style.top = y - offset[1] - nowDragging.offsetHeight + "px";

  // prevent the dialogue from leaving the window
  keepInWindow();
}

window.addEventListener('resize', () =>{
  keepInWindow();
});

function keepInWindow(){
  const box = nowDragging.getBoundingClientRect();


  // if the dialogue's transform dimensions exceed the bounds of the window, they will be set to the maximum value while staying in the window  
  if (box.top < 0){
    nowDragging.style.top = '0px';
  }
  if (box.bottom > window.innerHeight){
    nowDragging.style.top = window.innerHeight - 1 - box.height +'px';
  }
  if (box.left < 0){
    nowDragging.style.left = '0px';
  }
  if (box.right > window.innerWidth){
    nowDragging.style.left =  window.innerWidth - 1 - box.width + 'px';
  }

}
