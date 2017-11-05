Main.Win = (function() {

	function ctor(confs) {
		var self = this;
		this.action = confs.action;
		this.ID = confs.ID;

		function createWindow(ID) {
			var template = document.createElement('div');
			template.className = 'window window__hide draggable';
			template.id = ID;
			var header = document.createElement('div');
			var close = document.createElement('div');
			header.className = 'window-header';
			close.className = 'window-header__close';
			header.appendChild(close);
			template.appendChild(header);
			get('#app').appendChild(template);
		}

		function openWindow(id) {
			document.getElementById(id).classList.remove('window__hide');
		}

		// Init
		createWindow(this.ID);
		get(this.action).ondblclick = function() {
			openWindow(self.ID);
		}			
	}


	return ctor;

}());

// Help close function
function closeAllWindows(what) {
	var closes = get(what);
	for (var i = 0; i < closes.length; i++) {
	  closes[i].onclick = function(e) {
	    e.target.parentNode.parentNode.classList.add('window__hide');
	  }
	}
}
