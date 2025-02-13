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

  // Touch support for mobile devices
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