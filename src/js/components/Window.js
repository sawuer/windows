/**
 * Module(function constructor)
 */

this.WindowComponent = (function() {

	// Constructor
	function constructor(confs) {
		this.on = confs.on;
		this.id = confs.id;
		this.height = confs.height;
		this.width = confs.width;


		// Private logic
		var element = document.querySelector(this.on);
		var body = document.querySelector('body');


		// Main function for new window
		function createWindow(height, width, id) {
			// var icon = 
			var template = '\
				<div id="' + id + '" class="window window__hide">\
					<div class="window-header">\
						<div class="window-header__close"></div>\
					</div>\
					<div class="window-body">\
					</div>\
				</div>\
			';
			console.log(322323)
			var thisClose = document.querySelector('.window-header__close');
			// Add new window into body
			body.innerHTML += template;
		}


		function openWindow() {
			console.log(document.getElementById(this.id))
			document.getElementById(this.id).classList.remove('window__hide');
		}


		this.init = function() {
			createWindow(this.height, this.width, this.id);
			// console.log(element)
			// element.ondblclick = openWindow();
		}


		// Init section
		this.init();



	}

	return constructor;

	// Public methods

}());