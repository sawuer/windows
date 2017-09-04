var myComputer = new WindowComponent({
	action: '#my-computer',
	ID: 'myCompWindow',
	width: '200',
	height: '200',
});


myComputer.files = [
	new IconComponent({ 
		name: 'пароли', 
		extension: 'txt', 
		weight: '2кб',
		img: 'text-file',
		entry: '#myCompWindow'
	}),
	new IconComponent({ 
		name: 'пароли', 
		extension: 'txt', 
		weight: '2кб',
		img: 'text-file',
		entry: '#myCompWindow'
	})
]