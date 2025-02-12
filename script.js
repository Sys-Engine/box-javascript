document.body.style.background = "#C6E7FF";

var columns = document.querySelectorAll('#box');
var draggingClass = 'dragging';
var dragSource;

Array.prototype.forEach.call(columns, function (col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false)
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});

function handleDragStart (evt) {
  dragSource = this;
  evt.target.classList.add(draggingClass);
  evt.dataTransfer.effectAllowed = 'move';
  evt.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver (evt) {
  evt.dataTransfer.dropEffect = 'move';
  evt.preventDefault();
}

function handleDragEnter (_evt) {
  this.classList.add('over');
}

function handleDragLeave (_evt) {
  this.classList.remove('over');
}

function handleDrop (evt) {
  evt.stopPropagation();
  
  if (dragSource !== this) {
    dragSource.innerHTML = this.innerHTML;
    this.innerHTML = evt.dataTransfer.getData('text/html');
  }
  
  evt.preventDefault();
}

function handleDragEnd (_evt) {
  Array.prototype.forEach.call(columns, function (col) {
    ['over', 'dragging'].forEach(function (className) {
      col.classList.remove(className);
    });
  });
}

// second function on clickfunction
function handelClick()  {
  isRunning = true;
    const button = document.querySelector("#Click");
    const boxes = document.querySelector("#boxes");
    
    if (button && boxes) {
        button.addEventListener("click", () => {
            for (var i = boxes.children.length; i >= 0; i--) {
                boxes.appendChild(boxes.children[Math.random() * i | 0]);
            }
        });


        // for border bottom
        const black = Math.floor(Math.random() * 250);
        const indigo = Math.floor(Math.random() * 250);
        const pink = Math.floor(Math.random() * 240);
        document.getElementById("boxes").style.borderBottomColor = "rgb(" + black + ", " + indigo + ", " + pink + ")";
      
        // for border top 
        const purple = Math.floor(Math.random() * 230);
        const blue = Math.floor(Math.random() * 250);
        const brown = Math.floor(Math.random() * 230);
    
          document.getElementById("boxes").style.borderTopColor = "rgb(" + purple + ", " + blue + ", " + brown + ")";

        //   border left color 
        const yellow = Math.floor(Math.random() * 255);
        const red = Math.floor(Math.random() * 255);
        const grenn = Math.floor(Math.random() * 255);
    // for border right color
          document.getElementById("boxes").style.borderLeftColor = "rgb(" + yellow + ", " + red + ", " + grenn + ")";
    
          const white = Math.floor(Math.random() * 25);
          const redd = Math.floor(Math.random() * 225);
          const green = Math.floor(Math.random() * 200);
      
            document.getElementById("boxes").style.borderRightColor = "rgb(" + white + ", " + redd + ", " + green + ")";
    }
}

document.getElementById("modal").style.display = "none";       
function Click() {
const countDownDuration = 22000;
  const countDownElement = document.getElementById("time");
  const Time = Date.now() + countDownDuration;
  isRunning = true;
  //  counter second
  function updateCountdown() {
    const now = Date.now();
  const remainingTime = Time - now;
  const seconds = Math.floor((remainingTime % (1000 * 23)) / 1000);
  countDownElement.textContent = `${seconds} seconds`;
  
  // loop condition
  if (!isRunning) {
    isRunning = false;
    clearInterval(countdownInterval);
    // for stop all the function when time is over and module show
    stopAllOtherFunctions();
    function stopAllOtherFunctions() {  
      Array.prototype.forEach.call(columns, function (col) {
        col.removeEventListener('dragstart', handleDragStart, false);
        col.removeEventListener('dragenter', handleDragEnter, false);
        col.removeEventListener('dragover', handleDragOver, false);
        col.removeEventListener('dragleave', handleDragLeave, false);
        col.removeEventListener('drop', handleDrop, false);
        col.removeEventListener('dragend', handleDragEnd, false);      
        document.getElementById("Click").disabled = true;
      });
}   
  }
  if (remainingTime <= 2 ) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("countdown").disabled = true;
    clearInterval(countdownInterval);
    document.getElementById("Click").disabled = true;
}
}
const countdownInterval = setInterval(updateCountdown, 1000);
}
// next function jab modal show ho cancel krny ka lea 
function handelClose(){
document.getElementById("modal").style.display = "none";
// time set  for show seconds
setTimeout(function() {
  document.getElementById("time").innerHTML = "";
  location.reload();
},10);
}
const btnStopElement = document.getElementById("time");
function ClearInterval() {
  if(ClearInterval != false){
isRunning = false;
}
btnStopElement.addEventListener('click', ClearInterval);
}