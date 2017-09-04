// Desctop icons
new IconComponent({ name: 'Другое',img: 'folder', entry: '#app', ID: 'another-files' });
new IconComponent({ name: 'Мои документы',img: 'folder', entry: '#app', ID: 'my-files' });


// Windows

var anotherFiles = new WindowComponent({
	action: '#another-files',
	ID: 'anotherFiles',
})
var myFiles = new WindowComponent({
	action: '#my-files',
	ID: 'myCompWindow',
});


// Windows files
anotherFiles.files = [
	new IconComponent({ name: 'Текстовый файл 1', img: 'text-file', entry: '#anotherFiles' }),
	new IconComponent({ name: 'Текстовый файл 2', img: 'text-file', entry: '#anotherFiles' }),
	new IconComponent({ name: 'Текстовый файл 3', img: 'text-file', entry: '#anotherFiles' }),
	new IconComponent({ name: 'Текстовый файл 4', img: 'text-file', entry: '#anotherFiles' }),
];
myFiles.files = [
	new IconComponent({ name: 'Текстовый файл 1', img: 'text-file', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Текстовый файл 2', img: 'text-file', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Текстовый файл 3', img: 'text-file', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Текстовый файл 4', img: 'text-file', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Текстовый файл 5', img: 'text-file', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Текстовый файл 6', img: 'text-file', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Текстовый файл 7', img: 'text-file', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Видео-файл 1', img: 'movie', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Видео-файл 2', img: 'movie', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Видео-файл 3', img: 'movie', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Видео-файл 4', img: 'movie', entry: '#myCompWindow' }),
	new IconComponent({ name: 'Видео-файл 5', img: 'movie', entry: '#myCompWindow' }),
];

// Window close engine
myFiles.closeIt();
anotherFiles.closeIt();