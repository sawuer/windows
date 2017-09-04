/**
 * Module(function constructor)
 */

this.WindowComponent = (function() {

	// Constructor
	function constructor(confs) {
		var self = this;
		this.action = confs.action;
		this.ID = confs.ID;
		this.height = confs.height;
		this.width = confs.width;


		// Private logic
		var app = document.querySelector('#app');


		// Main function for new window
		function createWindow(height, width, ID) {
			// var icon = 
			var template = '\
				<div id="' + ID + '" class="window window__hide">\
					<div class="window-header">\
						<div class="window-header__close"></div>\
					</div>\
				</div>\
			';
			console.log(template)
			// Add new window into body
			app.innerHTML += template;
		}

		// console.log(document.getElementById(this.ID))

		function openWindow(id) {
			document.getElementById(id).classList.remove('window__hide');
		}


		this.init = function() {
			createWindow(this.height, this.width, this.ID);

			document.querySelector(this.action).ondblclick = function() {
				openWindow(self.ID)
			}
		}


		// Init section
		this.init();



	}

	return constructor;

	// Public methods

}());