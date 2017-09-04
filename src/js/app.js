var myComputer = new WindowComponent({
	on: '#my-computer',
	width: '200',
	height: '200',
});


myComputer.files = [
	new IconComponent({ 
		name: 'пароли', 
		extension: 'txt', 
		weight: '2кб',
		img: 'text-file',
		entry: '.window'
	}),
	new IconComponent({ 
		name: 'пароли', 
		extension: 'txt', 
		weight: '2кб',
		img: 'text-file',
		entry: '.window'
	})
]