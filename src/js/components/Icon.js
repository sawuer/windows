/**
 * Module(function constructor)
 */

this.IconComponent = (function() {

	// Constructor
	function constructor(confs) {
		this.name = confs.name;
		this.ext = confs.ext;
		this.weight = confs.weight;
		this.img = confs.img;
		this.entry = confs.entry;


		// Private logic


		// Main function for new window
		function createIcon(name, ext, weight, img, entry) {
			var template = '\
				<div class="icon">\
					<div class="icon__img">\
						<img class="icon__src" src="src/img/icons/' + img + '.png">\
					</div>\
					<div class="icon__title">\
						<span class="icon__info">' + name + (this.ext ? this.ext : '' ) + '</span>\
						<span class="icon__weight">' + weight + '</span>\
					</div>\
				</div>\
			';
			// console.log(entry)
			document.querySelector(entry).innerHTML += template;
		}


		this.init = function() {
			createIcon(this.name, this.ext, this.weight, this.img, this.entry);
		}


		// Init section
		this.init();



	}

	return constructor;

	// Public methods

}());