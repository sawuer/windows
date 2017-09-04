this.IconComponent = (function() {

	function constructor(confs) {
		this.name = confs.name;
		this.img = confs.img;
		this.entry = confs.entry;
		this.ID = confs.ID;

		function createIcon(name, img, entry, ID) {
			var template = '\
				<div class="icon" id=' + ID + '>\
					<div class="icon__img">\
						<img class="icon__src" src="src/img/icons/' + img + '.png">\
					</div>\
					<div class="icon__title">\
						<span class="icon__info">' + name + '</span>\
					</div>\
				</div>\
			';
			document.querySelector(entry).innerHTML += template;
		}

		this.init = function() {
			createIcon(this.name, this.img, this.entry, this.ID);
		}

		this.init();
	}

	return constructor;

}());