document.body.style.background = "#C6E7FF";
// first function
// document.addEventListener("DOMContentLoaded", function () {
//   var columns = document.querySelectorAll("#box");
//   var dragSource;

//   columns.forEach(function (col) {
//     col.setAttribute("draggable", true);
//     col.addEventListener("dragstart", DragStart, false);
//     col.addEventListener("dragover", DragOver, false);
//     col.addEventListener("drop", handleDrop, false);
//   });

//   function DragStart(evt) {
//     dragSource = this;
//     console.log("drag is start",this.evt);
//     evt.dataTransfer.setData("text/plain", this.innerHTML);
//     evt.dataTransfer.effectAllowed = "move";
//   }

//   function DragOver(evt) {
//     console.log("search for box",this.evt);
//     evt.preventDefault();
//     evt.dataTransfer.effectAllowed = "move";
//   }

//   function handleDrop(evt) {
//     console.log("box is drop",this.evt);
//     evt.preventDefault();

//     evt.stopPropagation(); {
//       dragSource.innerHTML = this.innerHTML;
//       this.innerHTML = evt.dataTransfer.getData("text/plain");
//       evt.dataTransfer.effectAllowed = "move";
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  var columns = document.querySelectorAll("#box"); // Use class instead of ID
  var dragSource;

  columns.forEach(function (col) {
    col.setAttribute("draggable", true);
    col.addEventListener("dragstart", DragStart, false);
    col.addEventListener("dragover", DragOver, false);
    col.addEventListener("drop", handleDrop, false);
  });

  function DragStart(evt) {
    dragSource = this;
    evt.dataTransfer.setData("text/plain", this.innerHTML); // Change "text/html" to "text/plain"
    evt.dataTransfer.effectAllowed = "move"; // Allow move effect
  }

  function DragOver(evt) {
    evt.preventDefault(); // Allow drop
  }

  function handleDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation(); // Prevent unwanted bubbling

    if (dragSource !== this) { // Avoid swapping with itself
      let droppedData = evt.dataTransfer.getData("text/plain");
      if (droppedData) {
        dragSource.innerHTML = this.innerHTML;
        this.innerHTML = droppedData;
      }
    }
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
