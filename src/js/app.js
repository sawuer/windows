// Desctop icons
new IconComponent({ name: 'Другое',img: 'folder', entry: '#app', ID: 'another-files' });
new IconComponent({ name: 'Мои документы',img: 'folder', entry: '#app', ID: 'my-files' });
new IconComponent({ name: 'Много файлов',img: 'folder', entry: '#app', ID: 'many-files' });


// Windows

var anotherFiles = new WindowComponent({
	action: '#another-files',
	ID: 'anotherFiles',
});
var myFiles = new WindowComponent({
	action: '#my-files',
	ID: 'myFiles',
});
var manyFiles = new WindowComponent({
	action: '#many-files',
	ID: 'manyFiles',
});


// Data
anotherFiles.files = [
	new IconComponent({ name: 'Текстовый файл 1', img: 'text-file', entry: '#anotherFiles' }),
	new IconComponent({ name: 'Текстовый файл 2', img: 'text-file', entry: '#anotherFiles' }),
	new IconComponent({ name: 'Текстовый файл 3', img: 'text-file', entry: '#anotherFiles' }),
	new IconComponent({ name: 'Текстовый файл 4', img: 'text-file', entry: '#anotherFiles' }),
];
myFiles.files = [
	new IconComponent({ name: 'Текстовый файл 1', img: 'text-file', entry: '#myFiles' }),
	new IconComponent({ name: 'Текстовый файл 2', img: 'text-file', entry: '#myFiles' }),
	new IconComponent({ name: 'Текстовый файл 3', img: 'text-file', entry: '#myFiles' }),
	new IconComponent({ name: 'Текстовый файл 4', img: 'text-file', entry: '#myFiles' }),
	new IconComponent({ name: 'Видео-файл 1', img: 'movie', entry: '#myFiles' }),
	new IconComponent({ name: 'Видео-файл 2', img: 'movie', entry: '#myFiles' }),
	new IconComponent({ name: 'Видео-файл 3', img: 'movie', entry: '#myFiles' }),
	new IconComponent({ name: 'Видео-файл 4', img: 'movie', entry: '#myFiles' }),
];
myFiles.files = [
	new IconComponent({ name: 'Текстовый файл 1', img: 'text-file', entry: '#manyFiles' }),
	new IconComponent({ name: 'Текстовый файл 2', img: 'text-file', entry: '#manyFiles' }),
	new IconComponent({ name: 'Текстовый файл 3', img: 'text-file', entry: '#manyFiles' }),
	new IconComponent({ name: 'Текстовый файл 4', img: 'text-file', entry: '#manyFiles' }),
	new IconComponent({ name: 'Текстовый файл 5', img: 'text-file', entry: '#manyFiles' }),
	new IconComponent({ name: 'Текстовый файл 6', img: 'text-file', entry: '#manyFiles' }),
	new IconComponent({ name: 'Видео-файл 1', img: 'movie', entry: '#manyFiles' }),
	new IconComponent({ name: 'Видео-файл 2', img: 'movie', entry: '#manyFiles' }),
	new IconComponent({ name: 'Видео-файл 3', img: 'movie', entry: '#manyFiles' }),
	new IconComponent({ name: 'Видео-файл 4', img: 'movie', entry: '#manyFiles' }),
	new IconComponent({ name: 'Видео-файл 5', img: 'movie', entry: '#manyFiles' }),
	new IconComponent({ name: 'Видео-файл 6', img: 'movie', entry: '#manyFiles' }),
];

// Window close engine
myFiles.closeIt();
anotherFiles.closeIt();
myFiles.closeIt();