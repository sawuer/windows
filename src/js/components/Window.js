/**
 * Module(function constructor)
 */

this.WindowComponent = (function() {

	// Constructor
	function constructor(confs) {
		this.on = confs.on;
		this.height = confs.height;
		this.width = confs.width;


		// Private logic
		var element = document.querySelector(this.on);
		var body = document.querySelector('body');


		// Main function for new window
		function createWindow(height, width) {
			// var icon = 
			var template = '\
				<div class="window">\
					<div class="window-header">\
						<div class="window-header__close"></div>\
					</div>\
					<div class="window-body">\
					</div>\
				</div>\
			';

			var thisClose = document.querySelector('.window-header__close');

			function closeWindow() {

			}
			// Add new window into body
			body.innerHTML += template;
		}



		this.init = function() {
			console.log(element)
			element.ondblclick = function() {
				createWindow(this.height, this.width);
			}
		}


		// Init section
		this.init();



	}

	return constructor;

	// Public methods

}());