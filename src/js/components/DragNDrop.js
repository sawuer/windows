var DragNDrop = (function() {

  var app = document.querySelector('#app');

  app.onmousedown = function(e) {
    if (!e.target.classList.contains('draggable')) return;
    var toX, toY;
    function startDrag(clientX, clientY) {
      e.target.style.position = 'fixed';
      toX = clientX - e.target.getBoundingClientRect().left;
      toY = clientY - e.target.getBoundingClientRect().top;
      app.appendChild(e.target);
      moveTo(clientX, clientY);
    };

    function finishDrag() {
      e.target.style.top = parseInt(e.target.style.top) + pageYOffset + 'px';
      e.target.style.position = 'absolute';
      app.onmousemove = null;
      e.target.onmouseup = null;
    }

    function moveTo(clientX, clientY) {
      var X = clientX - toX;
      var Y = clientY - toY;
      var newBottom = Y + e.target.offsetHeight;
      if (newBottom > app.clientHeight) {
        var docBottom = app.getBoundingClientRect().bottom;
        var scrollY = Math.min(docBottom - newBottom, 10);
        if (scrollY < 0) {
        	scrollY = 0;
        }
        window.scrollBy(0, scrollY);
        Y = Math.min(Y, app.clientHeight - e.target.offsetHeight);
      }

      if (Y < 0) {
        var scrollY = Math.min(-Y, 10);
        if (scrollY < 0) scrollY = 0; 
        window.scrollBy(0, -scrollY);
        Y = Math.max(Y, 0);
      }

      if (X < 0) {
        X = 0;
      }

      if (X > app.clientWidth - e.target.offsetHeight) {
        X = app.clientWidth - e.target.offsetHeight;
      }

      e.target.style.left = X + 'px';
      e.target.style.top = Y + 'px';
    }
    startDrag(e.clientX, e.clientY);

    app.onmousemove = function(e) {
      moveTo(e.clientX, e.clientY);
    };

    e.target.onmouseup = function() {
      finishDrag();
    };



  }
}())
