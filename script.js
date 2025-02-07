document.body.style.background = "#C6E7FF";

// let whiteboxes = document.querySelectorAll('.whitebox');


// whiteboxes.forEach(boxes => {
//     boxes.addEventListener('dragstart', function (e) {
//         draggedElement = e.target;
//         setTimeout(() => {
//         }, 0);
//     });

//     box.addEventListener('dragend', function (e) {
//         e.target.classList.remove('hide'); 
//     });
// });

// whiteboxes.forEach(whitebox => {
//     whitebox.addEventListener('dragover', (e) => {
//         e.preventDefault(); 
//     });

//     whitebox.addEventListener('drop', (e) => {
//         e.preventDefault(); 

//         if (draggedElement && e.target.classList.contains("whitebox")) {
//             e.target.parentNode.insertBefore(draggedElement, e.target);
//         }
//     });
// });
// first function ha

// const boxes = document.querySelectorAll('#box');
// const draggingClass = 'dragging';
// let draggedElement;

// boxes.forEach(box => {
//   box.addEventListener('dragstart', onDragStart);
//   box.addEventListener('dragenter', onDragEnter);
//   box.addEventListener('dragover', onDragOver);
//   box.addEventListener('dragleave', onDragLeave);
//   box.addEventListener('drop', onDrop);
//   box.addEventListener('dragend', onDragEnd);
// });

// function onDragStart(event) {
//   draggedElement = this;
//   event.target.classList.add(draggingClass);
//   event.dataTransfer.effectAllowed = 'move';
//   event.dataTransfer.setData('text/html', this.innerHTML);
// }

// function onDragOver(event) {
//   event.preventDefault(); 
//   event.dataTransfer.dropEffect = 'move';
// }

// function onDragEnter() {
//   this.classList.add('over');
// }

// function onDragLeave() {
//   this.classList.remove('over');
// }

// function onDrop(event) {
//   event.preventDefault();
  
//   if (draggedElement !== this) {
//     const tempContent = this.innerHTML;
//     this.innerHTML = event.dataTransfer.getData('text/html');
//     draggedElement.innerHTML = tempContent;
//   }
// }

// function onDragEnd() {
//   boxes.forEach(box => box.classList.remove('over', draggingClass));
// }


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
    const button = document.querySelector("#Click");
    const boxes = document.querySelector("#boxes");
    
    if (button && boxes) {
        button.addEventListener("click", () => {
            for (var i = boxes.children.length; i >= 0; i--) {
                boxes.appendChild(boxes.children[Math.random() * i | 0]);
            }
        });
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

  
// const para = document.getElementById("para")
// function handelChange() {
// para.innerHTML = "good"
// }