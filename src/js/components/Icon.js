/**
 * Module(function constructor)
 */

this.IconComponent = (function() {

	// Constructor
	function constructor(confs) {
		this.name = confs.name;
		this.extension = confs.extension;
		this.weigth = confs.weigth;
		this.img = confs.img;


		// Private logic


		// Main function for new window
		function createIcon() {
			var template = '\
				<div class="icon">\
					<div class="icon__img">\
						<img class="icon__src" src="src/img/txt.png">\
					</div>\
					<div class="icon__title">\
						<p class="icon__info">Мои пароли.txt</p>\
						<p class="icon__weigth">
					</div>\
				</div>\
			';
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