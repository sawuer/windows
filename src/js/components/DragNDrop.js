document.onmousedown = function(e) {

  if (!e.target.classList.contains('draggable')) return;

  var coords, shiftX, shiftY;

  startDrag(e.clientX, e.clientY);

  document.onmousemove = function(e) {
    moveAt(e.clientX, e.clientY);
  };

  e.target.onmouseup = function() {
    finishDrag();
  };


  function startDrag(clientX, clientY) {
    e.target.style.position = 'fixed';
    shiftX = clientX - e.target.getBoundingClientRect().left;
    shiftY = clientY - e.target.getBoundingClientRect().top;
    document.body.appendChild(e.target);
    moveAt(clientX, clientY);
  };

  function finishDrag() {
    e.target.style.top = parseInt(e.target.style.top) + pageYOffset + 'px';
    e.target.style.position = 'absolute';
    document.onmousemove = null;
    e.target.onmouseup = null;
  }

  function moveAt(clientX, clientY) {
    var X = clientX - shiftX;
    var Y = clientY - shiftY;
    var newBottom = Y + e.target.offsetHeight;
    if (newBottom > document.documentElement.clientHeight) {
      var docBottom = document.documentElement.getBoundingClientRect().bottom;
      var scrollY = Math.min(docBottom - newBottom, 10);
      if (scrollY < 0) {
      	scrollY = 0;
      }
      window.scrollBy(0, scrollY);
      Y = Math.min(Y, document.documentElement.clientHeight - e.target.offsetHeight);
    }


    if (Y < 0) {
      var scrollY = Math.min(-Y, 10);
      if (scrollY < 0) scrollY = 0; // поправим ошибку округления
      window.scrollBy(0, -scrollY);
      Y = Math.max(Y, 0);
    }

    if (X < 0) {
      X = 0;
    }

    if (X > document.documentElement.clientWidth - e.target.offsetHeight) {
      X = document.documentElement.clientWidth - e.target.offsetHeight;
    }

    e.target.style.left = X + 'px';
    e.target.style.top = Y + 'px';
  }


}
