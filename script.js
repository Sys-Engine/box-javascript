
document.body.style.background = "#C6E7FF";

document.addEventListener("DOMContentLoaded", function () {
  var columns = document.querySelectorAll("#box .box");
  var draggingClass = "dragging";
  var dragSource;

  columns.forEach(function (col) {
    col.setAttribute("draggable", true);
    col.addEventListener("dragstart", handleDragStart, false);
    col.addEventListener("dragenter", handleDragEnter, false);
    col.addEventListener("dragover", handleDragOver, false);
    col.addEventListener("dragleave", handleDragLeave, false);
    col.addEventListener("drop", handleDrop, false);
    col.addEventListener("dragend", handleDragEnd, false);
  });

  function handleDragStart(evt) {
    dragSource = this;
    evt.target.classList.add(draggingClass);
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragOver(evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  }

  function handleDragEnter() {
    this.classList.add("over");
  }

  function handleDragLeave() {
    this.classList.remove("over");
  }

  function handleDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    if (dragSource !== this) {
      dragSource.innerHTML = this.innerHTML;
      this.innerHTML = evt.dataTransfer.getData("text/html");
    }
  }

  function handleDragEnd() {
    columns.forEach(function (col) {
      col.classList.remove("over", "dragging");
    });
  }

  let touchStartElement;

  columns.forEach(function (col) {
    col.addEventListener("touchstart", function (evt) {
      touchStartElement = this;
      evt.target.classList.add(draggingClass);
    });

    col.addEventListener("touchmove", function (evt) {
      evt.preventDefault();
      let touch = evt.touches[0];
      let target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target && target.classList.contains("box")) {
        target.classList.add("over");
      }
    });

    col.addEventListener("touchend", function (evt) {
      let touch = evt.changedTouches[0];
      let target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target && target.classList.contains("box") && touchStartElement !== target) {
        let temp = touchStartElement.innerHTML;
        touchStartElement.innerHTML = target.innerHTML;
        target.innerHTML = temp;
      }
      columns.forEach(col => col.classList.remove("over", "dragging"));
    });
  });
});


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
        const orange = Math.floor(Math.random() * 255);
    // for border right color
          document.getElementById("boxes").style.borderLeftColor = "rgb(" + yellow + ", " + red + ", " + orange + ")";
    
          const white = Math.floor(Math.random() * 25);
          const gray = Math.floor(Math.random() * 225);
          const voilet = Math.floor(Math.random() * 200);
      
            document.getElementById("boxes").style.borderRightColor = "rgb(" + white + ", " + gray + ", " + voilet+ ")";
    }
}
document.getElementById("modal").style.display = "none";  
let countdownInterval;
let isRunning = false;
let remainingTime = 20000; 
let endTime;
let disabled = false;
// function Click() {

  
//   const countDownElement = document.getElementById("time");
//   if (isRunning) return;
  
  
//   endTime = Date.now() + remainingTime;
//   isRunning = true;

//   document.getElementById("Click").disabled = false;
  
//   for (var i = boxes.children.length; i >= 0; i--) {
//     boxes.appendChild(boxes.children[Math.random() * i | 0]);
//   }

//   Array.prototype.forEach.call(columns, function (col) {
//     col.addEventListener("dragstart", handleDragStart, false);
//     col.addEventListener("dragenter", handleDragEnter, false);
//     col.addEventListener("dragover", handleDragOver, false);
//     col.addEventListener("dragleave", handleDragLeave, false);
//     col.addEventListener("drop", handleDrop, false);
//     col.addEventListener("dragend", handleDragEnd, false);
//     ["over", "dragging"].forEach(function (className) {
//       col.classList.remove(className);
//     });
//   });
  
//   function updateCountdown() {
//     const now = Date.now();
//     remainingTime = Math.max(0, endTime - now);
//     const seconds = Math.floor(remainingTime / 1000);
//     countDownElement.textContent = `${seconds} sec`;
    
//     if (remainingTime <= 0) {
//       isRunning = false;
//       clearInterval(countdownInterval);
//       document.getElementById("modal").style.display = "flex";
//       document.getElementById("Click").disabled = true;
//     }
//   }
  
//   countdownInterval = setInterval(updateCountdown, 1000);
// }

function stopCountdown() {
  isRunning = false;
  clearInterval(countdownInterval); 
}

// Function to stop all interactions when time runs out
function Click() {
  const countDownDuration = 22000;
  const countDownElement = document.getElementById("time");
  const Time = Date.now() + countDownDuration;
  isRunning = true;
  document.getElementById("Click").disabled = false;
  for (var i = boxes.children.length; i >= 0; i--) {
    boxes.appendChild(boxes.children[Math.random() * i | 0]);
  }

  function stopAllOtherFunctions() {
    Array.prototype.forEach.call(columns, function (col) {
      col.removeEventListener("dragstart", handleDragStart, false);
      col.removeEventListener("dragenter", handleDragEnter, false);
      col.removeEventListener("dragover", handleDragOver, false);
      col.removeEventListener("dragleave", handleDragLeave, false);
      col.removeEventListener("drop", handleDrop, false);
      col.removeEventListener("dragend", handleDragEnd, false);
      document.getElementById("Click").disabled = true;
    });
  }

  function updateCountdown() {
    const now = Date.now();
    const remainingTime = Time - now;
    const seconds = Math.max(0, Math.floor(remainingTime / 1000));
    countDownElement.textContent = `${seconds} sec`;

    if (remainingTime <= 0) {
      isRunning = false;
      clearInterval(countdownInterval);
      document.getElementById("modal").style.display = "flex";
      document.getElementById("Click").disabled = true;
      document.getElementById("stop").disabled = true;
    }

  if (!isRunning) {
    isRunning = false;
    clearInterval(countdownInterval);

    stopAllOtherFunctions();
  }

    

  if (remainingTime <= 0 ) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("countdown").disabled = true;
    clearInterval(countdownInterval);
    document.getElementById("Click").disabled = true; 
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
}
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
const correctOrder = "123456789";
const currentOrder = "65827413";
function ClearInterval() {
    const currentOrder = Array.from(document.querySelectorAll('#box .box'))
        .map(box => box.textContent)
        .join('');
    
    if (currentOrder != correctOrder) {
      alert("You Lose!");
      document.getElementById("modal").style.display = "none"; 
    } else {
      alert("You win!");
    }
    location.reload();
    document.getElementById("modal").style.display = "none";   
    return; 
}

function ClickInterval() {
    isRunning = false;
}





