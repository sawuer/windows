var WindowComponent = (function() {

	 function constructor(confs) {
		var self = this;

		this.action = confs.action;
		this.ID = confs.ID;

		function createWindow(ID) {
			var template = document.createElement('div');
			template.className = 'window window__hide';
			template.id = ID;
			var header = document.createElement('div');
			var close = document.createElement('div');
			header.className = 'window-header';
			close.className = 'window-header__close';
			header.appendChild(close);
			template.appendChild(header);
			document.querySelector('#app').appendChild(template);

			console.log(template);

			// template.ondragstart = function() {
			//   return false;
			// };
			// template.onmousedown = function(e) {

			//   var coords = getCoords(template);
			//   var shiftX = e.pageX - coords.left;
			//   var shiftY = e.pageY - coords.top;

			//   template.style.position = 'absolute';
			//   document.body.appendChild(template);
			//   moveAt(e);

			//   template.style.zIndex = 1000; // над другими элементами

			//   function moveAt(e) {
			//     template.style.left = e.pageX - shiftX + 'px';
			//     template.style.top = e.pageY - shiftY + 'px';
			//   }

			//   document.onmousemove = function(e) {
			//     moveAt(e);
			//   };

			//   template.onmouseup = function() {
			//     document.onmousemove = null;
			//     template.onmouseup = null;
			//   };

			// }

			// template.ondragstart = function() {
			//   return false;
			// };














































			



		}

		function openWindow(id) {
			document.getElementById(id).classList.remove('window__hide');
		}

		this.init = function() {
			createWindow(this.ID);
			document.querySelector(this.action).ondblclick = function() {
				openWindow(self.ID);
			}			
		}

		this.init();
	}

	constructor.prototype.closeIt = function() {
		var closes = document.querySelectorAll('.window-header__close');
		for (var i = 0; i < closes.length; i++) {
			closes[i].onclick = function(e) {
				e.target.parentNode.parentNode.classList.add('window__hide');
			}
		}
	}

	return constructor;

}());
