document.body.style.background = "#C6E7FF";

document.addEventListener("DOMContentLoaded", function () {
  var boxes = document.querySelectorAll("#box");
  var dragSource = null;

  
  boxes.forEach(function (box) {
    box.setAttribute("draggable", true);
    box.addEventListener("dragstart", DragStart, false);
    box.addEventListener("dragover", DragOver, false);
    box.addEventListener("drop", handleDrop, false);

    box.addEventListener("touchstart", TouchStart, false);
    box.addEventListener("touchmove", TouchMove, false);
    box.addEventListener("touchend", TouchEnd, false);
  });

 
  function DragStart(evt) {
    dragSource = this;
    evt.dataTransfer.setData("text/plain", this.innerHTML);
    evt.dataTransfer.effectAllowed = "move";
  }

  function DragOver(evt) {
    evt.preventDefault(); 
  }

  function handleDrop(evt) {
    evt.preventDefault();
    if (dragSource !== this) {
      let droppedData = evt.dataTransfer.getData("text/plain");
      if (droppedData) {
        dragSource.innerHTML = this.innerHTML;
        this.innerHTML = droppedData;
      }
    }
  }

  function TouchStart(_evt) {
    dragSource = this;
    dragSource.classList.add("dragging");
  }

  function TouchMove(evt) {
    evt.preventDefault(); 

    let touch = evt.touches[0];
    let targetBox = document.elementFromPoint(touch.clientX, touch.clientY);

    if (targetBox && targetBox.id === "box" && targetBox !== dragSource) {
      swapElements(dragSource, targetBox);
    }
  }

  function TouchEnd(_evt) {
    dragSource.classList.remove("dragging");
    dragSource = null;
  }

  function swapElements(source, target) {
    let temp = source.innerHTML;
    source.innerHTML = target.innerHTML;
    target.innerHTML = temp;
  }
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
        // click and change border color
        const black = Math.floor(Math.random() * 200);
        const indigo = Math.floor(Math.random() * 230);
        const pink = Math.floor(Math.random() * 240);
        document.getElementById("boxes").style.borderColor = "rgb(" + black + ", " + indigo + ", " + pink + ")";
    }
}
// third function
let remainingTime = 20; 
let countdownInterval;

function Click() {
    if (!countdownInterval) { 
        countdownInterval = setInterval(updateTimer, 1000);
    }
      for (var i = boxes.children.length; i >= 0; i--) {
        boxes.appendChild(boxes.children[Math.random() * i | 0]);
      }
}
function updateTimer() {
    if (remainingTime > 0) {
        remainingTime--;
        document.getElementById("time").innerHTML = `${remainingTime} sec`;
    } else {
        clearInterval(countdownInterval);
        alert("Time is up!");
        location.reload(); 
    }
}
//  if else ,win lose
const btnStopElement = document.getElementById("time");
const correctOrder = "123456789";
function ClearInterval() {
    const currentOrder = Array.from(document.querySelectorAll('#box .box'))
        .map(box => box.textContent)
        .join('');
    
    if (currentOrder === correctOrder) {
      alert("You win!");
    } else {
      alert("You Lose!");
    }
    location.reload(); 
    return; 
}